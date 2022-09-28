/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #简单 #array
  
  ### 题目
  
  在类型系统里实现通用的 ```Array.push``` 。
  
  例如：
  
  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3057/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Push<T extends any[], U> = [...T, U]
