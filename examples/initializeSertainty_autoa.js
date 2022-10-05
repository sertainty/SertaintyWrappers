const { uxpBa, uxpSys, uxpFile, uxpCh, utils } = require("../index");
const fs = require('fs');
const readlineSync = require('readline-sync');
const { uxpId } = require("../wrapper/wrapper");

const Sample_T_Id = {
    SAMPLE_T_CH0 : 1,
    SAMPLE_T_CH1 : 2,
    SAMPLE_T_CH2 : 3,
    SAMPLE_T_CH3 : 4,
    SAMPLE_T_CH4 : 5,
    SAMPLE_T_CH5 : 6,
    SAMPLE_T_CH6 : 7,
    SAMPLE_T_CH7 : 8,
    SAMPLE_T_CH8 : 9,
    SAMPLE_T_CH9 : 10,
    SAMPLE_T_RS0 : 11,
    SAMPLE_T_RS1 : 12,
    SAMPLE_T_RS2 : 13,
    SAMPLE_T_RS3 : 14,
    SAMPLE_T_RS4 : 15,
    SAMPLE_T_RS5 : 16,
    SAMPLE_T_RS6 : 17,
    SAMPLE_T_RS7 : 18,
    SAMPLE_T_RS8 : 19,
    SAMPLE_T_RS9 : 20,
    SAMPLE_T_USER : 21
};

const main = () => {
    let license = "sertainty.lic";
    let appKey = "SertintyONE";
    let prefix = "sertainty";
    let version = "1.0.0";
    let error = null;
    let fileHandle = null;
    let appHandle = null;
    let username = null;
    // input files
    const idXmlSpec = "sample_auto_auth_id.xml";//"sampleid.xml";
    const dataPdfSpec = 'data.pdf';
    const dataPdf2Spec = 'data2.pdf';
    // these files will be generated when program running
    const copy1Spec = "copy1.pdf";
    const copy2Spec = "copy2.pdf";
    const idFileSpec = "sample_auto_auth_id.iic";
    const uxpFileSpec = "sample_auto_auth_id.uxp";
    //const uxpFileSpec = "sample_auto_auth_id.uxp";
    /*
      This will initialize the secure text.  We store the necessary challenges
      and responses from the secure text message file in the Sertainty home folder.
  */
    console.log("sampleAutoTextInit");
    callStatusHandle = uxpSys.newCallStatusHandle();
    sampleAutoTextInit();
    console.log(" Done sampleAutoTextInit");
    try {
        //console.log("initializing sertainty");
        bufferHandle = uxpBa.newHandle();
        uxpSys.initLibrary(bufferHandle, 0, [], license, appKey, prefix, version);
        //uxpsys
        console.log("sertainty initialized");
        callStatusHandle = uxpSys.newCallStatusHandle();
        uxpSys.fileReadAll(callStatusHandle, idXmlSpec, bufferHandle);
        const dataHandle = uxpBa.getData(bufferHandle);
        const doc = utils.readAsString(dataHandle);
        uxpId.publishToFile(callStatusHandle, idFileSpec, doc, 1);
        appHandle = uxpFile.newHandle();
        uxpFile.openNewFile(appHandle, uxpFileSpec, idFileSpec, 3, 1, 0)
        uxpFile.addVirtualFromFile(appHandle, "data.pdf", dataPdfSpec, -1, -1, 8)
        //uxpFile.addVirtualFromFile(appHandle, "data2.pdf", dataPdf2Spec, -1, -1, 8)
        fileHandle = uxpFile.openVirtualFile(appHandle, "data.pdf", 0)
        // check if opening virtual file have any error
        error = uxpSys.hasError(appHandle);
        console.log("addVirtualFromFile", error)
        const wstream = fs.createWriteStream(copy1Spec);
        while (isEndOfFile(appHandle, fileHandle, bufferHandle)) {
            const length = uxpBa.getSize(bufferHandle)
            const dataHandle = uxpBa.getData(bufferHandle)
            const data = utils.readAsBuffer(dataHandle, length);
            wstream.write(Uint8Array.from(data))
        }
        wstream.end();
        uxpFile.closeVirtualFile(appHandle, fileHandle);
        console.log(`Finished reading ${dataPdfSpec}`);
        if (uxpFile.compareExternalFile(appHandle, dataPdfSpec, copy1Spec))
        { console.log(`Comparison of data.pdf to copy1.pdf: failed`);}
        else {console.log(`Comparison of data.pdf to copy1.pdf: successful`);}
        uxpFile.close(appHandle)

        /* Reopen the UXP ... includes auto authentication */
        uxpFile.openFile(appHandle, uxpFileSpec,1);
        if (uxpSys.getErrorMessage(appHandle)) {
            const errorText = getError(appHandle);
            console.log("Error opening UXP: {0}", errorText);
        } else {
            console.log("Opening new UXP and auto-authenticatingn")
            const challengeHandle = uxpCh.newHandle();
            if (uxpSys.getErrorMessage(challengeHandle)) {
                const errorText = getError(challengeHandle);
                console.log("Error opening UXP: {0}", errorText);
            }else {
                uxpId.getSecureText(callStatusHandle, bufferHandle, "Sample", Sample_T_Id.SAMPLE_T_USER);
                uxpCh.setName(challengeHandle, "USERNAME");
                uxpCh.setPrompt(challengeHandle, "Username");
                uxpCh.setValueString(challengeHandle,uxpBa.getData(bufferHandle));
                uxpFile.addResponse(appHandle,challengeHandle);
                for (let i = 0; i < 10; i++) {
                    uxpId.getSecureText(callStatusHandle, bufferHandle, "Sample", Sample_T_Id.SAMPLE_T_CH0 + i);
                    uxpCh.setName(challengeHandle,uxpBa.getData(bufferHandle));
                    uxpCh.setPrompt(challengeHandle,uxpBa.getData(bufferHandle));
                    uxpId.getSecureText(callStatusHandle, bufferHandle,"Sample", Sample_T_Id.SAMPLE_T_RS0 + i);
                    uxpCh.setValueString(challengeHandle,uxpBa.getData(bufferHandle));
                    uxpFile.addResponse(appHandle,challengeHandle);
                }
                uxpCh.freeHandle(challengeHandle);
                status = uxpFile.authenticate(appHandle, 0);
                switch (status) {
                        case uxpFile.types.StatusAuthorized: {
                            console.log("UXP authorized");
                            authorized = true;
                            break;
                        }
                        case uxpFile.types.StatusNotAuthorized: {
                            console.log("UXP not authorized");
                            authorized = false;
                            break;
                        }
                        default: {
                            console.log("Invalid authorization status");
                            break;
                        }
                    }
            }
            if (authorized) {
                console.log(`Extracting data.pdf to copy2.pdf}`);
                fileHandle = uxpFile.openVirtualFile(appHandle,"data.pdf", 1);

                if (uxpSys.hasError(appHandle)) {
                    const errText = getError(appHandle);
                    console.log("Error openVirtualFile: {0}", errText);
                } else {
                    const wstream2 = fs.createWriteStream(copy2Spec);

                    while (isEndOfFile(appHandle, fileHandle, bufferHandle)) {
                        const length = uxpBa.getSize(bufferHandle);
                        const dataHandle = uxpBa.getData(bufferHandle);
                        const data = utils.readAsBuffer(dataHandle, length);
                        wstream2.write(data);
                    }
                    wstream2.close();
                    uxpFile.closeVirtualFile(appHandle, fileHandle);
                }
            }
        }
        uxpFile.close(appHandle);
        uxpFile.freeHandle(appHandle);
        uxpSys.freeCallStatusHandle(callStatusHandle);
        uxpBa.freeHandle(bufferHandle);
        console.log("******************** Sample finished *********************");
    }
    catch
        (error)
        {
            console.log(`failed to initialize sertainty: ${error.message}`);
        }
    finally
        {
            console.log("cleaning handles");
            console.log("*******************************");
        };
    };
