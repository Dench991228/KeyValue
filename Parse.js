const antlr4 = require("./antlr4/index")
const kvLexer = require("./kvLexer.js")
const kvParser = require("./kvParser.js")
const CustomListener = require("./CustomListener.js").CustomListener

executeParse();

// TODO: 需改进-现为全局, 由于browserify
function executeParse() {
    var input = document.getElementById('inputarea').value;
    var input_stream = new antlr4.InputStream(input);
    var lexer = new kvLexer.kvLexer(input_stream);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new kvParser.kvParser(tokens);
    parser.buildParseTrees = true;

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(new CustomListener(), parser.kv_program())
}

window.executeParse = executeParse;