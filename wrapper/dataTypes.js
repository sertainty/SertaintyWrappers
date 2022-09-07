const ref = require("ref");
const ArrayType = require("ref-array");

// we are declaring data types using ref and ref-array modules
// common types
const uintType = ref.types.uint;
const intType = ref.types.int;
const longType = ref.types.long;
const voidType = ref.types.void;
const stringType = ref.types.CString;
const boolType = ref.types.bool;
const longlongType = ref.types.longlong;
const ucharType = ref.types.uchar;

// pointer types
const intPtrType = ref.refType(intType);
const voidPtrType = ref.refType(voidType);

// arrayTypes
const stringArrType = ArrayType(stringType);

module.exports = {
  intType,
  longType,
  voidType,
  stringType,
  boolType,
  stringArrType,
  intPtrType,
  voidPtrType,
  longlongType,
  ucharType,
  uintType,
};
