const uxpBa = require("./uxpBa");
const uxpCh = require("./uxpCh");
const uxpFile = require("./uxpFile");
const uxpSys = require("./uxpSys");
const uxpId = require("./uxpId");
const uxpList = require("./uxpList");
const uxpDs = require("./uxpDs");
const uxpMsgId = require("./uxpMsgId");
const uxpDl = require("./uxpDl");

const types = {
  ModifierReplace: 0x00001,
  ModifierMerge: 0x00002,
  ModifierRecurse: 0x00004,
  ModifierCompress: 0x00008,
  ModifierIncHidden: 0x00010,
  ModifierShred: 0x00020,
  ModifierIncRealities: 0x00040,
  ModifierNoOptimize: 0x00080,
  ModifierDeleteSrc: 0x00100,
  ModifierMinSize: 0x00200,
  ModifierReclaim: 0x00400,
  ModifierRecurseVirtual: 0x00800,
  ModifierCreate: 0x01000,
  ModifierLoad: 0x02000,
  ModifierReadWrite: 0x04000,
  ModifierProtect: 0x08000,
  ModifierIncScript: 0x10000,
  ModifierFormatted: 0x20000,
  ModifierTokenReplace: 0x40000,
  ShareAll: 0,
  ShareNone: 1,
  ShareReadOnly: 2,
  ShareVirtualDevice: 3,
  ShareAnon: 4,
};

module.exports = {
  uxpSys,
  uxpBa,
  uxpFile,
  uxpId,
  uxpCh,
  uxpList,
  uxpDs,
  uxpDl,
  types,
  uxpMsgId,
};
