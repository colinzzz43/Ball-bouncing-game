class Ball {

    constructor(GameEngine) {

        // sprite sheet
        this.spritesheet = ASSET_MANAGER.getAsset("../assets/images/earth.png");
        
        this.gameEngine = GameEngine;

        this.GAME_WIDTH = gameEngine.GAME_WIDTH;
        this.GAME_HEIGHT = gameEngine.GAME_HEIGHT;

        this.position = {

            x: this.GAME_WIDTH / 2.3,
            y: this.GAME_HEIGHT / 3

        };

        this.currentSpeed = {
            x: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
            y: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
        }

        this.size = 250;
    }

    draw (context) {
        context.drawImage(
            this.spritesheet,
            this.position.x,
            this.position.y,
            this.size,
            this.size
          );
    
    }

    update(deltaTime) {
        this.position.x += this.currentSpeed.x;
        this.position.y += this.currentSpeed.y;
    
        // // Setting up the boundary of the left or right for the ball
        if (this.position.x + this.size - 100> this.GAME_WIDTH || this.position.x + 100 < 0) {
          this.currentSpeed.x = -this.currentSpeed.x;
        }
        // // Wall on the top or the bottom
        if (this.position.y + this.size - 100 > this.GAME_HEIGHT || this.position.y +100 < 0) {
          this.currentSpeed.y = -this.currentSpeed.y;
        }
    
        // // const result_div = document.querySelector(".result > p");
        // // var counter = 0;
    
        // // Check collision with paddle
        this.bottomOfBall = this.position.y + this.size;
        this.topOfPaddle = this.gameEngine.BottomPaddle.position.y;
        this.leftSideOfPaddle = this.gameEngine.BottomPaddle.position.x;
        this.rightSideOfPaddle = this.gameEngine.BottomPaddle.position.x + this.gameEngine.BottomPaddle.width;
    
        if (
          this.bottomOfBall >= this.topOfPaddle 
          && this.position.x >= this.leftSideOfPaddle 
          && this.position.x + this.size <= this.rightSideOfPaddle
        ) {
            console.log("sdas");
            this.currentSpeed.y = -this.currentSpeed.y;
          this.position.y = this.gameEngine.BottomPaddle.position.y - this.size;
          // whenever change the counter text to counter but it crashed for some reason.
        }

    }

}