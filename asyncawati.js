function settimeOUtpromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

// settimeOUtpromise(3000)
//   .then((msg) => {
//     console.log("log 1")
//     return settimeOUtpromise(4000)
//   })
//   .then((msg) => {
//     console.log("log 2")
//   })

async function asynFunction() {
  console.log("1")
  await settimeOUtpromise(5000)

  console.log("2")
}
asynFunction()
