const ffi = require("ffi");
const path = require("path");
const os = require("os");
const config = require("../config");
const coreDefinitions = require("./coreDefinitions");
const dataServicesDefinitions = require("./dataServicesDefinitions");

try {
  console.log("Initializing sertainty-sdk...");
  const operatingSystem = os.platform();
  let osConfig = config[operatingSystem];

  switch (operatingSystem) {
    case "win32": {
      if (!config.SERTAINTY_HOME) {
        throw new Error("SERTAINTY_HOME env variable is not present");
      }
      const sertainty_home = config.SERTAINTY_HOME;
      console.log("SERTAINTY_HOME: ", sertainty_home);
      const libPath = path.join(sertainty_home, "developer", "bin");
      console.log("Library path: ", libPath);

      const kernel32 = ffi.Library("kernel32", {
        SetDllDirectoryA: ["bool", ["string"]],
      });

      const status = kernel32.SetDllDirectoryA(libPath);

      if (!status) {
        throw new Error("Failed to set the dll path via SetDllDirectoryA");
      }
      break;
    }

    case "darwin": {
      break;
    }

    case "linux": {
      break;
    }

    default:
      throw new Error(
        `OS not supported: Sorry we do not support ${operatingSystem} at the moment. Please contact us for help`
      );
  }

  //initialize core library interface
  console.log("Core Library: ", osConfig.CORE_LIBRARY);
  const core = ffi.Library(osConfig.CORE_LIBRARY, coreDefinitions);

  // initialize directory services library interface
  console.log("Services Library: ", osConfig.DATA_SERVICES_LIBRARY);
  const ds = ffi.Library(
    osConfig.DATA_SERVICES_LIBRARY,
    dataServicesDefinitions
  );

  module.exports = {
    uxpBa: {
      newHandle: core.uxpba_newHandle,
      getData: core.uxpba_getData,
      getSize: core.uxpba_getSize,
      setData: core.uxpba_setData,
      clearData: core.uxpba_clearData,
      freeHandle: core.uxpba_freeHandle,
    },
    uxpCh: {
      newHandle: core.uxpch_newHandle,
      freeHandle: core.uxpch_freeHandle,
      getPrompt: core.uxpch_getPrompt,
      setValueString: core.uxpch_setValueString,
      startTimer: core.uxpch_startTimer,
      endTimer: core.uxpch_endTimer,
      setName: core.uxpch_setName,
      setPrompt: core.uxpch_setPrompt,
      //setValue: core.uxpch_setValue,
      seyKey:core.uxpch_setKey,
    },
    uxpSys: {
      setLogFile: core.uxpsys_setLogFile,
      installLicense: core.uxpsys_installLicense,
      hasError: core.uxpsys_hasError,
      getErrorMessage: core.uxpsys_getErrorMessage,
      initLibrary: core.uxpsys_initLibrary,
      newCallStatusHandle: core.uxpsys_newCallStatusHandle,
      freeCallStatusHandle: core.uxpsys_freeCallStatusHandle,
      fileReadAll: core.uxpsys_fileReadAll,
    },
    uxpId: {
      authenticate: core.uxpid_authenticate,
      getChallengeCount: core.uxpid_getChallengeCount,
      getChallenge: core.uxpid_getChallenge,
      addResponse: core.uxpid_addResponse,
      publishToFile: core.uxpid_publishToFile,
      addConfigurations: core.uxpid_addConfigurations,
      addUsers: core.uxpid_addUsers,
      applyRules: core.uxpid_applyRules,
      applyRulesByName: core.uxpid_applyRulesByName,
      freeHandle: core.uxpid_freeHandle,
      getConfiguration: core.uxpid_getConfiguration,
      getUsers: core.uxpid_getUsers,
      newHandle: core.uxpid_newHandle,
      openSessionFromBuffer: core.uxpid_openSessionFromBuffer,
      openSessionFromFile: core.uxpid_openSessionFromFile,
      publishToBuffer: core.uxpid_publishToBuffer,
      publishToFile: core.uxpid_publishToFile,
      validate: core.uxpid_validate,
      authenticate: core.uxpid_authenticate,
      getChallengeCount: core.uxpid_getChallengeCount,
      getChallenge: core.uxpid_getChallenge,
      addResponse: core.uxpid_addResponse,
      openUxpFromFile: core.uxpid_openUxpFromFile,
      closeSession: core.uxpid_closeSession,
      getSecureText: core.uxlmsg_getSecureText,
      LoadSecureText: core.uxlmsg_loadSecureText,
    },
    uxpFile: {
      newHandle: core.uxpfile_newHandle,
      openNewFile: core.uxpfile_openNewFile,
      openNewFile2: core.uxpfile_openNewFile2,
      addVirtualFromFile: core.uxpfile_addVirtualFromFile,
      openVirtualFile: core.uxpfile_openVirtualFile,
      readVirtualFile: core.uxpfile_readVirtualFile,
      closeVirtualFile: core.uxpfile_closeVirtualFile,
      compareExternalFile: core.uxpfile_compareExternalFile,
      close: core.uxpfile_close,
      openFile: core.uxpfile_openFile,
      authenticate: core.uxpfile_authenticate,
      getChallengeCount: core.uxpfile_getChallengeCount,
      getChallenge: core.uxpfile_getChallenge,
      exportVirtualFile: core.uxpfile_exportVirtualFile,
      addResponse: core.uxpfile_addResponse,
      freeHandle: core.uxpfile_freeHandle,
      getAccessCount: core.uxpfile_getAccessCount,
      cancelOperation: core.uxpfile_cancelOperation,
      checkValidity: core.uxpfile_checkValidity,
      deleteVirtualFile: core.uxpfile_deleteVirtualFile,
      getAuthenticationMessage: core.uxpfile_getAuthenticationMessage,
      errorStatus: core.uxpfile_errorStatus,
    },
    uxpList: {
      getByteArray: core.uxplist_getByteArray,
      count: core.uxplist_count,
      freeList: core.uxplist_freeList,
    },
    uxpDs: {
      newHandle: ds.uxpds_newHandle,
      freeHandle: ds.uxpds_freeHandle,
      initializeDatabase: ds.uxpds_initializeDatabase,
      openDatabase: ds.uxpds_openDatabase,
      openSession: ds.uxpds_openSession,
      authenticate: ds.uxpds_authenticate,
      closeSession: ds.uxpds_closeSession,
      closeDatabase: ds.uxpds_closeDatabase,
      getChallenge: ds.uxpds_getChallenge,
      getChallengeCount: ds.uxpds_getChallengeCount,
      errorStatus: ds.uxpds_errorStatus,
      addResponse: ds.uxpds_addResponse,
      setServer: ds.uxpds_setServer,
      newUser: ds.uxpds_newUser,
      newUserId: ds.uxpds_newUserId,
      getUsers: ds.uxpds_getUsers,
      getUser: ds.uxpds_getUser,
      getServer: ds.uxpds_getServer,
      getService: ds.uxpds_getService,
      setValidationCallback: ds.uxpds_setValidationCallback,
      webService: ds.uxpds_webService,
      publishUserId: ds.uxpds_publishUserId,
      updateUser: ds.uxpds_updateUser,
      updateUserId: ds.uxpds_updateUserId,
      isDatabaseOpen: ds.uxpds_isDatabaseOpen,
      validateSession: ds.uxpds_validateSession,
    },
    uxpDl: {
      newHandle: ds.uxpdl_newHandle,
      errorStatus: ds.uxpdl_errorStatus,
      freeHandle: ds.uxpdl_freeHandle,
      getDelegate: ds.uxpdl_getDelegate,
      getDelegates: ds.uxpdl_getDelegates,
      getSubscribers: ds.uxpdl_getSubscribers,
      newDelegate: ds.uxpdl_newDelegate,
      getSubscription: ds.uxpdl_getSubscription,
      getSubscriptions: ds.uxpdl_getSubscriptions,
      subscribe: ds.uxpdl_subscribe,
      updateDelegate: ds.uxpdl_updateDelegate,
      delegateExists: ds.uxpdl_delegateExists,
      deleteDelegate: ds.uxpdl_deleteDelegate,
      unsubscribe: ds.uxpdl_unsubscribe,
    },
    uxpMsgId: {
      newHandle: core.uxpmsgid_newHandle,
      setLinkedID: core.uxpmsgid_setLinkedID,
      openNewBuffer: core.uxpmsgid_openNewBuffer,
      append: core.uxpmsgid_append,
      close: core.uxpmsgid_close,
      openBuffer: core.uxpmsgid_openBuffer,
      getProperties: core.uxpmsgid_getProperties,
      read: core.uxpmsgid_read,
    },
  };
} catch (err) {
  throw err;
} finally {
  console.log("sertainty-sdk initialized.");
}
