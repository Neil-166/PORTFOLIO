import { jt as EventsMap, kt as EventEmitter } from "../devframe-BADsX91-.mjs";
//#region src/utils/events.d.ts
/**
 * Create event emitter.
 */
declare function createEventEmitter<Events extends EventsMap>(): EventEmitter<Events>;
//#endregion
export { createEventEmitter };