// Compiled by ClojureScript 0.0-2138
goog.provide('horoscopo_de_markov.core');
goog.require('cljs.core');
goog.require('horoscopo_de_markov.markov');
goog.require('horoscopo_de_markov.markov');
horoscopo_de_markov.core.join = (function join(with$,what){return cljs.core.clj__GT_js.call(null,what).join(with$);
});
horoscopo_de_markov.core.log = (function log(o){return console.log(cljs.core.clj__GT_js.call(null,o));
});
horoscopo_de_markov.core.chaining = (function chaining(m){var iter__4119__auto__ = (function iter__4748(s__4749){return (new cljs.core.LazySeq(null,(function (){var s__4749__$1 = s__4749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4749__$1);if(temp__4092__auto__)
{var s__4749__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4749__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__4749__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__4751 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__4750 = 0;while(true){
if((i__4750 < size__4118__auto__))
{var kv = cljs.core._nth.call(null,c__4117__auto__,i__4750);cljs.core.chunk_append.call(null,b__4751,cljs.core.count.call(null,cljs.core.val.call(null,kv)));
{
var G__4752 = (i__4750 + 1);
i__4750 = G__4752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4751),iter__4748.call(null,cljs.core.chunk_rest.call(null,s__4749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4751),null);
}
} else
{var kv = cljs.core.first.call(null,s__4749__$2);return cljs.core.cons.call(null,cljs.core.count.call(null,cljs.core.val.call(null,kv)),iter__4748.call(null,cljs.core.rest.call(null,s__4749__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(m));
});
horoscopo_de_markov.core.markov = (function markov(plen,len,sign){var tokens = horoscopo_de_markov.markov.tokenize_str.call(null,(DATA[sign]).join(" "));var prefix_length = plen;var model = horoscopo_de_markov.markov.build_markov_model_sentence.call(null,tokens,prefix_length);var prefix = new cljs.core.Keyword(null,"head","head",1017102674).cljs$core$IFn$_invoke$arity$1(model);var chain = horoscopo_de_markov.markov.build_markov_chain_sentence.call(null,model);horoscopo_de_markov.core.log.call(null,cljs.core.frequencies.call(null,horoscopo_de_markov.core.chaining.call(null,model)));
console.log((DATA[sign]).join(" "));
return horoscopo_de_markov.core.join.call(null," ",cljs.core.flatten.call(null,cljs.core.take.call(null,len,chain)));
});
goog.exportSymbol('horoscopo_de_markov.core.markov', horoscopo_de_markov.core.markov);

//# sourceMappingURL=core.js.map