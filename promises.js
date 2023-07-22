function setTimeOutPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

console.log(setTimeOutPromise(1))
