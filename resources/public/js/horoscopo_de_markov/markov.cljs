(ns horoscopo-de-markov.markov)

(defn tokenize-str
  [s]
  "Split the string s into words (strings of non-whitespace characters)"
  (re-seq #"\S+" s))

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
