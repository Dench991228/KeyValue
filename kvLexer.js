// Generated from kv.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('./antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006\u0019\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0006\u0004\u0011\n\u0004\r\u0004\u000e\u0004",
    "\u0012\u0003\u0005\u0006\u0005\u0016\n\u0005\r\u0005\u000e\u0005\u0017",
    "\u0002\u0002\u0006\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u0003",
    "\u0002\u0004\u0004\u0002C\\c|\u0003\u00022;\u0002\u001a\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0003\u000b",
    "\u0003\u0002\u0002\u0002\u0005\r\u0003\u0002\u0002\u0002\u0007\u0010",
    "\u0003\u0002\u0002\u0002\t\u0015\u0003\u0002\u0002\u0002\u000b\f\u0007",
    ".\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002\r\u000e\u0007<\u0002\u0002",
    "\u000e\u0006\u0003\u0002\u0002\u0002\u000f\u0011\t\u0002\u0002\u0002",
    "\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002",
    "\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\b\u0003\u0002\u0002\u0002\u0014\u0016\t\u0003\u0002\u0002\u0015",
    "\u0014\u0003\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017",
    "\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\n\u0003\u0002\u0002\u0002\u0005\u0002\u0012\u0017\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function kvLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

kvLexer.prototype = Object.create(antlr4.Lexer.prototype);
kvLexer.prototype.constructor = kvLexer;

kvLexer.EOF = antlr4.Token.EOF;
kvLexer.T__0 = 1;
kvLexer.T__1 = 2;
kvLexer.KEY = 3;
kvLexer.VALUE = 4;

kvLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

kvLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

kvLexer.prototype.literalNames = [ null, "','", "':'" ];

kvLexer.prototype.symbolicNames = [ null, null, null, "KEY", "VALUE" ];

kvLexer.prototype.ruleNames = [ "T__0", "T__1", "KEY", "VALUE" ];

kvLexer.prototype.grammarFileName = "kv.g4";



exports.kvLexer = kvLexer;

