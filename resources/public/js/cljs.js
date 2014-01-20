goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../horoscopo_de_markov/markov.js", ['horoscopo_de_markov.markov'], ['cljs.core']);
goog.addDependency("../horoscopo_de_markov/core.js", ['horoscopo_de_markov.core'], ['horoscopo_de_markov.markov', 'cljs.core']);