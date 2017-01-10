import ee from 'event-emitter'
var emitter = ee({}), listener;

// =============================================================================
export function addListener(eID, listener) {  
    emitter.on(eID, listener);
}
export function removeListener(eID, listener) {  
    emitter.off(eID, listener);
}
export function emitEID(eID, args) {  
    // console.log("emitting: ", eID);
    emitter.emit(eID, args);
}
