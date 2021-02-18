var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("../assets/images/earth.png");
ASSET_MANAGER.queueDownload("../assets/images/background.png");
ASSET_MANAGER.queueDownload("../assets/images/earth.png");






ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    

    var topPaddle = new TopPaddle(gameEngine, 1050, 600);
    var bottomPaddle = new BottomPaddle(gameEngine, 1050, 600);
    var ball = new Ball(gameEngine);
    gameEngine.addEntity(topPaddle);
    gameEngine.addEntity(bottomPaddle);
    gameEngine.addEntity(ball);
    gameEngine.init(ctx);
    gameEngine.start();

});