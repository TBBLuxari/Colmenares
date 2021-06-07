Game.tres = function (game){}
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

var l = 0;


Game.tres.prototype =
{	
	preload: function()		
	{	
	
	},

	create:function()
	{	
		var titulo = { font: "80px rockwell", fill: kuler[3]};
		var cuerpo = { font: "30px rockwell", fill: kuler[3]};

  		Text= this.add.text(450,200,'Congratulations',titulo);

		Text.inputEnabled = true;
		Text.events.onInputDown.add(this.uno,this);
		Text.anchor.set(0.5);

		this.physics.arcade.enable(Text);

		Text2=this.add.text(Text.x,Text.y+100,'Score',cuerpo);
		Text2.anchor.set(0.5);

		Text3=this.add.text(Text.x,Text2.y+100,'',cuerpo);
		Text3.anchor.set(0.5);
	},
	
	uno:function()
	{
		this.state.start('uno');
	},
	
//---------------------------------------------------------------------------------------------------------------------------
	update: function()

	{
		
		if (t4<100)
		{
			Text3.text=puntos*100
		}else if (t4<500) 
		{
			Text3.text=puntos*50
		}else if (t4<1000)
		{
			Text3.text=puntos*5
		}else if (t4>1000)
		{
			Text3.text=puntos*2
		}

	    l ++;

		if (l==80)

		{

			this.stage.backgroundColor = kuler[Math.floor(Math.random() * (12 - 0)) + 0];
			Text.fill = kuler[Math.floor(Math.random() * (12 - 0)) + 0];
			Text2.fill = kuler[Math.floor(Math.random() * (12 - 0)) + 0];
			Text3.fill = kuler[Math.floor(Math.random() * (12 - 0)) + 0];
			l = 0

		}

	},

	render:function() 

	{


	}


}