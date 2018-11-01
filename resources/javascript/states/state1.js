var demo = window.demo || (window.demo = {});

demo.state1 = function (){};

demo.state1.prototype = {
    preload: function() {},
    create: function () {
        game.stage.backgroundColor = '#4286f4';
        console.log('state1');
    },
    update : function (){}
};