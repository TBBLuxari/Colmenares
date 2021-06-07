var Game={};
Game.uno = function (game){}
//////////////////////////
var kuler= 
[
	"#000",
	"#FFF",
	"#FF00C5",
	"#FE0965",
	"#F00",
	"#FFFD00",
	"#00FFF9",
	"#15FF00",
	"#B200FF",
	"#000DFF",
	"#DA68F8",
	"#00D8FF",
];//hay 11

Game.uno.prototype =
{	
	preload: function()		
	{	
		this.load.spritesheet('fondo','Resources/Titulo.png',600,600,1);
		this.load.spritesheet('Ba','Resources/Barril.png',96,96,5);
		this.load.audio('Fondo', 'Resources/sound1.mp3');
		this.load.audio('Ruido', 'Resources/sound2.mp3');
	},

	create:function()
	{	
		this.stage.backgroundColor = kuler[6];
		Sound1 = this.add.audio('Fondo');
		Sound2 = this.add.audio('Ruido' ,0.25,true)

		Fondo = this.add.sprite(150,0,'fondo')

		Cursors = this.input.keyboard.createCursorKeys();


		var titulo = { font: "80px rockwell", fill: kuler[3]};

  		Text= this.add.text(450,500,'Play',titulo);

		Text.inputEnabled = true;
		Text.events.onInputDown.add(this.dos,this);
		Text.anchor.set(0.5);

		this.physics.arcade.enable(Text);
	
	},

	dos:function()
	{
		this.state.start('dos');
		Sound1.play()
		Sound2.play()
	},	
	update: function()
	{
		
		if (this.physics.arcade.distanceToPointer(Text, this.input.activePointer) <= 120)
    	{
        	
        	Text.fill = kuler[2];
    		
    	}else
    	{
    		Text.fill = kuler[9];
    		
    	}
	}


}