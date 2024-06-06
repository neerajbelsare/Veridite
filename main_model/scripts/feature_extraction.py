from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from gensim.models.keyedvectors import KeyedVectors
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score


# TF-IDF Vectorizer
def tfidf_vectorize(lemmatized_sentences):
    sentences = [" ".join(sentence) for sentence in lemmatized_sentences]
    vectorizer = TfidfVectorizer(max_features=1000)
    features = vectorizer.fit_transform(sentences)
    return features


# Word Embeddings Vectorizer
# def word_embeddings_vectorize(lemmatized_sentences):
#     model = KeyedVectors.load_word2vec_format(path, binary=True)
#     features = []
#     for sentence in lemmatized_sentences:
#         vectors = [model.wv[token] for token in sentence if token in model.wv]
#         if vectors:
#             features.append(np.mean(vectors, axis=0))
#         else:
#             features.append(np.zeros(model.vector_size))
#     return np.array(features)


# Bag of Words Vectorizer
def bow_vectorize(lemmatized_sentences):
    sentences = [" ".join(sentence) for sentence in lemmatized_sentences]
    vectorizer = CountVectorizer(max_features=1000)
    features = vectorizer.fit_transform(sentences)
    return features


# N-grams Vectorizer
def ngrams_vectorize(lemmatized_sentences, n=2):
    sentences = [" ".join(sentence) for sentence in lemmatized_sentences]
    vectorizer = CountVectorizer(ngram_range=(n, n), max_features=1000)
    features = vectorizer.fit_transform(sentences)
    return features


def train_and_evaluate(features, labels):
    X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='macro')
    recall = recall_score(y_test, y_pred, average='macro')
    f1 = f1_score(y_test, y_pred, average='macro')

    return accuracy, precision, recall, f1

