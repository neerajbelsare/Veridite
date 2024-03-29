from nltk.tag import UnigramTagger, BigramTagger, TrigramTagger, HiddenMarkovModelTagger, DefaultTagger


def pos_tagging(train_data, val_df):
    unigram_tagger = UnigramTagger(train_data, backoff=DefaultTagger('NN'))
    bigram_tagger = BigramTagger(train_data, backoff=unigram_tagger)
    trigram_tagger = TrigramTagger(train_data, backoff=bigram_tagger)
    hmm_tagger = HiddenMarkovModelTagger.train(train_data)

    taggers = {
        'Unigram': unigram_tagger,
        'Bigram': bigram_tagger,
        'Trigram': trigram_tagger,
        'HMM': hmm_tagger
    }

    accuracies = {}
    for name, tagger in taggers.items():
        accuracies[name] = tagger.evaluate([tagged_sentence for tagged_sentence in val_df['POS Tagged Text']])
        print(f"{name} Tagger Accuracy:", accuracies[name])

    # Select the tagger with the highest accuracy
    best_tagger_name = max(accuracies, key=accuracies.get)
    best_tagger = taggers[best_tagger_name]

    return best_tagger_name, best_tagger, accuracies[best_tagger_name]
