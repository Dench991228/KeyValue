grammar kv;

kv_program: kv_pairs;
kv_pairs: kv_pairs ',' kv_pair|kv_pair;
kv_pair: KEY ':' VALUE;

KEY : [a-zA-Z]+;
VALUE : [0-9]+;