// Compiled by ClojureScript 0.0-2138
goog.provide('horoscopo_de_markov.markov');
goog.require('cljs.core');
horoscopo_de_markov.markov.join = (function join(with$,what){return cljs.core.clj__GT_js.call(null,what).join(with$);
});
horoscopo_de_markov.markov.build_markov_model = (function build_markov_model(tokens,prefix_length){var build_model = (function build_model(accum,token_groups){while(true){
if(cljs.core.seq.call(null,token_groups))
{var g = cljs.core.first.call(null,token_groups);var pfx = cljs.core.drop_last.call(null,g);var sfx = cljs.core.last.call(null,g);{
var G__4744 = cljs.core.assoc.call(null,accum,pfx,cljs.core.conj.call(null,cljs.core.get.call(null,accum,pfx,cljs.core.PersistentVector.EMPTY),sfx));
var G__4745 = cljs.core.next.call(null,token_groups);
accum = G__4744;
token_groups = G__4745;
continue;
}
} else
{return accum;
}
break;
}
});
return build_model.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(prefix_length + 1),1,cljs.core.seq.call(null,tokens)));
});
horoscopo_de_markov.markov.build_markov_chain = (function build_markov_chain(model,prefix){var temp__4090__auto__ = cljs.core.get.call(null,model,prefix);if(cljs.core.truth_(temp__4090__auto__))
{var suffixes = temp__4090__auto__;var next_word = cljs.core.rand_nth.call(null,suffixes);return cljs.core.cons.call(null,cljs.core.first.call(null,prefix),(new cljs.core.LazySeq(null,(function (){return build_markov_chain.call(null,model,cljs.core.concat.call(null,cljs.core.rest.call(null,prefix),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_word], null)));
}),null,null)));
} else
{return prefix;
}
});
horoscopo_de_markov.markov.build_markov_model_sentence = (function build_markov_model_sentence(tokens,prefix_length){var build_model = (function build_model(accum,token_groups){while(true){
if(cljs.core.seq.call(null,token_groups))
{var g = cljs.core.first.call(null,token_groups);var pfx = cljs.core.take.call(null,prefix_length,g);var sfx = cljs.core.nth.call(null,g,prefix_length,"");var heads = new cljs.core.Keyword(null,"heads","heads",1113055749).cljs$core$IFn$_invoke$arity$1(accum);var bodys = new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(accum);{
var G__4746 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heads","heads",1113055749),cljs.core.assoc.call(null,heads,pfx,cljs.core.conj.call(null,cljs.core.get.call(null,heads,pfx,cljs.core.PersistentVector.EMPTY),sfx)),new cljs.core.Keyword(null,"bodys","bodys",1107816067),cljs.core.merge_with.call(null,cljs.core.concat,bodys,horoscopo_de_markov.markov.build_markov_model.call(null,g,prefix_length))], null);
var G__4747 = cljs.core.next.call(null,token_groups);
accum = G__4746;
token_groups = G__4747;
continue;
}
} else
{return accum;
}
break;
}
});
return build_model.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heads","heads",1113055749),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"bodys","bodys",1107816067),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.seq.call(null,tokens));
});
horoscopo_de_markov.markov.build_markov_chain_sentence = (function build_markov_chain_sentence(model){var prefix = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749).cljs$core$IFn$_invoke$arity$1(model)));var others = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"heads","heads",1113055749).cljs$core$IFn$_invoke$arity$1(model),prefix);return cljs.core.cons.call(null,horoscopo_de_markov.markov.build_markov_chain.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(model),prefix),(new cljs.core.LazySeq(null,(function (){return build_markov_chain_sentence.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heads","heads",1113055749),others,new cljs.core.Keyword(null,"bodys","bodys",1107816067),new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(model)], null));
}),null,null)));
});
horoscopo_de_markov.markov.tokenize_str = (function tokenize_str(s){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_seq,/\S+/),cljs.core.re_seq.call(null,/[^.]*\./,s));
});

//# sourceMappingURL=markov.js.map