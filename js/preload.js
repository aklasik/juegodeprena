preloadGame = {
	preload : function (){
	game.load.image('bg','img/bg.png');
	game.load.image('play','img/play.png');
    game.load.image("gameover", "img/gameover.png");
    game.load.image("paltik", "img/paltik.png");
    game.load.image("pig1", "img/pig1.png");
    game.load.image("pig2", "img/pig2.png");
    game.load.image("pig3", "img/pig3.png");
    game.load.image("pig4", "img/pig4.png");
game.load.image("back","img/back.png");
game.load.image("XXX","img/XXX.png");
    game.load.image("line", "img/line.png");
    game.load.image("pointer", "img/pointer.png");
    game.load.image("kamay4", "img/kamay4.png");
        game.load.image("kamay3", "img/kamay3.png");
    game.load.image("kamay2", "img/kamay2.png");
    game.load.image("kamay", "img/kamay.png");


	},
	create: function(){
		game.state.start('menu');
	}
}