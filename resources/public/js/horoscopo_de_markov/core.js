// Compiled by ClojureScript 0.0-2138
goog.provide('horoscopo_de_markov.core');
goog.require('cljs.core');
goog.require('horoscopo_de_markov.markov');
goog.require('horoscopo_de_markov.markov');
horoscopo_de_markov.core.geminis = "La Luna contin\u00FAa en tr\u00E1nsito por el signo de Virgo, mientras los planetas Venus y J\u00FApiter siguen retr\u00F3grados. La Luna es gay.";
document.write((function (){var tokens = horoscopo_de_markov.markov.tokenize_str.call(null,GEMINIS);var prefix_length = 3;var model = horoscopo_de_markov.markov.build_markov_model_sentence.call(null,tokens,prefix_length);var prefix = new cljs.core.Keyword(null,"head","head",1017102674).cljs$core$IFn$_invoke$arity$1(model);var chain = horoscopo_de_markov.markov.build_markov_chain_sentence.call(null,model);return horoscopo_de_markov.markov.join.call(null," ",cljs.core.flatten.call(null,cljs.core.take.call(null,5,chain)));
})());

//# sourceMappingURL=core.js.map