var demo = window.demo || (window.demo = {});

demo.state1 = function (){};

demo.state1.prototype = {
    preload: function() {
        game.load.spritesheet('test', 'resources/art/spritesheets/test_idle.png',123,204,8);
        
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;
        let player = game.add.sprite(492,408, 'test');
        game.physics.enable( [ player ], Phaser.Physics.ARCADE);
        player.anchor.setTo(0.5,0.5);
        player.body.collideWorldBounds = true;
        
        player.body.gravity.y = 200;
        let idle = player.animations.add('idle');

        player.animations.play('idle',13 ,true);
        console.log('animation is working');
        console.log('state1');
    },
    update : function (){

    }
};