const { uxpBa, uxpSys, uxpFile, uxpCh, utils } = require("../index");
const { uxpId } = require("../wrapper/wrapper");

    let license = "sertainty.lic";
    let appKey = "SertintyONE";
    let prefix = "sertainty";
    let version = "1.0.0";
    let error = null;
    let fileHandle = null;
    let appHandle = null;
    const dataPdfSpec = 'data.pdf';
    const idFileSpec = "sme.iic";
    const uxpFileSpec = "test.uxp";

    // "initializing sertainty" 
    bufferHandle = uxpBa.newHandle();
    uxpSys.initLibrary(bufferHandle, 0, [], license, appKey, prefix, version);
    console.log("sertainty initialized");
    // //Creating new UXP
    // //Protecting document data.pdf
    appHandle = uxpFile.newHandle();
    uxpFile.openNewFile(appHandle, uxpFileSpec, idFileSpec, 3, 1, 0)
    uxpFile.addVirtualFromFile(appHandle, dataPdfSpec, dataPdfSpec, -1, -1, 8)
    uxpFile.close(appHandle)


