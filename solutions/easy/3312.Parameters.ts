/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #简单 #infer #tuple #built-in
  
  ### 题目
  
  实现内置的 Parameters<T> 类型，而不是直接使用它，可参考[TypeScript官方文档](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)。
  
  例如：
  
  ```ts
  const foo = (arg1: string, arg2: number): void => {}
  
  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/3312/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never;
