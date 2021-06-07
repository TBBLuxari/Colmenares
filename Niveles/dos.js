Game.dos = function (game){}
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

var t  = 0;
var t2 = 0;
var t3 = 0;
var vel=220;
var vidas=10;

Game.dos.prototype =
{	
	preload: function()		
	{	
		this.load.spritesheet('zz','Resources/bichitozz.png',50,50,5);
		this.load.spritesheet('Bola','Resources/Disco.png',60,60,6);
		this.load.spritesheet('Llegada','Resources/exit.png',40,40,1);
		this.load.spritesheet('Bolaw','Resources/Bolaw.png',30,30,1);
		this.load.spritesheet('Botella2','Resources/Botella2.png',30,30,1);
		this.load.spritesheet('Botella3','Resources/Botella3.png',30,30,1);
		this.load.spritesheet('Botella1','Resources/Botella1.png',30,30,1);
		this.load.spritesheet('Vida','Resources/Vida.png',30,30,5);
		this.load.audio('Fondo', 'Resources/sound1.mp3');
		this.load.audio('Ruido', 'Resources/sound2.mp3');
		this.load.audio('Tomalo', 'Resources/sound3.mp3');
	},

	create:function()
	{	
		//Fisicas Globales
		this.physics.startSystem(Phaser.Physics.ARCADE);
		//Background
		this.stage.backgroundColor = kuler[0];
		//Mouse
		Cursors = this.input.keyboard.createCursorKeys();
		//Vidas
		Vida = this.add.sprite(20,20,'Vida')
		Vida2= this.add.sprite(60,20,'Vida')
		//Enemigos
		Bola= this.add.sprite(300,300,'Bola');
		Barra=this.add.sprite(Bola.x,Bola.y,'Bolaw')
		Bola2=this.add.sprite(Bola.x,Bola.y,'Bolaw')
		//
		Bola3 =this.add.sprite(600,300,'Bola');
		Barra2=this.add.sprite(Bola3.x,Bola3.y,'Bolaw')
		Bola4 =this.add.sprite(Bola3.x,Bola3.y,'Bolaw')
		Barra2.anchor.set(0.5);
		Bola4.anchor.set(0.5);
		//
		Llegada=this.add.sprite(570,30,'Llegada');
		Llegada.scale.set(1)
		Llegada.anchor.set(0.5);
		//
		Barra.anchor.set(0.5);
		Bola2.anchor.set(0.5);
		//
		Bolas = game.add.group();
        Bolas.enableBody = true;
        Bolas.physicsBodyType = Phaser.Physics.ARCADE;
        //
        for (var i = 0; i < 9; i++)
    	{
       	 	var c = Bolas.create(Math.floor(Math.random() * (900 - 0)) + 0,Math.floor(Math.random() * (600 - 0)) + 0,'Botella2')
        	c.name = 'Bolas' + i;
        	c.body.bounce.y = 1.01;
			c.body.bounce.x = 1.01;
			c.body.velocity.x = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.velocity.y = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.setCircle(20);
			c.body.collideWorldBounds=true;
			c.scale.set(Math.random() * (1.5- 0.4) + 0.4)
			//////////////////////////////
			c.body.onCollide = new Phaser.Signal();
			c.body.onCollide.add(this.empuje,this)
			///////////////////////////////////
			c.animations.add('Bolaw');
  			c.animations.play('Bolaw',8,true);
        	
    	}

    	for (var i2 = 0; i2 < 9; i2++)
    	{
       	 	var c = Bolas.create(Math.floor(Math.random() * (900 - 0)) + 0,Math.floor(Math.random() * (600 - 0)) + 0,'Botella3')
        	c.name = 'Bolas' + i2;
        	c.body.bounce.y = 1.01;
			c.body.bounce.x = 1.01;
			c.body.velocity.x = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.velocity.y = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.setCircle(20);
			c.body.collideWorldBounds=true;
			c.scale.set(Math.random() * (1.5 - 0.4) + 0.4)
			//////////////////////////////
			c.body.onCollide = new Phaser.Signal();
			c.body.onCollide.add(this.empuje,this)
			///////////////////////////////////
			c.animations.add('Bolaw');
  			c.animations.play('Bolaw',8,true);
        	
    	}

    	for (var i3 = 0; i3 < 9; i3++)
    	{
       	 	var c = Bolas.create(Math.floor(Math.random() * (900 - 0)) + 0,Math.floor(Math.random() * (600 - 0)) + 0,'Botella1')
        	c.name = 'Bolas' + i3;
        	c.body.bounce.y = 1.01;
			c.body.bounce.x = 1.01;
			c.body.velocity.x = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.velocity.y = Math.floor(Math.random() * (200 - (-200))) + (-200);
			c.body.setCircle(20);
			c.body.collideWorldBounds=true;
			c.scale.set(Math.random() * (1.5 - 0.4) + 0.4)
			//////////////////////////////
			c.body.onCollide = new Phaser.Signal();
			c.body.onCollide.add(this.empuje,this)
			///////////////////////////////////
			c.animations.add('Bolaw');
  			c.animations.play('Bolaw',8,true);
       
    	}
		

  		//Jugador 
  		zz = this.add.sprite(300,600,'zz');
  		zz.animations.add('zz');
  		zz.animations.play('zz',8,true);
  		zz.anchor.set(0.5);
  		//Fisicas Objetos
  		this.physics.arcade.enable([zz,Bola,Barra,Bola2,Bolas,Llegada,Vida,Vida2,Bola3,Bola4,Barra2]);
		zz.body.bounce.y = 1;
		zz.body.bounce.x = 1;
////////////////////////////////////////////////////////
		Bola.anchor.set(0.5);
		Bola.body.bounce.y = 1;
		Bola.body.bounce.x = 1;
		Bola.body.velocity.x = Math.floor(Math.random() * (300 - (-300))) + (-300);;
		Bola.body.velocity.y = Math.floor(Math.random() * (300 - (-300))) + (-300);;
		Bola.animations.add('Bola');
  		Bola.animations.play('Bola',8,true);
		Bola.body.setCircle(30);
		Barra.body.setCircle(30);
		Barra.scale.set(1)
		Bola2.body.setCircle(30);
		Bola2.scale.set(1)
///////////////////////////////////////////////////////////
		Bola3.anchor.set(0.5);
		Bola3.body.bounce.y = 1;
		Bola3.body.bounce.x = 1;
		Bola3.body.velocity.x = Math.floor(Math.random() * (300 - (-300))) + (-300);;
		Bola3.body.velocity.y = Math.floor(Math.random() * (300 - (-300))) + (-300);;
		Bola3.animations.add('Bola');
  		Bola3.animations.play('Bola',8,true);
		Bola3.body.setCircle(30);
		Barra2.body.setCircle(30);
		Barra2.scale.set(1)
		Bola4.body.setCircle(30);
		Bola4.scale.set(1)
		zz.body.collideWorldBounds   =true;
		Bola.body.collideWorldBounds =true;
		Barra.body.collideWorldBounds=false;
  		Bola2.body.collideWorldBounds=false;
		Llegada.body.collideWorldBounds=false;
		Bola3.body.collideWorldBounds =true;
		Barra2.body.collideWorldBounds=false;
  		Bola4.body.collideWorldBounds=false;
  		//Controles
  		Cursors = this.input.keyboard.createCursorKeys()
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.X ]);
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.Z ]);
		text2 = this.add.text(zz.x, zz.y, '', { fill: '#000' });
		text3 = this.add.text(zz.x, zz.y, '', { fill: '#000' });
		text4 = this.add.text(100, 20, 'Score :', { fill: '#FFF' });
		text5 = this.add.text(210, 20, '', { fill: '#FFF' });
		Barra.body.onCollide = new Phaser.Signal();
		Barra.body.onCollide.add(this.Bate, this);
		Bola2.body.onCollide = new Phaser.Signal();
		Bola2.body.onCollide.add(this.Bate, this);
		Barra2.body.onCollide = new Phaser.Signal();
		Barra2.body.onCollide.add(this.Bate, this);
		Bola4.body.onCollide = new Phaser.Signal();
		Bola4.body.onCollide.add(this.Bate, this);
		Llegada.body.onCollide = new Phaser.Signal();
		Llegada.body.onCollide.add(this.tres, this);
		Sound3 = this.add.audio('Tomalo' ,1)
	},
