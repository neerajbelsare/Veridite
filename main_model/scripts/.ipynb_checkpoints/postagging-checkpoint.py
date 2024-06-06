import time

import nltk
from sklearn.metrics import accuracy_score, precision_recall_fscore_support
from sklearn.model_selection import train_test_split
from nltk.tag import UnigramTagger, BigramTagger, TrigramTagger, hmm


def evaluate_tagger(tagger, test_data):
    return tagger.evaluate(test_data)


def postagging(df):
    nltk.download('punkt')
    nltk.download('averaged_perceptron_tagger')

    titles = df['title'].tolist()

    tagged_titles = [nltk.pos_tag(nltk.word_tokenize(title)) for title in titles]

    # Split data into training and testing sets
    train_data, test_data = train_test_split(tagged_titles, test_size=0.3, random_state=42)

    # Flatten the data for NLTK tagger training
    train_sents = [sent for title in train_data for sent in title]
    test_sents = [sent for title in test_data for sent in title]

    # Train the taggers
    start_time = time.time()
    hmm_tagger = hmm.HiddenMarkovModelTagger.train(train_data)
    hmm_time = time.time() - start_time

    start_time = time.time()
    unigram_tagger = UnigramTagger(train_data)
    unigram_time = time.time() - start_time

    start_time = time.time()
    bigram_tagger = BigramTagger(train_data, backoff=unigram_tagger)
    bigram_time = time.time() - start_time

    start_time = time.time()
    trigram_tagger = TrigramTagger(train_data, backoff=bigram_tagger)
    trigram_time = time.time() - start_time

    # hmm_metrics = evaluate_tagger(hmm_tagger, test_data)
    # unigram_metrics = evaluate_tagger(unigram_tagger, test_data)
    # bigram_metrics = evaluate_tagger(bigram_tagger, test_data)
    # trigram_metrics = evaluate_tagger(trigram_tagger, test_data)

    # print(hmm_metrics + " " + unigram_metrics + " " + bigram_metrics + " " + trigram_metrics)
    # print( f"spaCy: Accuracy={spacy_metrics[0]}, Precision={spacy_metrics[1]}, Recall={spacy_metrics[2]},
    # F1 Score={spacy_metrics[3]}, Time={spacy_metrics[4]}s")
