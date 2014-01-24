// Compiled by ClojureScript 0.0-2138
goog.provide('horoscopo_de_markov.core');
goog.require('cljs.core');
goog.require('horoscopo_de_markov.markov');
goog.require('horoscopo_de_markov.markov');
horoscopo_de_markov.core.log = (function log(o){return console.log(cljs.core.clj__GT_js.call(null,o));
});
horoscopo_de_markov.core.intermision = (function intermision(m){var iter__4119__auto__ = (function iter__4819(s__4820){return (new cljs.core.LazySeq(null,(function (){var s__4820__$1 = s__4820;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4820__$1);if(temp__4092__auto__)
{var s__4820__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4820__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__4820__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__4822 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__4821 = 0;while(true){
if((i__4821 < size__4118__auto__))
{var kv = cljs.core._nth.call(null,c__4117__auto__,i__4821);cljs.core.chunk_append.call(null,b__4822,cljs.core.count.call(null,cljs.core.val.call(null,kv)));
{
var G__4823 = (i__4821 + 1);
i__4821 = G__4823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4822),iter__4819.call(null,cljs.core.chunk_rest.call(null,s__4820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4822),null);
}
} else
{var kv = cljs.core.first.call(null,s__4820__$2);return cljs.core.cons.call(null,cljs.core.count.call(null,cljs.core.val.call(null,kv)),iter__4819.call(null,cljs.core.rest.call(null,s__4820__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(m));
});
horoscopo_de_markov.core.geminis = cljs.core.js__GT_clj.call(null,GEMINIS);
document.write((function (){var tokens = horoscopo_de_markov.markov.tokenize_str.call(null,horoscopo_de_markov.markov.join.call(null," ",horoscopo_de_markov.core.geminis));var prefix_length = 2;var model = horoscopo_de_markov.markov.build_markov_model_sentence.call(null,tokens,prefix_length);var prefix = new cljs.core.Keyword(null,"head","head",1017102674).cljs$core$IFn$_invoke$arity$1(model);var chain = horoscopo_de_markov.markov.build_markov_chain_sentence.call(null,model);horoscopo_de_markov.core.log.call(null,model);
horoscopo_de_markov.core.log.call(null,cljs.core.frequencies.call(null,horoscopo_de_markov.core.intermision.call(null,model)));
horoscopo_de_markov.core.log.call(null,cljs.core.take.call(null,5,chain));
return horoscopo_de_markov.markov.join.call(null," ",cljs.core.flatten.call(null,cljs.core.take.call(null,5,chain)));
})());

//# sourceMappingURL=core.js.map