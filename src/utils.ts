export const makeBuffer = (size: number) => new DataView(new ArrayBuffer(size))
export const makeUint8Array = (thing: any) => new Uint8Array(thing.buffer || thing)
export const clampInt32 = (n: bigint) => Math.min(0xffffffff, Number(n))
export const clampInt16 = (n: bigint) => Math.min(0xffff, Number(n))
