/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现内置的Exclude <T, U>类型，但不能直接使用它本身。
  
  > 从联合类型T中排除U的类型成员，来构造一个新的类型。
  
  例如：
  
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/


/* _____________ 你的代码 _____________ */

/**
 * 使用 联合类型的泛型 + extends，编译器将使用分配律
 * MyExclude<"a" | "b", "a">
 * MyExclude<"a", "a"> | MyExclude<"b", "a">
 * "a" extends "a" ? never : "a" | "b" extends "a" ? never : "b"
 */
type MyExclude<T, U> = T extends U ? never : T