;

// run the program
main();

function sampleAutoTextInit() {
    const key = new Buffer.from([97,84,80,53,122,101,49,107,117,101,49,90,106,117,83,104,51,48,97,97,90,
        75,118,72,115,109,82,113,47,116,86,114,75,43,57,103,101,83,83,66,52,82,
        51,119,120,75,110,71,43,105,80,107,82,99,68,98,86,47,68,86,97,84,70,
        74,71,90,85,52,69,109,100,110,50,102,65,68,116,98,110,108,57,118,102,104,
        105,115,51,122,108,51,119,119,88,48,54,52,67,103,101,121,119,49,50,43,55,
        115,103,54,66,85,85,108,114,116,111,69,53,57,76,110,47,69,82,101,112,82,
        119,65,111,80,67,69,73,54,77,57,47,52,112,82,100,122,48,121,72,111,114,
        75,70,48,71,53,71,57,77,105,120,116,122,111,115,106,112,75,75,80,100,101,
        51,106,103,99,80,110,100,106,122,97,110,85,108,115,81,87,55,66,85,72,112,
        97,56,77,72,100,49,118,111,55,90,43,106,119,52,116,67,49,49,113,97,106,
        104,79,88,71,104,57,67,85,104,75,67,119,107,61]);
    callstatus = uxpSys.newCallStatusHandle();
    uxpId.LoadSecureText(callstatus, "Sample", "sample_auto_auth_text.msg", key, key.toString().length);
    if (uxpSys.hasError(callstatus)) {
        const errText = getError(callstatus);
        console.log("callstatus ", errText);
    }
    uxpSys.freeCallStatusHandle(callstatus);
};

function getError(handle) {
    const errorHandle = uxpSys.getErrorMessage(handle);
    const errorText = utils.readAsString(errorHandle);
    return errorText;
};

function isEndOfFile(appHandle, fileHandle, bufferHandle) {
    const readLength = 1000;
    const dataLength = uxpFile.readVirtualFile(
        appHandle,
        fileHandle,
        bufferHandle,
        readLength
    );
    return dataLength > 0;
};
