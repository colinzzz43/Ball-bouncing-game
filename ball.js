class Ball {

    constructor(GameEngine) {

        // sprite sheet
        this.spritesheet = ASSET_MANAGER.getAsset("./assets/earth.png");
        
        this.gameEngine = GameEngine;
        this.sceneManager = this.gameEngine.sceneManager;

        this.GAME_WIDTH = gameEngine.GAME_WIDTH;
        this.GAME_HEIGHT = gameEngine.GAME_HEIGHT;

        this.position = {

            x: this.GAME_WIDTH / 25,
            y: this.GAME_HEIGHT / 3.3

        };

        this.currentSpeed = {
            x: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
            y: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
        }

        this.size = 250;
        this.radius = 8.9;
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
      this.timer = this.sceneManager.timeLeft;
      if (this.timer <= 0 ){
        this.position.x += this.currentSpeed.x;
        this.position.y += this.currentSpeed.y;

      }
        // // Setting up the boundary of the left or right for the ball
        if (this.position.x + this.size - 100> this.GAME_WIDTH || this.position.x + 100 < 0) {
          this.currentSpeed.x = -this.currentSpeed.x;
        }
        // // Wall on the top or the bottom
        if (this.position.y + this.size - 100 > this.GAME_HEIGHT) {
          if (this.gameEngine.BottomPaddle.hp > 0) {
            this.gameEngine.BottomPaddle.hp -= 10;
          }
          this.currentSpeed.y = -this.currentSpeed.y;
        }

        if (this.position.y +100 < 0){
          if (this.gameEngine.TopPaddle.hp > 0) {
            this.gameEngine.TopPaddle.hp -= 10;
          }
          this.currentSpeed.y = -this.currentSpeed.y;
        }
    
        // // const result_div = document.querySelector(".result > p");
        // // var counter = 0;
    
        // // Check collision with paddle
        this.topOfBall = this.position.y - this.radius;
        this.bottomOfBall = this.position.y + this.radius;
        this.leftOfBall = this.position.x - this.radius;
        this.rightOfBall = this.position.x + this.radius;


        this.topOfPaddle = this.gameEngine.BottomPaddle.position.y;
        this.leftSideOfPaddle = this.gameEngine.BottomPaddle.position.x;
        this.rightSideOfPaddle = this.gameEngine.BottomPaddle.position.x + this.gameEngine.BottomPaddle.width;

        this.bottomOfPaddle = this.gameEngine.TopPaddle.position.y;
    
        if (
          this.bottomOfBall + 130 >= this.topOfPaddle 
          && this.position.x >= this.leftSideOfPaddle 
          && this.position.x + this.size < this.rightSideOfPaddle
        ) {
          this.currentSpeed.y = -this.currentSpeed.y;
          this.position.y = this.gameEngine.BottomPaddle.position.y - this.size;
        }

        // if (
        //   this.topOfBall + this.size >= this.bottomOfPaddle 
        //   && this.position.x >= this.leftSideOfPaddle 
        //   && this.position.x + this.size < this.rightSideOfPaddle
        // ) {
        //   this.position.y = this.gameEngine.TopPaddle.position.y;
        //   this.currentSpeed.y = -this.currentSpeed.y;
        // }

    }

}