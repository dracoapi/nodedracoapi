import * as long from 'long';
import * as objects from './objects';
import { classIds, primitiveIds } from './classes';

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
    writeInt64(val: long) {
        this.ensureBuffer();
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
    writeStaticArray(data: any[], staticobject = false) {
        this.writeLength(data.length);
        const array = [];
        for (let i = 0; i < data.length; i++) {
            this.writeObject(data[i], staticobject);
        }
        return array;
    }
    writeStaticList(data, staticobject = false) {
        this.writeStaticArray(data, staticobject);
    }
    writeStaticHashSet(data, staticobject = false) {
        return this.writeStaticArray(data, staticobject);
    }
    writeDynamicMap(data, static1 = false, static2 = false) {
        if (data == null) {
            this.writeByte(0);
        } else {
            this.writeStaticMap(data, static1, static2);
        }
    }
    writeStaticMap(data: Map<any, any>, static1 = false, static2 = false) {
        this.ensureBuffer();
        this.writeLength(data.size);
        data.forEach((val, key) => {
            this.writeObject(key, static1);
            this.writeObject(val, static2);
        });
    }
    writeBuffer(buffer: Buffer, staticobject = false) {
        this.ensureBuffer(buffer.length + 4);
        this.writeLength(buffer.length);
        this.buffer = Buffer.concat([this.buffer, buffer]);
        this.idx += buffer.length;
    }
    writeObject(data, staticobject = false) {
        if (staticobject) return this.writeStaticObject(data);
        else return this.writeDynamicObject(data);
    }
    writeStaticObject(data) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeByte(0);
        } else if ((typeof data) === 'boolean') {
            this.writeBoolean(data);
        } else if ((typeof data) === 'number') {
            if (data % 1 === 0) {
                this.writeInt32(data);
            } else {
                this.writeFloat(data);
            }
        } else if (data instanceof long) {
            this.writeInt64(data);
        } else if ((typeof data) === 'string') {
            this.writeUtf8String(data);
        } else {
            const type = data.constructor.name;
            if (objects[type]) {
                data.serialize(this);
            } else {
                throw new Error('Unhandled type: ' + type);
            }
        }
    }
    writeDynamicObject(data) {
        this.ensureBuffer();
        if (data === null || data === undefined) {
            this.writeByte(0);
        } else if (Array.isArray(data)) {
            if (data.length === 0) {
                this.writeByte(0);
            } else {
                if ((typeof data[0]) === 'number') {
                    this.writeByte(3);
                    this.writeByte(3); // int[]
                    this.writeStaticArray(data, true);
                } else {
                    this.writeByte(2);
                    this.writeByte(4); // object
                    this.writeStaticArray(data, false);
                }
            }
        } else {
            let type = -1;
            if ((typeof data) === 'string') {
                type = 12;
            } else if ((typeof data) === 'number') {
                type = 8;
            } else if ((typeof data) === 'object') {
                const datatype = data.constructor.name;
                for (const key in classIds) {
                    if (classIds[key] === datatype) {
                        type = +key;
                        break;
                    }
                }
            } else {
                throw new Error('writeDynamicObject');
            }
            if (type === -1) {
                throw new Error('writeDynamicObject');
            }
            this.writeByte(type);
            this.writeStaticObject(data);
        }
    }
    serialize(data) {
        this.writeDynamicObject(data);
        return this.buffer;
    }
}
