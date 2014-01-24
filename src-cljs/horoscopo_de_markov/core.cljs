(ns horoscopo-de-markov.core
  (:use [horoscopo-de-markov.markov :only [build-markov-model-sentence build-markov-chain-sentence join generate tokenize-str]]))

(defn log [o]
  (.log js/console (clj->js o)))

(defn intermision [m]
  (for [kv (:bodys m)]
    (count (val kv))))

(def geminis (js->clj js/GEMINIS))

(.write js/document
  (let [tokens (tokenize-str (join " " geminis))
        prefix-length 2
        model (build-markov-model-sentence tokens prefix-length)
        prefix (:head model)
        chain (build-markov-chain-sentence model)]
    (do
      (log model)
      (log (frequencies (intermision model)))
      (log (take 5 chain))
      (join " " (flatten (take 5 chain))))))
