import {GameView, clickToTile, canvas} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [4, 1, 7],
    [3, 2, 5],
    [6, 0, 8]]

let s1 = initialState
new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTile(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
}