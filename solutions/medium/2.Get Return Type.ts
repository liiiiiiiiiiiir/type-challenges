/*
  2 - 获取函数返回类型
  -------
  by Anthony Fu (@antfu) #中等 #infer #built-in
  
  ### 题目
  
  不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。
  
  例如：
  
  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
  ```
  
  > 在 Github 上查看：https://tsch.js.org/2/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyReturnType<T extends Function> = T extends (...args: any[]) => infer P ? P : never
