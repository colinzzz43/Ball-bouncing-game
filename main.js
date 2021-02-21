var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./assets/earth.png");






ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    
    var topPaddle = new TopPaddle(gameEngine);
    var bottomPaddle = new BottomPaddle(gameEngine);
    var sceneManager = new SceneManager(gameEngine);
    gameEngine.addEntity(sceneManager);
    gameEngine.addEntity(topPaddle);
    gameEngine.addEntity(bottomPaddle);

    
    var ball = new Ball(gameEngine);
    var ball2 = new Ball(gameEngine);
    var ball3 = new Ball(gameEngine);
    gameEngine.addEntity(ball);
    gameEngine.addEntity(ball2);
    gameEngine.addEntity(ball3);
    gameEngine.init(ctx);
    gameEngine.start();

});