class SceneManager {
    constructor(game) {
      this.game = game;
      this.game.camera = this;


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
        this.winningMessage = "Tie"
    }

    update() {
      this.Winner();

    }
  
  
    draw(ctx) {
      this.gameStatsDisplay(ctx);
     
    }
    gameStatsDisplay(ctx) {
      ctx.fillStyle = "White";
      ctx.font = "40px Georgia";
      ctx.fillText("Ball Bouncing Game", 780, 300);     
      ctx.fillText("__________________________________________________________________________", 0, 320);     
      ctx.font = "20px Georgia";
      ctx.fillText("Top Player         : " + this.game.TopPaddle.hp + " Health", 550, 370);
      ctx.fillText("Bottom Player  : " + this.game.BottomPaddle.hp  + " Health", 550, 420);
      ctx.fillText("            |  " + this.game.TopPaddle.scores + " Points", 850, 370);
      ctx.fillText("            |  " + this.game.BottomPaddle.scores  + " Points", 850, 420);
      ctx.font = "20px Georgia";
      ctx.fillText("  | Time Left: " + this.timeLeft + " seconds", 1100, 370);
      ctx.fillText("  | " + this.winningMessage , 1100, 420);
}

  }