//-----------------------------------------------------------------------------------------------------------	
	tres:function()
	{
		this.state.start('tres');
		Sound1.stop()
		Sound2.stop()
	},
	checkOverlap: function(spriteA, spriteB)
	{
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},


	Bate : function()
	{
		vidas -=1

		if (vidas <10){Vida2.alpha=0}
		if (vidas <7) {Vida.alpha=0}

		if (zz.x<Bola.x || zz.x<Bola3.x && zz.y<Bola.y || zz.y<Bola3.y)
		{
			zz.body.velocity.x -=200
			zz.body.velocity.y -=200
		}

		if (zz.x>Bola.x || zz.x>Bola3.x && zz.y<Bola.y || zz.y<Bola3.y)
		{
			zz.body.velocity.x +=200
			zz.body.velocity.y -=200
		}

		if (zz.x<Bola.x || zz.x<Bola3.x && zz.y>Bola.y || zz.y>Bola3.y)
		{
			zz.body.velocity.x -=200
			zz.body.velocity.y +=200
		}

		if (zz.x>Bola.x || zz.x>Bola3.x && zz.y>Bola.y || zz.y>Bola3.y)
		{
			zz.body.velocity.x +=200
			zz.body.velocity.y +=200
		}
	},

	empuje : function()
	{
		if (zz.x<Bolas.x&&zz.y<Bolas.y)
		{
			zz.body.velocity.x -=200
			zz.body.velocity.y -=200
			Sound3.play()
		}
		if (zz.x>Bolas.x&&zz.y<Bolas.y)
		{
			zz.body.velocity.x +=200
			zz.body.velocity.y -=200
			Sound3.play()
		}
		if (zz.x<Bolas.x&&zz.y>Bolas.y)
		{
			zz.body.velocity.x -=200
			zz.body.velocity.y +=200
			Sound3.play()
		}
		if (zz.x>Bolas.x&&zz.y>Bolas.y)
		{
			zz.body.velocity.x +=200
			zz.body.velocity.y +=200
			Sound3.play()
		}
	},
		girar: function(O,D,V,P,S)
	{
		O.y = D*Math.cos(S*V)+P.y;
		O.x = D*Math.sin(S*V)+P.x;

	},
