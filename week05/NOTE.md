# 每周总结可以写在这里
这周发现自己其实对HTTP协议其实一直没有深入的理解，一直在死背缓存相关的策略。
才发现 `HTTP` 是一个**纯文本**协议

> HTTP 协议规定报文必须有 header，但可以没有 body，而且在 header 之后必须要有一个“空行”，也就是“CRLF”，十六进制的“0D0A”。
手动构造 `HTTP` 请求 `body` 也就是 `entity` 需要计算内容长度 也就是 `header`头要加上 `content-length`