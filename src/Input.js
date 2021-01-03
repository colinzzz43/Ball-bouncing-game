export default class Input {
  constructor(paddle) {
    // When player presses a key
    document.addEventListener("keydown", (event) => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          // alert("Move left");
          paddle.moveLeft();
          break;
        case 39:
          // alert("Move right");
          paddle.moveRight();
          break;
        // 38 = up
        case 38:
          // alert("Move up");
          paddle.moveUp();
          break;
        // 40 = down
        case 40:
          // alert("Move down");
          paddle.moveDown();
          break;
      }
    });

    // When play releases the key
    document.addEventListener("keyup", (event) => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
          if (paddle.currentSpeed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.currentSpeed > 0) paddle.stop();
          break;
      }
    });
  }
}
