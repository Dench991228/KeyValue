var antlr4 = require('./antlr4/index');
const kvListener = require('./kvListener.js').kvListener

CustomListener = function () {
    kvListener.call(this);
    return this;
}

CustomListener.prototype = Object.create(kvListener.prototype);
CustomListener.prototype.constructor = CustomListener;
/*
无需接口定义: enter程序/exit程序/enter求约数
*/
CustomListener.prototype.exitKv_program = function(ctx) {
    alert("finished");
};


exports.CustomListener = CustomListener;