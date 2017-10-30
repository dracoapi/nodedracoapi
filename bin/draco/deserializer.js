"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const long = require("long");
const objects = require("./objects");
const classes_1 = require("./classes");
class Deserializer {
    constructor(buffer) {
        this.buffer = buffer;
        this.idx = 0;
    }
    readBoolean() {
        return this.readByte() !== 0;
    }
    readByte() {
        return this.buffer[this.idx++];
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
        const num = this.buffer[this.idx++];
        const num2 = this.buffer[this.idx++];
        const len = (num << 8) + (num2 << 0);
        const value = this.buffer.slice(this.idx, this.idx + len).toString('utf8');
        this.idx += len;
        return value;
    }
    readStaticArray(type, staticobject = false) {
        const ln = this.readLength();
        const array = [];
        for (let i = 0; i < ln; i++) {
            array.push(this.readObject(type, staticobject));
        }
        return array;
    }
    readDynamicArray(staticobject = false) {
        if (this.buffer[this.idx] === 2) {
            this.idx++;
            const id = this.buffer[this.idx++].toString();
            const type = classes_1.classIds[id];
            return this.readStaticArray(type, staticobject);
        }
        else if (this.buffer[this.idx] === 3) {
            this.idx++;
            const id = this.buffer[this.idx++].toString();
            const type = classes_1.primitiveIds[id];
            return this.readStaticArray(type, true);
        }
    }
    readStaticList(type, staticobject = false) {
        return this.readStaticArray(type, staticobject);
    }
    readStaticHashSet(type, staticobject = false) {
        return this.readStaticArray(type, staticobject);
    }
    readDynamicMap(type1, type2, static1 = false, static2 = false) {
        const isnull = this.readByte();
        if (isnull)
            return null;
        else
            return this.readStaticMap(type1, type2, static1, static2);
    }
    readStaticMap(type1, type2, static1 = false, static2 = false) {
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
    readObject(type, staticobject = false) {
        if (staticobject)
            return this.readStaticObject(type);
        else
            return this.readDynamicObject();
    }
    readStaticObject(type) {
        let match;
        if (type === 'bool') {
            return this.buffer[this.idx++] !== 0;
        }
        else if (type === 'sbyte') {
            return this.buffer[this.idx++];
        }
        else if (type === 'short') {
            return this.readShort();
        }
        else if (type === 'int') {
            return this.readInt32();
        }
        else if (type === 'long') {
            return this.readInt64();
        }
        else if (type === 'float') {
            const val = this.buffer.readFloatBE(this.idx);
            this.idx += 4;
            return val;
        }
        else if (type === 'double') {
            return this.readDouble();
        }
        else if (type === 'string') {
            return this.readUtf8String();
        }
        else if ((match = /List<(.+)>/.exec(type))) {
            return this.readStaticList(match[1], false);
        }
        else if (objects.enums.indexOf(type) >= 0) {
            return this.readByte();
        }
        else if (objects[type]) {
            const obj = new objects[type]();
            obj.deserialize(this);
            return obj;
        }
        else {
            console.error('unhandled type: ' + type);
            return null;
        }
    }
    readDynamicObject() {
        if (this.buffer[this.idx] === 0) {
            this.idx++;
            return null;
        }
        else if (this.buffer[this.idx] === 2 || this.buffer[this.idx] === 3) {
            return this.readDynamicArray();
        }
        else {
            const id = this.buffer[this.idx++].toString();
            const type = classes_1.classIds[id];
            return this.readStaticObject(type);
        }
    }
    deserialize() {
        return this.readDynamicObject();
    }
}
exports.default = Deserializer;
//# sourceMappingURL=deserializer.js.map