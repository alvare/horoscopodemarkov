(ns horoscopo-de-markov.core
  (:require [horoscopo-de-markov.markov :as markov]))

(defn join [with what]
  (.join (clj->js what) with))

(defn log [o]
  (.log js/console (clj->js o)))

(defn chaining [m]
  (for [kv (:bodys m)]
    (count (val kv))))

(defn ^:export gen-markov [prefix-length sentence-count sign]
  (let [tokens (markov/tokenize-str (join " " (aget js/DATA sign)))
        model (markov/build-markov-model tokens prefix-length)
        chain (markov/build-markov-chain model)]
    (do
      ;(log (frequencies (chaining model)))
      (log model)
      (join " " (flatten (take sentence-count chain))))))
