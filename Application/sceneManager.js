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
  

    update() {

    }
  
  
    draw(ctx) {
      this.gameStatsDisplay(ctx);
     
    }
    gameStatsDisplay(ctx) {
      ctx.fillStyle = "White";
      ctx.fillText("Tower Defense", 1.5 * 60, 1 * this.height);
     
  
        ctx.fillText("HP", 9.5 * 60, 1 * this.height);
      
      ctx.fillText(this.waves + " / 10 waves", 9.5 * 60, 1.1 * this.height);
      ctx.fillText("TIME", 12.7 * 60, 1 * this.height);
      ctx.fillText(this.timeLeft, 13 * 60, 1.1 * this.height);
}

  }