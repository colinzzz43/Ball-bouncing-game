class SceneManager {
    constructor(game) {
      this.game = game;
      this.game.camera = this;

      this.game.sceneManager = this;

      // Timer
      this.TIME_LIMIT = 20;
      this.timePassed = 0;
      this.timeLeft = this.TIME_LIMIT;
      this.timerInterval = null;
      this.startTimer();


      this.winningMessage = null;
    }
    startTimer() {
      this.timerInterval = setInterval(() => {
        // The amount of time passed increments by one
        this.timePassed = this.timePassed += 1;
        this.timeLeft = this.TIME_LIMIT - this.timePassed;
        if (this.timeLeft < 1) {
          this.timeLeft = 0;
        }
      }, 1000);
    }
  
    Winner() {
      if (this.game.TopPaddle.hp > this.game.BottomPaddle.hp)
        this.winningMessage = "Top Player is winning"
      else if (this.game.TopPaddle.hp < this.game.BottomPaddle.hp)
        this.winningMessage = "Bottom Player is winning"
      else 
        this.winningMessage = "                    Tie"
    }

    update() {
      this.Winner();

    }
  
  
    draw(ctx) {
      this.gameStatsDisplay(ctx);
      if (this.paused) this.drawPauseScreen(ctx);

     
    }
    gameStatsDisplay(ctx) {
      ctx.fillStyle = "White";
      ctx.font = "40px Georgia";
      ctx.fillText("Ball Bouncing Game", 600, 300);     
      ctx.fillText("__________________________________________________________________________", 0, 320);     
      ctx.font = "20px Georgia";
      ctx.fillText("Top Player         : " + this.game.TopPaddle.hp + " Health", 350, 370);
      ctx.fillText("Bottom Player  : " + this.game.BottomPaddle.hp  + " Health", 350, 420);
      ctx.fillText("            |  " + this.game.TopPaddle.scores + " Points", 650, 370);
      ctx.fillText("            |  " + this.game.BottomPaddle.scores  + " Points", 650, 420);
      ctx.font = "20px Georgia";
      ctx.fillText("  | Time Left: " + this.timeLeft + " seconds", 900, 370);
      ctx.fillText("  | " + this.winningMessage , 900, 420);
}

  drawPauseScreen(ctx) {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "black";
      ctx.fillRect(
        this.levelMap.xCanvas, 
        this.levelMap.yCanvas, 
        this.levelMap.width, 
        this.levelMap.height
      );
      ctx.globalAlpha = 1;	  
      ctx.fillStyle = "white";
      ctx.font = "60px Langar, cursive, serif, sans-serif";	
      var canvasWidthCenter = this.game.ctx.canvas.width;
      var centerX = (canvasWidthCenter - (this.game.ctx.measureText("Paused").width)) / 2 ;
      ctx.fillText("Paused", centerX, 600 / 2);
      ctx.font = "20px Langar, cursive, serif, sans-serif";	
      var pauseSubtitle = "Click Resume to Continue Game"
      centerX = (canvasWidthCenter - (this.game.ctx.measureText(pauseSubtitle).width)) / 2 ;
      ctx.fillText(pauseSubtitle, centerX, 700 / 2);	
      ctx.closePath();
      }

  }