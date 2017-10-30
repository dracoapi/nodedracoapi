import * as long from 'long';
import * as objects from './objects';
import * as constants from './constants';
import { classIds, primitiveIds } from './classes';

export default class Deserializer {
    buffer: Buffer;
    idx: number;
    constructor(buffer: Buffer) {
        this.buffer = buffer;
        this.idx = 0;
    }
    readBoolean() {
        return this.buffer[this.idx++] !== 0;
    }
    readSByte() {
        const val = this.buffer.readInt8(this.idx);
        this.idx++;
        return val;
    }
    readByte() {
        const val = this.buffer.readUInt8(this.idx);
        this.idx++;
        return val;
    }
    readShort() {
        const val = this.buffer.readInt16BE(this.idx);
        this.idx += 2;
        return val;
    }
    readInt32() {
        const val = this.buffer.readInt32BE(this.idx);
        this.idx += 4;
        return val;
    }
    readUInt32() {
        const val = this.buffer.readUInt32BE(this.idx);
        this.idx += 4;
        return val;
    }
    readInt64() {
        const high = this.readInt32();
        const low = this.readInt32();
        return new long(low, high);
    }
    readFloat() {
        const val = this.buffer.readFloatBE(this.idx);
        this.idx += 4;
        return val;
    }
    readDouble() {
        const val = this.buffer.readDoubleBE(this.idx);
        this.idx += 8;
        return val;
    }
    readLength() {
        let num = this.readShort();
        if ((num & 32768) !== 0) {
            num &= -32769;
            const num2 = this.readShort();
            return num << 16 | (num2 & 65535);
        }
        return num;
    }
    readUtf8String() {
        const num = this.readByte();
        const num2 = this.readByte();
        const len = (num << 8) + (num2 << 0);
        const value = this.buffer.slice(this.idx, this.idx + len).toString('utf8');
        this.idx += len;
        return value;
    }
    readStaticArray(type: string, staticobject = false) {
        const ln = this.readLength();
        const array = [];
        for (let i = 0; i < ln; i++) {
            array.push(this.readObject(type, staticobject));
        }
        return array;
    }
    readDynamicArray(staticobject = false) {
        const id = this.readSByte();
        if (id === 2) {
            const classId = this.readSByte().toString();
            const type = classIds[classId];
            return this.readStaticArray(type, staticobject);
        } else if (id === 3) {
            const classId = this.readSByte().toString();
            const type = primitiveIds[classId];
            return this.readStaticArray(type, true);
        } else {
            throw new Error('readDynamicArray');
        }
    }
    readDynamicList(type: string, isstatic = false) {
        if (this.readByte() === 0) return null;
        return this.readStaticList(type, isstatic);
    }
    readStaticList(type: string, staticobject = false) {
        return this.readStaticArray(type, staticobject);
    }
    readStaticHashSet(type: string, staticobject = false) {
        const ln = this.readLength();
        const set = new Set();
        for (let i = 0; i < ln; i++) {
            set.add(this.readObject(type, staticobject));
        }
        return set;
    }
    readDynamicMap(type1: string, type2: string, static1 = false, static2 = false) {
        if (this.readSByte() === 0) return null;
        else return this.readStaticMap(type1, type2, static1, static2);
    }
    readStaticMap(type1: string, type2: string, static1 = false, static2 = false) {
        const ln = this.readLength();
        const map = new Map();
        for (let i = 0; i < ln; i++) {
            const key = this.readObject(type1, static1);
            const value = this.readObject(type2, static2);
            map.set(key, value);
        }
        return map;
    }
    readBuffer(staticobject = false) {
        const ln = this.readLength();
        const buff = this.buffer.slice(this.idx, this.idx + ln);
        this.idx += ln;
        return buff;
    }
    readObject(type: string, staticobject = false) {
        if (staticobject) return this.readStaticObject(type);
        else return this.readDynamicObject();
    }
    readStaticObject(type) {
        let match: RegExpExecArray;
        if (type === 'bool') {
            return this.readBoolean();
        } else if (type === 'sbyte') {
            return this.readSByte();
        } else if (type === 'short') {
            return this.readShort();
        } else if (type === 'int') {
            return this.readInt32();
        } else if (type === 'long') {
            return this.readInt64();
        } else if (type === 'float') {
            const val = this.buffer.readFloatBE(this.idx);
            this.idx += 4;
            return val;
        } else if (type === 'double') {
            return this.readDouble();
        } else if (type === 'string') {
            return this.readUtf8String();
        } else if ((match = /List<(.+)>/.exec(type))) {
            return this.readStaticList(match[1], false);
        } else if (constants[type]) {
            return this.readByte();
        } else if (objects[type]) {
            const obj = new objects[type]();
            obj.deserialize(this);
            return obj;
        } else {
            console.error('unhandled type: ' + type);
            return null;
        }
    }
    readDynamicObject() {
        const id = this.readSByte();
        if (id === 0) {
            return null;
        } else if (id === 2 || id === 3) {
            this.idx--;
            return this.readDynamicArray();
        } else {
            const type = classIds[id.toString()];
            return this.readStaticObject(type);
        }
    }
    deserialize() {
        return this.readDynamicObject();
    }
}
