type Unreadonly<T> = {
  -readonly [k in keyof T]: T[k]
}
type Cast<T> = T extends [infer L, ...infer R] ? L extends { value: any } ? L["value"] | Cast<R> : never : never

const a = [
  { value: "1" },
  { value: "2" }
] as const

type A = Cast<Unreadonly<typeof a>>
