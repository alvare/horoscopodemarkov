// Compiled by ClojureScript 0.0-2014
goog.provide('horoscopo_de_markov.core');
goog.require('cljs.core');
goog.require('horoscopo_de_markov.markov');
goog.require('horoscopo_de_markov.markov');
horoscopo_de_markov.core.join = (function join(with$,what){return cljs.core.clj__GT_js.call(null,what).join(with$);
});
horoscopo_de_markov.core.log = (function log(o){return console.log(cljs.core.clj__GT_js.call(null,o));
});
horoscopo_de_markov.core.chaining = (function chaining(m){var iter__3813__auto__ = (function iter__4919(s__4920){return (new cljs.core.LazySeq(null,(function (){var s__4920__$1 = s__4920;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4920__$1);if(temp__4092__auto__)
{var s__4920__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4920__$2))
{var c__3811__auto__ = cljs.core.chunk_first.call(null,s__4920__$2);var size__3812__auto__ = cljs.core.count.call(null,c__3811__auto__);var b__4922 = cljs.core.chunk_buffer.call(null,size__3812__auto__);if((function (){var i__4921 = 0;while(true){
if((i__4921 < size__3812__auto__))
{var kv = cljs.core._nth.call(null,c__3811__auto__,i__4921);cljs.core.chunk_append.call(null,b__4922,cljs.core.count.call(null,cljs.core.val.call(null,kv)));
{
var G__4923 = (i__4921 + 1);
i__4921 = G__4923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4922),iter__4919.call(null,cljs.core.chunk_rest.call(null,s__4920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4922),null);
}
} else
{var kv = cljs.core.first.call(null,s__4920__$2);return cljs.core.cons.call(null,cljs.core.count.call(null,cljs.core.val.call(null,kv)),iter__4919.call(null,cljs.core.rest.call(null,s__4920__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3813__auto__.call(null,new cljs.core.Keyword(null,"bodys","bodys",1107816067).cljs$core$IFn$_invoke$arity$1(m));
});
horoscopo_de_markov.core.gen_markov = (function gen_markov(prefix_length,sentence_count,sign){var tokens = horoscopo_de_markov.markov.tokenize_str.call(null,horoscopo_de_markov.core.join.call(null," ",(DATA[sign])));var model = horoscopo_de_markov.markov.build_markov_model.call(null,tokens,prefix_length);var chain = horoscopo_de_markov.markov.build_markov_chain.call(null,model);horoscopo_de_markov.core.log.call(null,model);
return horoscopo_de_markov.core.join.call(null," ",cljs.core.flatten.call(null,cljs.core.take.call(null,sentence_count,chain)));
});
goog.exportSymbol('horoscopo_de_markov.core.gen_markov', horoscopo_de_markov.core.gen_markov);

//# sourceMappingURL=core.js.map