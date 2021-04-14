type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

const txampleTuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const result: TupleToObject<typeof txampleTuple> = {
  tesla: 'tesla',
  "model 3": 'model 3',
  "helki": "helki",
}
