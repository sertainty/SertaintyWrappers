const { uxpBa, uxpSys, uxpFile, uxpCh, utils } = require("../index");
const fs = require('fs');
const readlineSync = require('readline-sync');
const { uxpId } = require("../wrapper/wrapper");

const AUTHORIZATION_STATUS = {
    NotAuthorized: 0x00001,  /*!< Access to UXP is not authorized */
    InvalidUsername: 0x00002,  /*!< Invalid username was provided */
    FileMoved: 0x00004,  /*!< File has been moved */
    ScheduleViolation: 0x00008,  /*!< Schedule violation */
    Authorized: 0x00010,  /*!< User has been authorized */
    ConfigNotFound: 0x00020,  /*!< Address configuration not reconized */
    LocationNotFound: 0x00040,  /*!< Address location not recognized */
    DeviceNotFound: 0x00080,  /*!< Address device not recognized */
    DeviceLocationFound: 0x00100,  /*!< Address location and device pair not recognized */
    Challenged: 0x00200,  /*!< User is challenged */
    Panic: 0x00400,  /*!< User has indicated a panic situation */
    GlobalSchedViolation: 0x00800,  /*!< Global schedule violation */
    Threat: 0x01000,  /*!< Unauthoried access threat detected */
    Canceled: 0x02000,  /*!< User canceled access attempt */
    LdapViolation: 0x04000,  /*!< LDAP approval violation */
    ConfigFound: 0x08000,  /*!< Address configuration was recognized */
    NoSingleSignOn: 0x10000  /*!< Single sign-on attempt failed */
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
    const idXmlSpec = "sampleid.xml";
    const dataPdfSpec = 'data.pdf';
    const dataPdf2Spec = 'data2.pdf';
    // these files will be generated when program running
    const copy1Spec = "copy1.pdf";
    const copy2Spec = "copy2.pdf";
    const idFileSpec = "sampleid.iic";
    const uxpFileSpec = "sample.uxp";
    //const username = "userId";

    try {
        console.log("initializing sertainty");
        bufferHandle = uxpBa.newHandle();
        uxpSys.initLibrary(bufferHandle, 0, [], license, appKey, prefix, version);
        console.log("sertainty initialized");
        console.log("Success");
        callStatusHandle = uxpSys.newCallStatusHandle();
        uxpSys.fileReadAll(callStatusHandle, idXmlSpec, bufferHandle);
        const dataHandle = uxpBa.getData(bufferHandle);
        const doc = utils.readAsString(dataHandle);
        uxpId.publishToFile(callStatusHandle, idFileSpec, doc, 1);
        appHandle = uxpFile.newHandle();
        uxpFile.openNewFile(appHandle, uxpFileSpec, idFileSpec, 3, 1, 0)
        uxpFile.addVirtualFromFile(appHandle, "data.pdf", dataPdfSpec, -1, -1, 8)
        uxpFile.addVirtualFromFile(appHandle, "data2.pdf", dataPdf2Spec, -1, -1, 8)
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
        // reopen the Data ... includes authentication
        console.log("Opening new Data");

        uxpFile.openFile(appHandle, uxpFileSpec,1);

        if (uxpSys.getErrorMessage(appHandle)) {
            const errorText = getError(appHandle);
            console.log("Error opening UXP: {0}", errorText);
        } else {
            console.log("appHandle    :", appHandle);
            console.log("  Username = SampleUser@myemail.com");
            console.log("  Challenge 1 = Response 1");
            console.log("  Challenge 2 = Response 2");
            console.log("  ... ");
            console.log("  Challenge 10 = Response 10\n");

            let done = false;
            let authorized = false;
            let status;

            while (!done) {
                // get authentication status
                status = uxpFile.authenticate(appHandle,0);
                //console.log("    status           :       "  ,status )

                switch (status) {
                    case uxpFile.types.StatusAuthorized: {
                        console.log("UXP authorized");
                        done = true;
                        authorized = true;
                        break;
                    }
                    case uxpFile.types.StatusNotAuthorized: {
                        console.log("UXP not authorized");
                        authorized = false;
                        done = true;
                        break;
                    }
                    case uxpFile.types.StatusChallenged: {
                        console.log("UXP challenged");
                        const challengeCount = uxpFile.getChallengeCount(appHandle);
                        //console.log("challenge count: " + challengeCount);
                        for (let i = 0; i < challengeCount; i++) {
                            const challengeHandle = uxpFile.getChallenge( appHandle, i);
                            getResponse(challengeHandle);
                            uxpFile.addResponse(appHandle, challengeHandle);
                            uxpCh.freeHandle(challengeHandle);
                        }
                        break;
                    }
                    default: {
                        console.log("Invalid authorization status");
                        break;
                    }
                }
            }
            // if user authorized
            //console.log("authorized :    ", authorized)
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
            //uxpBa.freeHandle(appHandle);
            //uxpFile.freeHandle(bufferHandle)
            console.log("*******************************");
        };
    };
;

// run the program
main();


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

// get the response for a challange question
function getResponse(challengeHandle) {
    const promptHandle = uxpBa.newHandle();

    uxpCh.getPrompt(challengeHandle, promptHandle);

    uxpCh.startTimer(challengeHandle);
    const dataHandle = uxpBa.getData(promptHandle);
    const question = utils.readAsString(dataHandle);
    //console.log("question  :     getResponse ",question)
    const answer = readlineSync.question(`${question}  :   `);
    const trimmedAnsewer = answer.trim();
    uxpCh.endTimer(challengeHandle);
    uxpCh.setValueString(challengeHandle, trimmedAnsewer);
    uxpBa.freeHandle(promptHandle);
};

// get challenge and return string challenge with challenge handle
function getChallenge (appHandle, challengeIndex) {
    const challengeHandle = uxpFile.getChallenge(appHandle, challengeIndex);
    const promptHandle = uxpBa.newHandle();
    uxpCh.getPrompt(challengeHandle, promptHandle);
    uxpCh.startTimer(challengeHandle);
    const dataHandle = uxpBa.getData(promptHandle);
    const challenge = utils.readAsString(dataHandle);
    uxpBa.freeHandle(promptHandle);
    uxpCh.endTimer(challengeHandle);
    return [challengeHandle, challenge];
};
