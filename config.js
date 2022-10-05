const config = {
  SERTAINTY_HOME: getSertaintyHome(),
  darwin: {
    CORE_LIBRARY: "libSertaintyCore",
    DATA_SERVICES_LIBRARY: "libSertaintyServices",
  },
  win32: {
    CORE_LIBRARY: "SertaintyCore2",
    DATA_SERVICES_LIBRARY: "SertaintyDataServices",
  },
  linux: {
    CORE_LIBRARY: "libSertaintyCore.so",
    DATA_SERVICES_LIBRARY: "libSertaintyServices.so",
  },
};

function getSertaintyHome() {
  const SERTAINTY_HOME = process.env.SERTAINTY_HOME;
  console.log(" SERTAINTY_HOME = process.env.SERTAINTY_HOME;   ",SERTAINTY_HOME)
  if (SERTAINTY_HOME && SERTAINTY_HOME.length > 0) {
    return SERTAINTY_HOME;
  }

  return "";
}

module.exports = config;
