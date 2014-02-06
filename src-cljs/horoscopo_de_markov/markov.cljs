(ns horoscopo-de-markov.markov)

(defn concat-v [v1 v2]
  (reduce conj v1 v2))

(defn tokenize-str [s]
  "Forms a nested list like:
  (('Group' 'sentences' 'like' 'this.') ('Separe' 'words.'))"
  (map (partial re-seq #"\S+") (re-seq #"[^.]*\." s)))

(defn process-tail
  [model-body tokens prefix-length]
  "Partition the tokens in n-length collections and assoc them recursively."
  (loop [accum model-body token-g (partition (inc prefix-length) 1 tokens)]
    (if (seq token-g)
      (let [g (first token-g)
            pfx (drop-last g)
            sfx (last g)]
        (recur (assoc accum pfx (conj (accum pfx) sfx)) (next token-g)))
      accum)))

(defn build-markov-model
  [token-sentences prefix-length]
  "Given a collection of collections of collections of tokens, builds a map of :heads and :bodys"
  (loop [model {:heads {} :bodys {}} ts token-sentences]
    (if (seq ts)
      (let [tokens (first ts)
            head (take prefix-length tokens)
            head-pfx (nth tokens prefix-length "")
            model-head (assoc (model :heads) head (conj ((model :heads) head) head-pfx))
            model-body (process-tail (model :bodys) tokens prefix-length)]
        (recur {:heads model-head :bodys model-body} (next ts)))
      model)))

(defn build-markov-chain-sentence
  [model prefix]
  "Generate a lazy-seq of tokens, starting with prefix, using the Markov model to determine the next token"
  (if-let [suffixes (get model prefix)]
    (let [next-word (rand-nth suffixes)]
      (cons (first prefix) (lazy-seq (build-markov-chain-sentence model (concat (rest prefix) [next-word])))))
    prefix))

(defn build-markov-chain
  [model]
  (let [pfx (rand-nth (keys (model :heads)))
        others (dissoc (model :heads) pfx)]
    (cons (build-markov-chain-sentence (:bodys model) pfx) (lazy-seq (build-markov-chain {:heads others :bodys (model :bodys)})))))
