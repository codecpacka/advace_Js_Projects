// logic of all mine function or say backend logic goes here
export const TILE_STATUSES = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
}

const boardArr = []
export function mineArray(BOARD_SIZE, BOMB_COUNT) {
  const bombArray = bombArrayGenrator(BOARD_SIZE, BOMB_COUNT)
  let i = 7
  let j = 6
  console.log("in mine")
  console.log(bombArray)
  for (let x = 0; x < BOARD_SIZE; x++) {
    const row = []
    for (let y = 0; y < BOARD_SIZE; y++) {
      let element = document.createElement("div")
      element.dataset.status = TILE_STATUSES.HIDDEN
      const tile = {
        element: element,
        x,
        y,
        mine: bombArray.some(positionMatch.bind(null, { x, y })),
        get status() {
          return this.element.dataset.status
        },
        set status(value) {
          this.element.dataset.status = value
        },
      }
      row.push(tile)
    }
    boardArr.push(row)
  }
  return boardArr
}

function bombArrayGenrator(BOARD_SIZE, BOMB_COUNT) {
  let counter = 0
  let arr = []
  while (counter < BOMB_COUNT) {
    const position = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    }
    if (!arr.some(positionMatch.bind(null, position))) {
      arr.push(position)
      counter++
    }
  }

  return arr
}

function positionMatch(a, b) {
  return a.x == b.x && a.y == b.y
}
export function revealTile(mine, tile) {
  if (tile.status != TILE_STATUSES.HIDDEN) return
  if (tile.mine == true) {
    tile.status = TILE_STATUSES.MINE
    return
  }
  tile.status = TILE_STATUSES.NUMBER
  const adjecentTiles = nearByTiles(mine, tile)
  console.log(adjecentTiles)
  const mines = adjecentTiles.filter((tile) => tile.mine == true)
  if (mines.length === 0) {
    adjecentTiles.forEach(revealTile.bind(null, mine))
  } else tile.element.textContent = mines.length
}

function nearByTiles(mine, { x, y }) {
  const tiles = []
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      let tile = mine?.[i]?.[j]
      if (tile) tiles.push(tile)
    }
  }
  return tiles
}
export function markTile(tile) {
  if (tile.status == TILE_STATUSES.HIDDEN) {
    tile.status = TILE_STATUSES.MARKED
  } else if (tile.status == TILE_STATUSES.MARKED) {
    tile.status = TILE_STATUSES.HIDDEN
  } else if (tile.status != TILE_STATUSES.HIDDEN) {
    return
  }
}

export function checkWin(board) {
  return board.every((row) => {
    return row.every((tile) => {
      return (
        tile.status == TILE_STATUSES.NUMBER ||
        (tile.mine &&
          (tile.status == TILE_STATUSES.HIDDEN ||
            tile.status == TILE_STATUSES.MARKED))
      )
    })
  })
}
export function checkLoose(board) {
  return board.some((row) => {
    return row.some((tile) => tile.status == TILE_STATUSES.MINE)
  })
}
