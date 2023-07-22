const fs = require("fs")
module.exports = class FileSystem {
  static read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
        if (err) {
          return reject(null)
        }
        resolve(data)
      })
    })
  }

  static write(path) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, "0", (err) => {
        if (err) return reject()
        console.log("file created succesfully")
        resolve()
      })
    })
  }
}
