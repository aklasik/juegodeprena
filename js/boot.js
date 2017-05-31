bootGame={
	create:function(){
      game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;;
        game.scale.setScreenSize = true;
        game.stage.backgroundColor = "#F0F0";
        keyboard = game.input.keyboard.createCursorKeys();
        	game.state.start('preload');

	}
}