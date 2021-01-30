// Generated from kv.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var kvListener = require('./kvListener').kvListener;
var grammarFileName = "kv.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006\u001a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0011\n\u0003\f\u0003",
    "\u000e\u0003\u0014\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0002\u0003\u0004\u0005\u0002\u0004\u0006\u0002\u0002",
    "\u0002\u0017\u0002\b\u0003\u0002\u0002\u0002\u0004\n\u0003\u0002\u0002",
    "\u0002\u0006\u0015\u0003\u0002\u0002\u0002\b\t\u0005\u0004\u0003\u0002",
    "\t\u0003\u0003\u0002\u0002\u0002\n\u000b\b\u0003\u0001\u0002\u000b\f",
    "\u0005\u0006\u0004\u0002\f\u0012\u0003\u0002\u0002\u0002\r\u000e\f\u0004",
    "\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002\u000f\u0011\u0005\u0006",
    "\u0004\u0002\u0010\r\u0003\u0002\u0002\u0002\u0011\u0014\u0003\u0002",
    "\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002",
    "\u0002\u0002\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0007\u0005\u0002\u0002\u0016\u0017\u0007\u0004",
    "\u0002\u0002\u0017\u0018\u0007\u0006\u0002\u0002\u0018\u0007\u0003\u0002",
    "\u0002\u0002\u0003\u0012"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "':'" ];

var symbolicNames = [ null, null, null, "KEY", "VALUE" ];

var ruleNames =  [ "kv_program", "kv_pairs", "kv_pair" ];

function kvParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

kvParser.prototype = Object.create(antlr4.Parser.prototype);
kvParser.prototype.constructor = kvParser;

Object.defineProperty(kvParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

kvParser.EOF = antlr4.Token.EOF;
kvParser.T__0 = 1;
kvParser.T__1 = 2;
kvParser.KEY = 3;
kvParser.VALUE = 4;

kvParser.RULE_kv_program = 0;
kvParser.RULE_kv_pairs = 1;
kvParser.RULE_kv_pair = 2;

function Kv_programContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = kvParser.RULE_kv_program;
    return this;
}

Kv_programContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Kv_programContext.prototype.constructor = Kv_programContext;

Kv_programContext.prototype.kv_pairs = function() {
    return this.getTypedRuleContext(Kv_pairsContext,0);
};

Kv_programContext.prototype.enterRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.enterKv_program(this);
	}
};

Kv_programContext.prototype.exitRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.exitKv_program(this);
	}
};




kvParser.Kv_programContext = Kv_programContext;

kvParser.prototype.kv_program = function() {

    var localctx = new Kv_programContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, kvParser.RULE_kv_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.kv_pairs(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Kv_pairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = kvParser.RULE_kv_pairs;
    return this;
}

Kv_pairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Kv_pairsContext.prototype.constructor = Kv_pairsContext;

Kv_pairsContext.prototype.kv_pair = function() {
    return this.getTypedRuleContext(Kv_pairContext,0);
};

Kv_pairsContext.prototype.kv_pairs = function() {
    return this.getTypedRuleContext(Kv_pairsContext,0);
};

Kv_pairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.enterKv_pairs(this);
	}
};

Kv_pairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.exitKv_pairs(this);
	}
};



kvParser.prototype.kv_pairs = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Kv_pairsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, kvParser.RULE_kv_pairs, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this.kv_pair();
        this._ctx.stop = this._input.LT(-1);
        this.state = 16;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Kv_pairsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, kvParser.RULE_kv_pairs);
                this.state = 11;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 12;
                this.match(kvParser.T__0);
                this.state = 13;
                this.kv_pair(); 
            }
            this.state = 18;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Kv_pairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = kvParser.RULE_kv_pair;
    return this;
}

Kv_pairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Kv_pairContext.prototype.constructor = Kv_pairContext;

Kv_pairContext.prototype.KEY = function() {
    return this.getToken(kvParser.KEY, 0);
};

Kv_pairContext.prototype.VALUE = function() {
    return this.getToken(kvParser.VALUE, 0);
};

Kv_pairContext.prototype.enterRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.enterKv_pair(this);
	}
};

Kv_pairContext.prototype.exitRule = function(listener) {
    if(listener instanceof kvListener ) {
        listener.exitKv_pair(this);
	}
};




kvParser.Kv_pairContext = Kv_pairContext;

kvParser.prototype.kv_pair = function() {

    var localctx = new Kv_pairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, kvParser.RULE_kv_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.match(kvParser.KEY);
        this.state = 20;
        this.match(kvParser.T__1);
        this.state = 21;
        this.match(kvParser.VALUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


kvParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.kv_pairs_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

kvParser.prototype.kv_pairs_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.kvParser = kvParser;
