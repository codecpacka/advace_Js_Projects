import {
  revealTile,
  TILE_STATUSES,
  mineArray,
  markTile,
  checkWin,
  checkLoose,
} from "./mineSwipper.js"
const BOARD_SIZE = 10
const BOMB_COUNT = 2
const mineElement = document.querySelector("[data-mineCount]")
const messageText = document.querySelector(".subtext")

const boardElement = document.querySelector(".board")
boardElement.style.setProperty("--size", BOARD_SIZE)
mineElement.textContent = BOMB_COUNT
const mine = mineArray(BOARD_SIZE, BOMB_COUNT)
console.log(mine)
mine.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element)
    tile.element.addEventListener("click", (e) => {
      e.preventDefault()
      revealTile(mine, tile)
      checkGameEnd()
    })
    tile.element.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      markTile(tile, mineElement)
      tilesLeftCount()
    })
  })
})
function tilesLeftCount() {
  const marketTileCount = mine.reduce((count, row) => {
    return (
      count + row.filter((tile) => tile.status == TILE_STATUSES.MARKED).length
    )
  }, 0)

  mineElement.textContent = BOMB_COUNT - marketTileCount
}

function checkGameEnd() {
  const win = checkWin(mine)
  const loose = checkLoose(mine)
  if (win || loose) {
    boardElement.addEventListener("click", stopProps, { capture: true })
    boardElement.addEventListener("contextmenu", stopProps, { capture: true })
  }

  if (win) {
    messageText.innerHTML = "you win"
  }
  if (loose) {
    messageText.innerHTML = "you loose"
    mine.forEach((row) => {
      row.forEach((tile) => {
        if (tile.status == TILE_STATUSES.MARKED) markTile(tile)
        if (tile.mine) tile.status = TILE_STATUSES.MINE
      })
    })
  }
}

function stopProps(e) {
  e.stopPropagation()
}
