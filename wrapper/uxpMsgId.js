const { uxpMsgId } = require("./wrapper");

//new handler
exports.newHandle = () => {
    let msgHandle = uxpMsgId.newHandle();
    return msgHandle;
};

//set linked id
exports.setLinkedID = (msgHandle, idHandle) => {
    uxpMsgId.setLinkedID(msgHandle, idHandle);
}

//open new buffer
exports.openNewBuffer = (msgHandle, buffer, exchange, pageSize, cacheSize, mods) => {
    let newBuffer = uxpMsgId.openNewBuffer(msgHandle, buffer, exchange, pageSize, cacheSize, mods);
    return newBuffer;
}

//apend
exports.append = (msgHandle, msgFileHandle, message, length) => {
    let appendedData = uxpMsgId.append(msgHandle, msgFileHandle, message, length);
    return appendedData;
}

//close
exports.close = (msgHandle, msgFileHandle) => {
    uxpMsgId.close(msgHandle, msgFileHandle);
}

//open buffer
exports.openBuffer = (msgHandle, buffer, length) => {
    let openedBuffer = uxpMsgId.openBuffer(msgHandle, buffer, length);
    return openedBuffer
}

//get properties
exports.getProperties = (msgHandle, msgFileHandle, buffer) => {
    uxpMsgId.getProperties(msgHandle, msgFileHandle, buffer);
}

//read buffer
exports.read = (msgHandle, msgFileHandle, buffer, mx) => {
    let readFile = uxpMsgId.read(msgHandle, msgFileHandle, buffer, mx);
    return readFile
}