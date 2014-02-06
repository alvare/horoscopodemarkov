// Compiled by ClojureScript 0.0-2014
goog.provide('horoscopo_de_markov.markov');
goog.require('cljs.core');
horoscopo_de_markov.markov.concat_v = (function concat_v(v1,v2){return cljs.core.reduce.call(null,cljs.core.conj,v1,v2);
});
horoscopo_de_markov.markov.tokenize_str = (function tokenize_str(s){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_seq,/\S+/),cljs.core.re_seq.call(null,/[^.]*\./,s));
});
horoscopo_de_markov.markov.process_tail = (function process_tail(model_body,tokens,prefix_length){var accum = model_body;var token_g = cljs.core.partition.call(null,(prefix_length + 1),1,tokens);while(true){
if(cljs.core.seq.call(null,token_g))
{var g = cljs.core.first.call(null,token_g);var pfx = cljs.core.drop_last.call(null,g);var sfx = cljs.core.last.call(null,g);{
var G__4876 = cljs.core.assoc.call(null,accum,pfx,cljs.core.conj.call(null,accum.call(null,pfx),sfx));
var G__4877 = cljs.core.next.call(null,token_g);
accum = G__4876;
token_g = G__4877;
continue;
}
} else
{return accum;
}
break;
}
});
horoscopo_de_markov.markov.build_markov_model2 = (function build_markov_model2(token_sentences,prefix_length){var model = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"heads","heads",1113055749),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"bodys","bodys",1107816067),cljs.core.PersistentArrayMap.EMPTY], true);var ts = token_sentences;while(true){
if(cljs.core.seq.call(null,ts))
{var tokens = cljs.core.first.call(null,ts);var head = cljs.core.take.call(null,prefix_length,tokens);var head_pfx = cljs.core.nth.call(null,tokens,prefix_length,"");var model_head = cljs.core.assoc.call(null,model.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749)),head,cljs.core.conj.call(null,model.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749)).call(null,head),head_pfx));var model_body = horoscopo_de_markov.markov.process_tail.call(null,model.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067)),tokens,prefix_length);{
var G__4878 = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"heads","heads",1113055749),model_head,new cljs.core.Keyword(null,"bodys","bodys",1107816067),model_body], true);
var G__4879 = cljs.core.next.call(null,ts);
model = G__4878;
ts = G__4879;
continue;
}
} else
{return model;
}
break;
}
});
horoscopo_de_markov.markov.build_markov_model_sentence = (function build_markov_model_sentence(prefix_length,model,tokens){var head = cljs.core.take.call(null,prefix_length,tokens);var head_pfx = cljs.core.nth.call(null,tokens,prefix_length,"");var model_head = cljs.core.merge_with.call(null,horoscopo_de_markov.markov.concat_v,model.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749)),cljs.core.PersistentArrayMap.fromArray([head,cljs.core.PersistentVector.fromArray([head_pfx], true)], true));var model_body = cljs.core.merge_with.call(null,horoscopo_de_markov.markov.concat_v,model.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067)),horoscopo_de_markov.markov.process_tail.call(null,tokens,prefix_length));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"heads","heads",1113055749),model_head,new cljs.core.Keyword(null,"bodys","bodys",1107816067),model_body], true);
});
horoscopo_de_markov.markov.build_markov_model = (function build_markov_model(tokens,prefix_length){return cljs.core.reduce.call(null,cljs.core.partial.call(null,horoscopo_de_markov.markov.build_markov_model_sentence,prefix_length),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"heads","heads",1113055749),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"bodys","bodys",1107816067),cljs.core.PersistentArrayMap.EMPTY], true),tokens);
});
horoscopo_de_markov.markov.build_markov_chain_sentence = (function build_markov_chain_sentence(model,prefix){var temp__4090__auto__ = cljs.core.get.call(null,model,prefix);if(cljs.core.truth_(temp__4090__auto__))
{var suffixes = temp__4090__auto__;var next_word = cljs.core.rand_nth.call(null,suffixes);return cljs.core.cons.call(null,cljs.core.first.call(null,prefix),(new cljs.core.LazySeq(null,(function (){return build_markov_chain_sentence.call(null,model,cljs.core.concat.call(null,cljs.core.rest.call(null,prefix),cljs.core.PersistentVector.fromArray([next_word], true)));
}),null,null)));
} else
{return prefix;
}
});
horoscopo_de_markov.markov.build_markov_chain = (function build_markov_chain(model){var pfx = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,model.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749))));var others = cljs.core.dissoc.call(null,model.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749)),pfx);return cljs.core.cons.call(null,horoscopo_de_markov.markov.build_markov_chain_sentence.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(model),pfx),(new cljs.core.LazySeq(null,(function (){return build_markov_chain.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"heads","heads",1113055749),others,new cljs.core.Keyword(null,"bodys","bodys",1107816067),model.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067))], true));
}),null,null)));
});
