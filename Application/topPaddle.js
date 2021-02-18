class TopPaddle {


    constructor (gameEngine) {

        this.GAME_WIDTH = gameEngine.GAME_WIDTH;
        this.GAME_HEIGHT = gameEngine.GAME_HEIGHT;

        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.currentSpeed = 0;

        this.position = {

            x: this.GAME_WIDTH / 2 - this.width /2,
            y: 20

        };


        

        

    }

    update (deltaTime) {
        // this.position.x += 10 / deltaTime;
        this.position.x += this.currentSpeed;
        // this.position.y += this.currentSpeed;

        // setting a bound for the paddle
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.GAME_WIDTH)
        this.position.x = this.GAME_WIDTH - this.width;

    }


    draw(context) {
        context.fillStyle = "purple";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }


    moveLeft () {
        this.currentSpeed = -this.maxSpeed;
    }

    moveRight () {
        this.currentSpeed = this.maxSpeed;
    }

    stop() {
        this.currentSpeed = 0;
    }

}   