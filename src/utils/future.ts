interface Future<T> extends Promise<T> {
  resolve: (v: T) => void
  reject: (v: T) => void
}

export function Future<T>(): Future<T> {
  let resolve: (v: T) => void, reject: (v: T) => void
  const promise = new Promise<T>((s, j) => ((resolve = s), (reject = j))) as Future<T>
  promise.resolve = resolve
  promise.reject = reject
  return promise
}
