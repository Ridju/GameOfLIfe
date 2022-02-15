import GameOfLife from "./GameOfLife.mjs";

var Game = new GameOfLife(50, 100);

function main() {
  if (!Game.running) return;
  Game.newState();
  setTimeout(main, 300);
}

//BUTTON EVENT LISTENERS
const block = document.getElementById("block");
block.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([101, 102, 201, 202]);
  }
});

const beehive = document.getElementById("beehive");
beehive.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 103, 201, 204, 302, 303]);
  }
});

const loaf = document.getElementById("loaf");
loaf.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 103, 201, 204, 302, 304, 403]);
  }
});

const boat = document.getElementById("boat");
boat.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([101, 102, 201, 203, 302]);
  }
});

const tub = document.getElementById("tub");
tub.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 201, 203, 302]);
  }
});

const blinker = document.getElementById("blinker");
blinker.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 202, 302]);
  }
});

const toad = document.getElementById("toad");
toad.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([203, 204, 205, 302, 303, 304]);
  }
});

const beacon = document.getElementById("beacon");
beacon.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 103, 202, 203, 304, 305, 404, 405]);
  }
});

const pulsar = document.getElementById("pulsar");
pulsar.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      311, 312, 313, 317, 318, 319, 509, 514, 516, 521, 609, 614, 616, 621, 709,
      714, 716, 721, 811, 812, 813, 817, 818, 819, 1011, 1012, 1013, 1017, 1018,
      1019, 1109, 1114, 1116, 1121, 1209, 1214, 1216, 1221, 1309, 1314, 1316,
      1321, 1511, 1512, 1513, 1517, 1518, 1519,
    ]);
  }
});

const pentadecathlon = document.getElementById("pentadecathlon");
pentadecathlon.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      409, 410, 411, 410, 510, 709, 610, 710, 711, 909, 910, 911, 1009, 1010,
      1011, 1209, 1210, 1211, 1310, 1410, 1509, 1510, 1511,
    ]);
  }
});

const glider = document.getElementById("glider");
glider.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([102, 203, 301, 302, 303]);
  }
});

const lightweightspaceship = document.getElementById("lightweightspaceship");
lightweightspaceship.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([201, 204, 305, 401, 405, 502, 503, 504, 505]);
  }
});

const middleweightspaceships = document.getElementById(
  "middleweightspaceships"
);
middleweightspaceships.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      404, 405, 406, 407, 408, 503, 508, 608, 703, 707, 805,
    ]);
  }
});

const heavyweigthspaceship = document.getElementById("heavyweigthspaceship");
heavyweigthspaceship.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      202, 203, 204, 205, 206, 207, 301, 307, 407, 501, 506, 603, 604,
    ]);
  }
});

const gliderGun = document.getElementById("gliderGun");
gliderGun.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      702, 703, 802, 803, 712, 812, 912, 613, 1013, 514, 1114, 515, 1115, 816,
      617, 1017, 718, 818, 918, 819, 522, 622, 722, 523, 623, 723, 424, 824,
      326, 426, 826, 926, 536, 636, 537, 637,
    ]);
  }
});

const simkinGliderGun = document.getElementById("simkinGliderGun");
simkinGliderGun.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      812, 813, 912, 913, 819, 820, 919, 920, 1116, 1117, 1216, 1217, 1734,
      1735, 1737, 1738, 1833, 1839, 1933, 1940, 2033, 2034, 2035, 2039, 2138,
      1943, 1944, 2043, 2044, 2532, 2533, 2632, 2733, 2734, 2735, 2835,
    ]);
  }
});

const BlockLayingEngine1 = document.getElementById("BlockLayingEngine1");
BlockLayingEngine1.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      2722, 2724, 2624, 2526, 2426, 2326, 2428, 2328, 2228, 2329,
    ]);
  }
});

const BlockLayingEngine2 = document.getElementById("BlockLayingEngine2");
BlockLayingEngine2.addEventListener("click", () => {
  if (!Game.running) {
    Game.resetGame();
    Game.setItemsActive([
      1934, 1935, 1936, 1938, 2034, 2137, 2138, 2235, 2236, 2238, 2334, 2336,
      2338,
    ]);
  }
});

const randomGrid = document.getElementById("randomGrid");
randomGrid.addEventListener("click", () => {
  if (!Game.running) {
    Game.generateRandomPattern();
  }
});

const run = document.getElementById("run");
run.addEventListener("click", () => {
  if (!Game.running) {
    Game.running = true;
    main();
  }
});

const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  if (Game.running) {
    Game.running = false;
  }
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  Game.resetGame();
});
