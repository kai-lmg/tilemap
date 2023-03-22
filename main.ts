namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Player1, controller.dy(10), 100)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Player1, 100, 100)
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
info.setLife(4)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(Player1)
tiles.placeOnRandomTile(Player1, assets.tile`myTile2`)
let myEnemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
myEnemy.follow(Player1, 10)
tiles.placeOnRandomTile(myEnemy, assets.tile`myTile3`)
Player1.x = 10