//---------------------------------------------------------------------------------------------------------------------------
	update: function()
	{
		if (vidas <5) {this.tres()}
		text2.x=zz.x-30;
		text2.y=zz.y-40;	
		text3.x=zz.x-60;
		text3.y=zz.y-40;
//--------------------Enemigo-----------------------------------
		this.physics.arcade.collide(Bola, zz);
		this.physics.arcade.collide(Barra,zz);
		this.physics.arcade.collide(Bola2,zz);
		this.physics.arcade.collide(Bolas, zz);
		this.physics.arcade.collide(Llegada, zz);
		this.physics.arcade.collide(Bola3, zz);
		this.physics.arcade.collide(Barra2,zz);
		this.physics.arcade.collide(Bola4,zz);
		this.physics.arcade.collide(Bola,Bola3);

		t -= 0.1
		t2+= 0.1

		this.girar(Barra,52,0.8,Bola,t)
		this.girar(Bola2,82,0.6,Bola,t2)

		Bola2.body.rotate+= 0.2

		this.girar(Barra2,52,0.8,Bola3,t)
		this.girar(Bola4,82,0.6,Bola3,t2)

		Bola4.body.rotate+= 0.2

	    if (this.checkOverlap(zz, Bola2)||this.checkOverlap(zz, Barra) || this.checkOverlap(zz, Barra2)||this.checkOverlap(zz, Bola4) )
		{
			if (zz.x<Bola.x || zz.x<Bola3.x && zz.y<Bola.y || zz.y<Bola3.y)
			{
				zz.body.velocity.x -=200
				zz.body.velocity.y -=200
			}
			if (zz.x>Bola.x || zz.x>Bola3.x && zz.y<Bola.y || zz.y<Bola3.y)
			{
				zz.body.velocity.x +=200
				zz.body.velocity.y -=200
			}
			if (zz.x<Bola.x || zz.x<Bola3.x && zz.y>Bola.y || zz.y>Bola3.y)
			{
				zz.body.velocity.x -=200
				zz.body.velocity.y +=200
			}
			if (zz.x>Bola.x || zz.x>Bola3.x && zz.y>Bola.y || zz.y>Bola3.y)
			{
				zz.body.velocity.x +=200
				zz.body.velocity.y +=200
			}
		}
    //--------------Llegada--------------------
		if (Llegada.x>900)
		{
			Llegada.x=0
		}
		if (Llegada.x<0)
		{
			Llegada.x=900
		}		
		if (Llegada.y>600)
		{
			Llegada.y=0
		}
		if (Llegada.y<0)
		{
			Llegada.y=600
		}	
		if (Llegada.body.velocity.x > 0) 
		{
			Llegada.body.velocity.x -= 5;	
		}
		else if (Llegada.body.velocity.x < 0)
		{
			Llegada.body.velocity.x += 5;
		}
		if (Llegada.body.velocity.y > 0) 
		{
			Llegada.body.velocity.y -= 5;	
		}
		else if (Llegada.body.velocity.y < 0)
		{
			Llegada.body.velocity.y += 5;
		}
	//-------------Controles-----------------
		//------------X----------------------
		if (Cursors.left.isDown)
		{
		  zz.body.velocity.x = -vel;
		  Llegada.body.velocity.x =(-vel)+100;  
		}

		if (Cursors.right.isDown)
		{
		  zz.body.velocity.x = vel;
		  Llegada.body.velocity.x =(vel)+100;  
		}
		//-------------Y--------------------
		if (Cursors.up.isDown)
		{
		  zz.body.velocity.y = -vel;
		  Llegada.body.velocity.y =(-vel)+100;  
		}
		if (Cursors.down.isDown)
		{
		  zz.body.velocity.y = vel;
		  Llegada.body.velocity.y =(vel)+100;  
		}
	//-------------Frenado suave -----------
		if (zz.body.velocity.x > 0) 
		{
			zz.body.velocity.x -= 5;	
		}
		else if (zz.body.velocity.x < 0)
		{
			zz.body.velocity.x += 5;
		}
		if (zz.body.velocity.y > 0) 
		{
			zz.body.velocity.y -= 5;	
		}
		else if (zz.body.velocity.y < 0)
		{
			zz.body.velocity.y += 5;
		}
	//------------------Texto------------------
	zz.scale.set(0.65);
		if (this.input.keyboard.isDown(Phaser.Keyboard.X) )
	   {
   			text2.text='¡Veo!';
   		 	zz.scale.set(1);	
   	   }else
   	   {
   	   		text2.text='';	
   	   }
   	   	if (this.input.keyboard.isDown(Phaser.Keyboard.Z) )
	   {
   			text3.text='¡Comó fue!';
   		 	zz.scale.set(0.3);	
   	   }else
   	   {
   	   		text3.text=''; 	
   	   }	
	//----------------Fondo-------------------
	t3 ++;
	
	if (t3==40)
	{
		this.stage.backgroundColor = kuler[Math.floor(Math.random() * (12 - 0)) + 0];
		t3 = 0
	}

	t4++
	puntos +=0.01
	text5.text=puntos
	},
	render:function() {}
}