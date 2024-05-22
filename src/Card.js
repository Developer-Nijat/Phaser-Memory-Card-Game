class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, value) {
    super(scene, 0, 0, "card");
    this.scene = scene;
    this.value = value;
    this.scene.add.existing(this);
    this.setInteractive();
    this.opened = false;
  }

  init(position) {
    this.position = position;
    this.close();
    this.setPosition(-this.width, -this.height);

    // Set desired width and height for the card
    // this.setCardSize(cardConfig.cardWidth, cardConfig.cardHeight);
  }

  // setCardSize(width, height) {
  //   this.displayWidth = width;
  //   this.displayHeight = height;
  // }

  move(params) {
    this.scene.tweens.add({
      targets: this,
      x: params.x,
      y: params.y,
      delay: params.delay,
      easy: "Linear",
      duration: 150,
      onComplete: () => {
        if (params.callback) {
          params.callback();
        }
      },
    });
  }

  flip(callback) {
    this.scene.tweens.add({
      targets: this,
      scaleX: 0,
      easy: "Linear",
      duration: 150,
      onComplete: () => this.show(callback),
    });
  }

  show(callback) {
    let texture = this.opened ? `card${this.value}` : "card";
    this.setTexture(texture);

    // Ensure the card maintains its set size
    // this.setCardSize(cardConfig.cardWidth, cardConfig.cardHeight);

    this.scene.tweens.add({
      targets: this,
      scaleX: 1,
      easy: "Linear",
      duration: 150,
      onComplete: () => {
        if (callback) {
          callback();
        }
      },
    });
  }

  open(callback) {
    this.opened = true;
    this.flip(callback);
  }

  close() {
    if (this.opened) {
      this.opened = false;
      this.flip();
    }
  }
}

const cardConfig = {
  cardWidth: 100,
  cardHeight: 150,
};
