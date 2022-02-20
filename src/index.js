module.exports = function check(str, bracketsConfig) {  
  let arr = [];
  let reg;
  let newStr = "[]^$.|?*+(){}<>";
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (newStr.includes(bracketsConfig[i][0])) {
          arr.push(`\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}`);
      } else {
          arr.push(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`);
      }
      console.log(arr);
      reg = new RegExp(arr.join("|"));
      console.log(reg);
  }
  while (reg.test(str)) {
      str = str.replace(reg, "");
  }
  return str.length === 0;
};