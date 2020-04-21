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


// 乘法
```