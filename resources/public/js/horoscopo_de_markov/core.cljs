(ns horoscopo-de-markov.core
  (:use [horoscopo-de-markov.markov :only [build-markov-model-sentence build-markov-chain-sentence tokenize-str]]))

(defn join [with what]
  (.join (clj->js what) with))

(defn log [o]
  (.log js/console (clj->js o)))

(defn chaining [m]
  (for [kv (:bodys m)]
    (count (val kv))))

(defn ^:export markov [plen len sign]
  (let [tokens (tokenize-str (.join (aget js/DATA sign) " "))
        prefix-length plen
        model (build-markov-model-sentence tokens prefix-length)
        prefix (:head model)
        chain (build-markov-chain-sentence model)]
    (do
      (log (frequencies (chaining model)))
      (.log js/console (.join (aget js/DATA sign) " "))
      (join " " (flatten (take len chain))))))
