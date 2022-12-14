/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现一个通用`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。
  
  `K`指定应设置为Readonly的`T`的属性集。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。
  
  例如
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```
  
  > 在 Github 上查看：https://tsch.js.org/8/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyReadonly2<T, K extends keyof T = keyof T> = { 
  [R in keyof T as R extends K ? never : R]: T[R]
} & {
  readonly [R in K]: T[R];
};
