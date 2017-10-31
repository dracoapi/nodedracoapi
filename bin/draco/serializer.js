"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const long = require("long");
const objects = require("./objects");
const classes_1 = require("./classes");
function findTypeId(type) {
    for (const key in classes_1.classIds) {
        if (classes_1.classIds[key] === type)
            return +key;
    }
    return null;
}
function isPrimitiveArray(type) {
    if (!type)
        return false;
    return (type.startsWith('int') ||
        type.startsWith('long') ||
        type.startsWith('short') ||
        type.startsWith('bool') ||
        type.startsWith('float') ||
        type.startsWith('double'));
}
class Serializer {
    constructor() {
        this.idx = 0;
        this.buffer = Buffer.alloc(256);
    }
    ensureBuffer(size = 48) {
        if (this.idx + size >= this.buffer.length) {
            this.buffer = Buffer.concat([this.buffer, Buffer.alloc(256 + size)]);
        }
    }
    writeType(type, data) {
        if (!type) {
            // guess type
            if (typeof data === 'number')
                type = 'int';
            else if (typeof data === 'object')
                type = data.constructor.name;
            else if (typeof data === 'string')
                type = 'string';
            else if (Array.isArray(data))
                type = 'List';
        }
        const id = findTypeId(type);
        if (id === null) {
            throw new Error('unable to find type id: ' + type);
        }
        this.writeByte(id);
    }
    writeBoolean(data) {
        return this.writeByte(data ? 1 : 0);
    }
    writeByte(data) {
        this.ensureBuffer();
        this.buffer[this.idx++] = data;
    }
    writeShort(val) {
        this.ensureBuffer();
        this.buffer.writeInt16BE(val, this.idx);
        this.idx += 2;
    }
    writeInt32(val) {
        this.ensureBuffer();
        this.buffer.writeInt32BE(val, this.idx);
        this.idx += 4;
    }
    writeUInt32(val) {
        this.ensureBuffer();
        this.buffer.writeUInt32BE(val, this.idx);
        this.idx += 4;
    }
    writeInt64(val) {
        this.ensureBuffer();
        if (!(val instanceof long)) {
            val = long.fromValue(val);
        }
        this.writeInt32(val.high);
        this.writeInt32(val.low);
    }
    writeFloat(val) {
        this.ensureBuffer();
        this.buffer.writeFloatBE(val, this.idx);
        this.idx += 4;
    }
    writeDouble(val) {
        this.ensureBuffer();
        this.buffer.writeDoubleBE(val, this.idx);
        this.idx += 8;
    }
    writeLength(ln) {
        if (ln < 32767) {
            this.writeShort(ln);
        }
        else {
            this.writeShort((length & (-65536)) >> 16 | 32768);
            this.writeShort(length & 65535);
        }
    }
    writeUtf8String(str) {
        if (!str)
            str = '';
        const buf = Buffer.from(str, 'utf8');
        this.ensureBuffer(buf.length + 4);
        this.writeShort(buf.length);
        buf.copy(this.buffer, this.idx);
        this.idx += buf.length;
    }
    writeStaticArray(data, isstatic, type) {
        this.writeLength(data.length);
        const objtype = type ? type.slice(0, -2) : type;
        for (let i = 0; i < data.length; i++) {
            this.writeObject(data[i], isstatic, objtype);
        }
    }
    writeStaticList(data, staticobject, type) {
        this.writeStaticArray(data, staticobject);
    }
    writeDynamicList(data, isstatic, type) {
        if (data === null || data === undefined) {
            this.writeByte(0);
        }
        else {
            // if (data.length === 0) {
            //     this.writeByte(4);
            // } else {
            //     this.writeByte(findTypeId(data[0]));
            // }
            this.writeByte(4);
            this.writeStaticArray(data, isstatic);
        }
    }
    writeStaticHashSet(data, isstatic, type) {
        this.writeLength(data.size);
        for (const item of data) {
            this.writeObject(item, isstatic);
        }
    }
    writeDynamicMap(data, static1, static2) {
        if (data == null) {
            this.writeByte(0);
        }
        else {
            this.writeStaticMap(data, static1, static2);
        }
    }
    writeStaticMap(data, static1, static2, type) {
        this.ensureBuffer();
        this.writeLength(data.size);
        data.forEach((val, key) => {
            this.writeObject(key, static1);
            this.writeObject(val, static2);
        });
    }
    writeBuffer(buffer) {
        this.ensureBuffer(buffer.length + 4);
        this.writeLength(buffer.length);
        this.buffer = Buffer.concat([this.buffer, buffer]);
        this.idx += buffer.length;
    }
    writeObject(data, isstatic, type) {
        if (isstatic)
            return this.writeStaticObject(data, type);
        else
            return this.writeDynamicObject(data, type);
    }
    writeStaticObject(data, type) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeByte(0);
        }
        else if ((typeof data) === 'boolean') {
            this.writeBoolean(data);
        }
        else if ((typeof data) === 'number') {
            if (data % 1 === 0) {
                this.writeInt32(data);
            }
            else {
                this.writeFloat(data);
            }
        }
        else if (data instanceof long) {
            this.writeInt64(data);
        }
        else if ((typeof data) === 'string') {
            this.writeUtf8String(data);
        }
        else {
            const type = data.constructor.name;
            if (objects[type]) {
                data.serialize(this);
            }
            else {
                throw new Error('Unhandled type: ' + type);
            }
        }
    }
    writeDynamicObject(data, type) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeByte(0);
        }
        else if (Array.isArray(data)) {
            if (isPrimitiveArray(type)) {
                this.writeByte(3);
                this.writeType(type.slice(0, -2), data);
                this.writeStaticArray(data, true, type);
            }
            else {
                this.writeByte(2);
                this.writeType(type ? type.slice(0, -2) : 'object', data);
                this.writeStaticArray(data, false, type);
                // if ((typeof data[0]) === 'number') {
                //     this.writeByte(3);
                //     this.writeByte(3); // int[]
                //     this.writeStaticArray(data, true);
                // } else {
                //     this.writeByte(2);
                //     this.writeByte(4); // object
                //     this.writeStaticArray(data, false);
                // }
            }
        }
        else {
            // let type = -1;
            // if ((typeof data) === 'string') {
            //     type = 12;
            // } else if ((typeof data) === 'number') {
            //     type = 8;
            // } else if ((typeof data) === 'object') {
            //     const datatype = data.constructor.name;
            //     for (const key in classIds) {
            //         if (classIds[key] === datatype) {
            //             type = +key;
            //             break;
            //         }
            //     }
            // } else {
            //     throw new Error('writeDynamicObject');
            // }
            // if (type === -1) {
            //     throw new Error('writeDynamicObject');
            // }
            this.writeType(type, data);
            // this.writeByte(type);
            this.writeStaticObject(data);
        }
    }
    serialize(data) {
        this.writeDynamicObject(data);
        return this.buffer.slice(0, this.idx);
    }
}
exports.default = Serializer;
//# sourceMappingURL=serializer.js.map