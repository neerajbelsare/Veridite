import nltk
import Levenshtein
from collections import defaultdict

nltk.download('wordnet')
nltk.download('omw-1.4')


# Levenshtein Distance Lemmatizer
# def levenshtein_lemmatizer(word, dictionary):
#     closest_word = min(dictionary, key=lambda w: Levenshtein.distance(word, w))
#     return closest_word


# Radix Tree Lemmatizer
class RadixTree:
    def __init__(self):
        self.tree = defaultdict(dict)

    def insert(self, word):
        node = self.tree
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node['#'] = word

    def search(self, word):
        node = self.tree
        for char in word:
            if char in node:
                node = node[char]
            else:
                return None
        return node.get('#', None)


# Morphological Analyzer based Lemmatizer
def morphological_analyzer_lemmatizer(word):
    morph_rules = {'ing': '', 'ed': '', 's': '', 'es': '', 'ly': ''}
    for suffix, replacement in morph_rules.items():
        if word.endswith(suffix):
            return word[:-len(suffix)] + replacement
    return word


# Affix Lemmatizer
def affix_lemmatizer(word):
    affixes = ['pre', 're', 'un', 'dis', 'mis', 'sub', 'trans', 'super', 'semi', 'anti', 'mid']
    for affix in affixes:
        if word.startswith(affix):
            return word[len(affix):]
    return word


# Perform lemmatization using different methods
def perform_lemmatization(tagged_sentences, dictionary, radix_tree):
    results = {
        # "levenshtein": [],
        "radix": [],
        "morphological": [],
        "affix": []
    }

    for sentence in tagged_sentences:
        # levenshtein_lemmatized = []
        radix_lemmatized = []
        morphological_lemmatized = []
        affix_lemmatized = []

        for word, tag in sentence:
            # levenshtein_lemmatized.append(levenshtein_lemmatizer(word, dictionary))
            radix_lemmatized.append(radix_tree.search(word) or word)
            morphological_lemmatized.append(morphological_analyzer_lemmatizer(word))
            affix_lemmatized.append(affix_lemmatizer(word))
        #
        # results["levenshtein"].append(levenshtein_lemmatized)
        results["radix"].append(radix_lemmatized)
        results["morphological"].append(morphological_lemmatized)
        results["affix"].append(affix_lemmatized)

    return results
