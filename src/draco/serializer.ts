import * as long from 'long';
import * as objects from './objects';
import * as enums from './enums';
import { classIds, primitiveIds } from './classes';

function findTypeId(type: string) {
    for (const key in classIds) {
        if (classIds[key] === type) return +key;
    }
    return null;
}

function isPrimitive(type: string) {
    if (!type) return false;
    return (type.startsWith('int') ||
            type.startsWith('sbyte') ||
            type.startsWith('long') ||
            type.startsWith('short') ||
            type.startsWith('bool') ||
            type.startsWith('float') ||
            type.startsWith('double'));
}

export default class Serializer {
    buffer: Buffer;
    idx: number;
    constructor() {
        this.idx = 0;
        this.buffer = Buffer.alloc(256);
    }
    ensureBuffer(size = 48) {
        if (this.idx + size >= this.buffer.length) {
            this.buffer = Buffer.concat([this.buffer, Buffer.alloc(256 + size)]);
        }
    }
    writeType(type: string, data: any) {
        if (!type) {
            // guess type
            if (typeof data === 'number' && data % 1 === 0) type = 'int';
            else if (typeof data === 'number') type = 'float';
            else if (data.__type) type = data.__type;
            else if (typeof data === 'object') type = data.constructor.name;
            else if (typeof data === 'string') type = 'string';
            else if (typeof data === 'boolean') type = 'bool';
            else if (Array.isArray(data)) type = 'List<>';
            else {
                throw new Error('Unhandled: ' + data);
            }
        }
        const id = findTypeId(type);
        if (id === null) {
            throw new Error('unable to find type id: ' + type);
        }
        this.writeSByte(id);
        return type;
    }
    writeBoolean(data) {
        return this.writeByte(data ? 1 : 0);
    }
    writeByte(data) {
        this.ensureBuffer();
        this.buffer[this.idx++] = data;
    }
    writeSByte(data) {
        this.ensureBuffer();
        this.idx = this.buffer.writeInt8(data, this.idx);
    }
    writeShort(val) {
        this.ensureBuffer();
        this.idx = this.buffer.writeInt16BE(val, this.idx);
    }
    writeInt32(val) {
        this.ensureBuffer();
        this.idx = this.buffer.writeInt32BE(val, this.idx);
    }
    writeUInt32(val) {
        this.ensureBuffer();
        this.idx = this.buffer.writeUInt32BE(val, this.idx);
    }
    writeInt64(val: long) {
        this.ensureBuffer();
        if (!(val instanceof long)) {
            val = long.fromValue(val);
        }
        this.writeInt32(val.high);
        this.writeInt32(val.low);
    }
    writeFloat(val) {
        this.ensureBuffer();
        this.idx = this.buffer.writeFloatBE(val, this.idx);
    }
    writeDouble(val) {
        this.ensureBuffer();
        this.idx = this.buffer.writeDoubleBE(val, this.idx);
    }
    writeLength(ln) {
        if (ln < 32767) {
            this.writeShort(ln);
        } else {
            this.writeShort((length & (-65536)) >> 16 | 32768);
            this.writeShort(length & 65535);
        }
    }
    writeUtf8String(str) {
        if (!str) str = '';
        const buf = Buffer.from(str, 'utf8');
        this.ensureBuffer(buf.length + 4);
        this.writeShort(buf.length);
        buf.copy(this.buffer, this.idx);
        this.idx += buf.length;
    }
    writeStaticArray(data: any[], isstatic: boolean, type?: string) {
        this.writeLength(data.length);
        const objtype = type ? type.slice(0, -2) : type;
        for (let i = 0; i < data.length; i++) {
            this.writeObject(data[i], isstatic, objtype);
        }
    }
    writeStaticList(data, staticobject: boolean, type?: string) {
        this.writeStaticArray(data, staticobject);
    }
    writeDynamicList(data: any[], isstatic: boolean, type?: string) {
        if (data === null || data === undefined) {
            this.writeSByte(0);
        } else {
            // if (data.length === 0) {
            //     this.writeByte(4);
            // } else {
            //     this.writeByte(findTypeId(data[0]));
            // }
            this.writeSByte(4);
            this.writeStaticArray(data, isstatic);
        }
    }
    writeStaticHashSet(data: Set<any>, isstatic: boolean, type?: string) {
        this.writeLength(data.size);
        for (const item of data) {
            this.writeObject(item, isstatic);
        }
    }
    writeDynamicMap(data, static1: boolean, static2: boolean) {
        if (data == null) {
            this.writeSByte(0);
        } else {
            this.writeStaticMap(data, static1, static2);
        }
    }
    writeStaticMap(data: Map<any, any>, static1: boolean, static2: boolean, type?: string) {
        this.ensureBuffer();
        if (data) {
            this.writeLength(data.size);
            data.forEach((val, key) => {
                this.writeObject(key, static1);
                this.writeObject(val, static2);
            });
        } else {
            this.writeLength(0);
        }
    }
    writeBuffer(buffer: Buffer) {
        if (!buffer) buffer = Buffer.alloc(0);
        this.ensureBuffer(buffer.length + 4);
        this.writeLength(buffer.length);
        this.buffer = Buffer.concat([this.buffer, buffer]);
        this.idx += buffer.length;
    }
    writeObject(data, isstatic: boolean, type?: string) {
        if (isstatic) return this.writeStaticObject(data, type);
        else return this.writeDynamicObject(data, type);
    }
    writeStaticObject(data, type?: string) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeSByte(0);
        } else if (type) {
            if (isPrimitive(type) && data.__type) data = data.value;
            if (data.__type === 'List' || data.__type === 'List<>') this.writeStaticList(data.value, false, 'object');
            else if (type === 'bool') this.writeBoolean(data);
            else if (type === 'sbyte') this.writeSByte(data);
            else if (type === 'int') this.writeInt32(data);
            else if (type === 'long') this.writeInt64(data);
            else if (type === 'float') this.writeFloat(data);
            else if (type === 'double') this.writeDouble(data);
            else if (type === 'string') this.writeUtf8String(data);
            else if (objects[type]) data.serialize(this);
            else if (enums[type]) {
                if (data.__type) data = data.value;
                this.writeByte(data);
            } else {
                throw new Error('writeStaticObject: ' + type);
            }
        } else {
            throw new Error('unhandled');
        }
    }
    writeDynamicObject(data, type?: string) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeSByte(0);
        } else if (Array.isArray(data)) {
            if (isPrimitive(type)) {
                this.writeSByte(3);
                this.writeType(type.slice(0, -2), data);
                this.writeStaticArray(data, true, type);
            } else {
                this.writeSByte(2);
                this.writeType(type ? type.slice(0, -2) : 'object', data);
                this.writeStaticArray(data, false, type);
            }
        } else {
            type = this.writeType(type, data);
            this.writeStaticObject(data, type);
        }
    }
    serialize(data) {
        this.idx = 0;
        this.writeDynamicObject(data);
        return this.buffer.slice(0, this.idx);
    }
}
