/// <reference types="node" />
import * as long from 'long';
export default class Serializer {
    buffer: Buffer;
    idx: number;
    constructor();
    ensureBuffer(size?: number): void;
    writeType(type: string, data: any): void;
    writeBoolean(data: any): void;
    writeByte(data: any): void;
    writeSByte(data: any): void;
    writeShort(val: any): void;
    writeInt32(val: any): void;
    writeUInt32(val: any): void;
    writeInt64(val: long): void;
    writeFloat(val: any): void;
    writeDouble(val: any): void;
    writeLength(ln: any): void;
    writeUtf8String(str: any): void;
    writeStaticArray(data: any[], isstatic: boolean, type?: string): void;
    writeStaticList(data: any, staticobject: boolean, type?: string): void;
    writeDynamicList(data: any[], isstatic: boolean, type?: string): void;
    writeStaticHashSet(data: Set<any>, isstatic: boolean, type?: string): void;
    writeDynamicMap(data: any, static1: boolean, static2: boolean): void;
    writeStaticMap(data: Map<any, any>, static1: boolean, static2: boolean, type?: string): void;
    writeBuffer(buffer: Buffer): void;
    writeObject(data: any, isstatic: boolean, type?: string): void;
    writeStaticObject(data: any, type?: string): void;
    writeDynamicObject(data: any, type?: string): void;
    serialize(data: any): Buffer;
}
