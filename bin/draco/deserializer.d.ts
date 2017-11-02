/// <reference types="node" />
export default class Deserializer {
    buffer: Buffer;
    idx: number;
    constructor(buffer: Buffer);
    readBoolean(): boolean;
    readSByte(): number;
    readByte(): number;
    readShort(): number;
    readInt32(): number;
    readUInt32(): number;
    readInt64(): any;
    readFloat(): number;
    readDouble(): number;
    readLength(): number;
    readUtf8String(): string;
    readStaticArray(type: string, staticobject?: boolean): any[];
    readDynamicArray(staticobject?: boolean): any[];
    readDynamicList(type: string, isstatic?: boolean): any[];
    readStaticList(type: string, staticobject?: boolean): any[];
    readStaticHashSet(type: string, staticobject?: boolean): Set<any>;
    readDynamicMap(type1: string, type2: string, static1?: boolean, static2?: boolean): Map<any, any>;
    readStaticMap(type1: string, type2: string, static1?: boolean, static2?: boolean): Map<any, any>;
    readBuffer(staticobject?: boolean): Buffer;
    readObject(type: string, staticobject?: boolean): any;
    readStaticObject(type: any): any;
    readDynamicObject(): any;
    deserialize(): any;
}
