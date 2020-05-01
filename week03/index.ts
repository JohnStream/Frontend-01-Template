/**
 * 暂时没有支持负数
 * @param str 字符串
 * @param type 进制
 */
function convertStringToNumber(str: string, type : number = 10) {
  let strArray:Array<string> = []
  let isBinaryNumber = /^0b/.test(str)
  let isOctal = /^0o/.test(str)
  let isScientific = /^(?!0x).*/.test(str) && /^(?!0X).*/.test(str) && /e/.test(str)
  let isHexadecimal = /^0x/.test(str)
    if(isBinaryNumber) {
      type = 2
      strArray = str.match(/^(0b)(.+)/)[2].split('');
    } else if (isOctal) {
      type = 8
      strArray = str.match(/^(^0o)(.+)/)[2].split('');
    } else if (isHexadecimal) {
      type = 16
      let hexmap = {
        A: '10',
        B: '11',
        C: '12',
        D: '13',
        E: '14',
        F: '15',
        a: '10',
        b: '11',
        c: '12',
        d: '13',
        e: '14',
        f: '15'
      }
      strArray = str.match(/^(^0x)(.+)/)[2].split('').map((item) => {
        if(Object.keys(hexmap).indexOf(item) > -1) {
          return hexmap[item]
        } else {
          return item
        }
      });
    } else if (isScientific) {
      strArray = str.split('e')
      return (strArray[0].charCodeAt(0) - 48 ) *  (Math.pow(10, strArray[1].charCodeAt(0) - 48))
    }
    else {
      type = 10
      strArray = str.split('')
    }
    let sum = 0;
    let pos = strArray.length - 1
    for(let i = 0; i < strArray.length; i ++) {
      let num = (strArray[i].charCodeAt(0)  - 48) * Math.pow(type, pos)
      pos--
      sum += num
    }
    return sum;
}

function convertNumberToString(num: number) {

}


module.exports = {
  convertStringToNumber,
  convertNumberToString
}