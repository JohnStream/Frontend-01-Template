# week02
## JS 内置基本对象
### 正则对象
1. 字符类别（Character Classes）
2. 字符集合（Character Sets）
3. 边界（Boundaries）
4. 分组（grouping）与反向引用（back references）
5. 数量词（Quantifiers）
6. 断言（Assertions）

## 字符集编码
### ASCII 码
1. ASCII 码一共规定了128个字符的编码
### Unicode
1. Unicode 当然是一个很大的集合，现在的规模可以容纳100多万个符号。
### UTF-8
1. UTF-8 是 Unicode 的实现方式之一。
2. UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。

## BNF
```
<Program>:="a"+ | 'b'+

// BNF 可递归

<Program>:=<Program>"a"+ | <Program>'b'+

// 加法

<Number>:= "0" | "1" | ...| "9"
<DecimalNumber> = "0" | (("1" | "2" | ... | "9")<Number>*)
<Expression> = <DecimalNumber> "+" <DecimalNumber>
<Expression> = <Expression> "+" <DecimalNumber>

=>

<AdditiveExpression> = <DecimalNumber> | <Expression> "+" <DecimalNumber>


// 乘法s
```

## 作业
先抄它一手🤢
### JavaScript 数字正则匹配
```
var re = /((((0|[1-9]([0-9]+)?)\.([0-9]+)?([eE][+-]?[0-9]+)?|\.[0-9]+([eE][+-]?[0-9]+)?|(0|[1-9]([0-9]+)?)([eE][+-]?[0-9]+)?)|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+))/
```
### JavaScript 字符串正则匹配
```
 var re = /(("([^"\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*"|'([^'\r\n\u2028\u2029\\]|\u2028|\u2029|\\((['"\bfnrtv]|[^'"\bfnrtvdxu\r\n\u2028\u2029])|0(?!d)|x[0-9a-fA-F][0-9a-fA-F]|(u[0-9a-fA-F]{4}|u{(0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,4})}))|\\(\r\n|[\r\n\u2028\u2029]))*'))/
```

### encoding
```
/**
 * utf-8 encoding
 */

function encodeCodePoint(code) {
  if (code <= 0x7F) {
    return [code]
  } else if (code <= 0x7FF) {
    return [
      0xC0 | ((code >> 6) & 0x1F),
      0x80 | ((code) & 0x3F),
    ]
  } else if (code <= 0xFFFF) {
    return [
      0xE0 | ((code >> 12) & 0xF),
      0x80 | ((code >>  6) & 0x3F),
      0x80 | ((code) & 0x3F)
    ]
  } else {
    return [
      0xF0 | ((code >> 18) & 0x7),
      0x80 | ((code >> 12) & 0x3F),
      0x80 | ((code >>  6) & 0x3F),
      0x80 | ((code) & 0x3F)
    ]
  }
}

function UTF8_Encoding(string) {
  const codes = [];
  for (let ch of string) {
    const bytes = encodeCodePoint(ch.codePointAt(0));
    codes.push(...bytes);
  }
  const array = new Uint8Array(codes);
  return array.buffer;
}
```