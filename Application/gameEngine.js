// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor() {
        this.GAME_WIDTH = 1900;
        this.GAME_HEIGHT = 900;

        this.entities = [];
        this.ctx = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        this.topPaddleLeft = false;
        this.topPaddleRight = false;

        this.bottomPaddleLeft = false;
        this.bottomPaddleRight = false;

        this.up = false;
        this.down = false;
        this.A = false;
        this.B = false;

    };

    init(ctx) { // called after page has loaded
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        var that = this;
        (function gameLoop() {
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    startInput() {
        var that = this;
        // Controls for the top paddle
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "KeyA":
                    that.topPaddleLeft = true;
                    break;
                case "KeyD":
                    that.topPaddleRight = true;
                    break;
                case "KeyW":
                    that.up = true;
                    break;
                case "KeyS":
                    that.down = true;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = true;
                    break;
                case "KeyX":
                case "Period":
                    that.A = true;
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "KeyA":
                    that.topPaddleLeft = false;
                    break;
                case "KeyD":
                    that.topPaddleRight = false;
                    break;
                case "KeyW":
                    that.up = false;
                    break;
                case "KeyS":
                    that.down = false;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = false;
                    break;
                case "KeyX":
                case "Period":
                    that.A = false;
                    break;
            }
        }, false);

        // Controls for the bottom paddle
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                    that.bottomPaddleLeft = true;
                    break;
                case "ArrowRight":
                    that.bottomPaddleRight = true;
                    break;
                case "ArrowUp":
                    that.up = true;
                    break;
                case "ArrowDown":
                    that.down = true;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = true;
                    break;
                case "KeyX":
                case "Period":
                    that.A = true;
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "ArrowLeft":
                    that.bottomPaddleLeft = false;
                    break;
                case "ArrowRight":
                    that.bottomPaddleRight = false;
                    break;
                case "ArrowUp":
                    that.up = false;
                    break;
                case "ArrowDown":
                    that.down = false;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = false;
                    break;
                case "KeyX":
                case "Period":
                    that.A = false;
                    break;
            }
        }, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }
        // this.camera.draw(this.ctx);
    };

    update() {
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++) {
            var entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }
        // this.camera.update();

        for (var i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};