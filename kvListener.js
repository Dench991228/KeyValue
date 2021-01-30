// Generated from kv.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by kvParser.
function kvListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

kvListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
kvListener.prototype.constructor = kvListener;

// Enter a parse tree produced by kvParser#kv_program.
kvListener.prototype.enterKv_program = function(ctx) {
};

// Exit a parse tree produced by kvParser#kv_program.
kvListener.prototype.exitKv_program = function(ctx) {
};


// Enter a parse tree produced by kvParser#kv_pairs.
kvListener.prototype.enterKv_pairs = function(ctx) {
};

// Exit a parse tree produced by kvParser#kv_pairs.
kvListener.prototype.exitKv_pairs = function(ctx) {
};


// Enter a parse tree produced by kvParser#kv_pair.
kvListener.prototype.enterKv_pair = function(ctx) {
};

// Exit a parse tree produced by kvParser#kv_pair.
kvListener.prototype.exitKv_pair = function(ctx) {
};



exports.kvListener = kvListener;