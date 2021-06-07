var game = new Phaser.Game(900, 600, Phaser.CANVAS);
game.state.add('uno',Game.uno);
game.state.add('dos',Game.dos);
game.state.add('tres',Game.tres);
game.state.start('uno');

var puntos=0;
var t4=0;


	