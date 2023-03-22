namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Player1, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`swampTile13`, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Player1, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let Player1: Sprite = null
tiles.setCurrentTilemap(tilemap`level3`)
Player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 9 3 9 . . . . . . 
    . . . . . . 3 3 f 3 . . . . . . 
    . . . e e e e 3 3 e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . 3 3 e e e e e e 3 3 . . . 
    . . . 3 3 e e e e e e 3 3 . . . 
    . . . 3 3 e e e e e e 3 3 . . . 
    . . . 3 3 e e e e e e 3 3 . . . 
    . . 3 3 3 e e e e e e 3 3 3 . . 
    . . . 3 3 e e . . e e 3 3 . . . 
    . . . . . e e . . e e . . . . . 
    . . . . . e e . . e e . . . . . 
    . . . . . e e . . e e . . . . . 
    . . . . e e e . . e e e . . . . 
    `, SpriteKind.Player)
info.setLife(10)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(Player1)
tiles.placeOnRandomTile(Player1, assets.tile`myTile2`)
