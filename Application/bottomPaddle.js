class BottomPaddle {


    constructor (gameEngine) {

        this.hp = 100;

        this.scores = 0;

        this.gameEngine = gameEngine;
        this.gameEngine.BottomPaddle = this;

        this.GAME_WIDTH = gameEngine.GAME_WIDTH;
        this.GAME_HEIGHT = gameEngine.GAME_HEIGHT;

        this.height = 30;
        this.width = 1300;
        this.maxSpeed = 10;
        this.currentSpeed = 10;

        this.position = {

            x: this.GAME_WIDTH / 2 - this.width /2,
            y: this.GAME_HEIGHT = this.GAME_HEIGHT - 50
        };

        

    }

    update (deltaTime) {
        // this.position.x += 10 / deltaTime;
        // this.position.y += this.currentSpeed;

        // setting a bound for the paddle
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.GAME_WIDTH)
        this.position.x = this.GAME_WIDTH - this.width;

        if(this.gameEngine.bottomPaddleLeft) 
            this.position.x  -= this.currentSpeed;
        if(this.gameEngine.bottomPaddleRight)
            this.position.x += this.currentSpeed;
        if(this.hp >= 0) {
            this.width = 1300 * (this.hp / 100);
        }

    }



    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    stop() {
        this.currentSpeed = 0;
    }

}