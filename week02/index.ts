
function verifyNumber (str: string) {
   let re = /((((0|[1-9]([0-9]+)?)\.([0-9]+)?([eE][+-]?[0-9]+)?|\.[0-9]+([eE][+-]?[0-9]+)?|(0|[1-9]([0-9]+)?)([eE][+-]?[0-9]+)?)|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+))/;
   return re.test(str)
}

function verifyString (str: string) {
   let re = /(("([^"\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*"|'([^'\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*'))/
   return re.test(str)
}

module.exports = { verifyNumber, verifyString }