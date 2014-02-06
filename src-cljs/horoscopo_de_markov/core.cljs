(ns horoscopo-de-markov.core
  (:require [horoscopo-de-markov.markov :as markov]))

(defn join [with what]
  (.join (clj->js what) with))

(defn log [o]
  (.log js/console (clj->js o)))

(defn chaining [m]
  (for [kv (:bodys m)]
    (count (val kv))))

(defn timy [text prev]
  (let [t (.now js/Date)]
    (do
      (log (str text (-  t prev)))
      t)))

(defn ^:export gen-markov [prefix-length sentence-count sign]
  (let [t1 (timy "Start: " (.now js/Date))
        tokens (markov/tokenize-str (join " " (aget js/DATA sign)))
        t2 (timy "Tokens: " t1)
        model (markov/build-markov-model tokens prefix-length)
        t3 (timy "Model: " t2)
        chain (markov/build-markov-chain model)
        t4 (timy "Chain: " t3)]
    (do
      (log (frequencies (chaining model)))
      (join " " (flatten (take sentence-count chain))))))
