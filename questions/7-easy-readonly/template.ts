type MyReadonly<T> = {
  readonly [t in keyof T]: T[t]
}

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
}

// @ts-ignore
todo.title = "Hello"
// @ts-ignore
todo.description = "barFoo"