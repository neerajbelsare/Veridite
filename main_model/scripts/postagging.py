import nltk
from nltk.tag import UnigramTagger, BigramTagger, TrigramTagger
from sklearn.model_selection import train_test_split


def postagging(df):
    nltk.download('universal_tagset')
    nltk.download('punkt')

    tagged_sents = [nltk.pos_tag(tokens, tagset='universal') for tokens in df['tokenized_title']]

    train_data, test_data = train_test_split(tagged_sents, test_size=0.2, random_state=42)

    # Train the Unigram, Bigram, and Trigram taggers
    unigram_tagger = UnigramTagger(train_data)
    bigram_tagger = BigramTagger(train_data, backoff=unigram_tagger)
    trigram_tagger = TrigramTagger(train_data, backoff=bigram_tagger)

    # Tag the entire dataset
    unigram_tagged = [unigram_tagger.tag(sentence) for sentence in df['tokenized_title']]
    bigram_tagged = [bigram_tagger.tag(sentence) for sentence in df['tokenized_title']]
    trigram_tagged = [trigram_tagger.tag(sentence) for sentence in df['tokenized_title']]

    return unigram_tagged, bigram_tagged, trigram_tagged
