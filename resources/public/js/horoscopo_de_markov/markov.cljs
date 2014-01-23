(ns horoscopo-de-markov.markov)

(defn join [with what]
  (.join (clj->js what) with))

(defn build-markov-model
  [tokens prefix-length]
  "Given a collection of tokens, builds a map of prefixes of length prefix-length to suffixes."
  (letfn [(build-model
           [accum token-groups]
           (if (seq token-groups)
             (let [g   (first token-groups)
                   pfx (drop-last g)
                   sfx (last g)]
               (recur (assoc accum pfx (conj (get accum pfx []) sfx)) (next token-groups)))
             accum))]
    (build-model {} (partition (inc prefix-length) 1 (seq tokens)))))

(defn build-markov-chain
  [model prefix]
  "Generate a lazy-seq of tokens, starting with prefix, using the Markov model
  to determine the next token"
  (if-let [suffixes (get model prefix)]
    (let [next-word (rand-nth suffixes)]
      (cons (first prefix) (lazy-seq (build-markov-chain model (concat (rest prefix) [next-word])))))
    prefix))

(defn build-markov-model-sentence
  [tokens prefix-length]
  (letfn [(build-model
           [accum token-groups]
           (if (seq token-groups)
             (let [g (first token-groups)
                   pfx (take prefix-length g)
                   sfx (get g prefix-length)
                   heads (:heads accum)
                   bodys (:body accum)]
               (do (.log js/console (clj->js g))
               (recur {:heads (assoc heads pfx (conj (get heads pfx []) sfx))
                       :bodys (merge-with conj bodys (build-markov-model (rest g) prefix-length))}
                      (next token-groups))))
             accum))]
    (build-model {:heads {} :bodys {}} (seq tokens))))

(defn tokenize-str [s]
  (map (partial re-seq #"\S+") (re-seq #"[^.]*\." s)))

(defn generate
  [tokens prefix-length length prefix]
  (let [model (build-markov-model tokens prefix-length)
        chain (build-markov-chain model prefix)]
    (join " " chain)))
