class Ball {

    constructor(GameEngine) {

        // sprite sheet
        this.spritesheet = ASSET_MANAGER.getAsset("../assets/images/earth.png");

        this.GAME_WIDTH = gameEngine.GAME_WIDTH;
        this.GAME_HEIGHT = gameEngine.GAME_HEIGHT;

        this.position = {

            x: this.GAME_WIDTH / 2.3,
            y: this.GAME_HEIGHT / 3

        };


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
        // this.position.x += this.currentSpeed.x;
        // this.position.y += this.currentSpeed.y;
    
        // // Setting up the boundary of the left or right for the ball
        // if (this.position.x + this.size > this.GAME_WIDTH || this.position.x < 0) {
        //   this.currentSpeed.x = -this.currentSpeed.x;
        // }
        // // Wall on the top or the bottom
        // if (this.position.y + this.size > this.GAME_HEIGHT || this.position.y < 0) {
        //   this.currentSpeed.y = -this.currentSpeed.y;
        // }
    
        // // const result_div = document.querySelector(".result > p");
        // // var counter = 0;
    
        // // Check collision with paddle
        // let bottomOfBall = this.position.y + this.size;
        // let topOfPaddle = this.Game.paddle.position.y;
        // let leftSideOfPaddle = this.Game.paddle.position.x;
        // let rightSideOfPaddle =
        //   this.Game.paddle.position.x + this.Game.paddle.width;
    
        // if (
        //   bottomOfBall >= topOfPaddle &&
        //   this.position.x >= leftSideOfPaddle &&
        //   this.position.x + this.size <= rightSideOfPaddle
        // ) {
        //   // counter++;
        //   this.currentSpeed.y = -this.currentSpeed.y;
        //   this.position.y = this.Game.paddle.position.y - this.size;
        //   // whenever change the counter text to counter but it crashed for some reason.
        // }

    }

}