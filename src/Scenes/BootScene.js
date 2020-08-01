import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('game-logo', '../src/assets/game-logo.png');
  }
 
  create () {
    this.scene.start('Preloader');
  }
};
