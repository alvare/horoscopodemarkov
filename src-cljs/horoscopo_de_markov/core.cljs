(ns horoscopo-de-markov.core
  (:use [horoscopo-de-markov.markov :only [build-markov-model-sentence build-markov-chain-sentence join generate tokenize-str]]))

(def geminis "La Luna continúa en tránsito por el signo de Virgo, mientras los planetas Venus y Júpiter siguen retrógrados. La Luna es gay.")

(.write js/document
  (let [tokens (tokenize-str geminis)
        prefix-length 2
        length 40
        model (build-markov-model-sentence tokens prefix-length)
        prefix (:head model)
        chain (build-markov-chain-sentence model)]
    (.log js/console (clj->js chain))))
    ;(join " " chain)))
