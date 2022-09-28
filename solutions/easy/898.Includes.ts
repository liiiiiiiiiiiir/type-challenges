/*
  898 - Includes
  -------
  by null (@kynefuk) #简单 #array
  
  ### 题目
  
  在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
  
  例如：
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/898/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Includes<T extends readonly any[], U> = T extends [infer A, ...(infer B)] 
  ? (<T>() => T extends U ? 1 : 2) extends (<T>() => T extends A ? 1: 2)
    ? true
    : Includes<B, U>
  : false;
