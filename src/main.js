const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  cols: 5,
  rows: 4,
  cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  timeout: 60,
  scene: new GameScene(),
};

const game = new Phaser.Game(config);
