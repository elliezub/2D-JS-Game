import { k } from "./kaboomCtx";
import { scaleFactor } from "./constants";

k.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 952,
    "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
    "idle-side": 991,
    "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
    "idle-up": 1030,
    "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
  },
});

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#0a0121"));

k.scene("main", async () => {
  const mapData = await (await fetch("./map.json")).json();
  const layers = mapData.layers;

  const map = k.make([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10), // can edit this is the players hit box (custom)
    }),
    k.body(),
    k.anchor("center"), // left off here 49:30  https://www.youtube.com/watch?v=wy_fSStEgMs&t=1560s
  ]);
});

k.go("main");
