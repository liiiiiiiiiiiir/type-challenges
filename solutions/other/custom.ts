// 将属性去掉 readonly 属性
type Unreadonly<T> = {
  -readonly [k in keyof T]: T[k]
}
// 获取对象的键值为联合类型
type Cast<T> = T extends [infer L, ...infer R] ? L extends { value: any } ? L["value"] | Cast<R> : never : never
type CastTest = [
  { value: "1" },
  { value: "2" }
]
type CastValue = Cast<Unreadonly<CastTest>>

// 获取多层 Promise 的返回值
type GetPromiseType<U> = U extends Promise<infer P> ? P extends Promise<unknown> ? GetPromiseType<P> : P : never
type GetPromiseTypeTest = Promise<Promise<Promise<Record<string, any>>>>
type GetPromiseTypeValue = GetPromiseType<GetPromiseTypeTest>

// 翻转数组元素
type ReverseArr<T> = T extends [...infer R, infer C] ? [C, ...ReverseArr<R>] : T
type TestArray = [5,4,3,2,1];
type ReverseArrvALUE = ReverseArr<TestArray>

// 判断数据是否 any 类型
type IsAny<T> = 1 extends (true & T) ? true : false;
