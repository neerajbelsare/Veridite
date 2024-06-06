import re
import string
from nltk.tokenize import word_tokenize
from sklearn.preprocessing import LabelEncoder


def preprocess_data(df):
    df = df.dropna(subset=['rating'])
    df = df.dropna(subset=['title'])

    df = df.drop(['id'], axis=1)

    labels = df['rating']

    df['title'] = df['title'].apply(clean_text)
    df['category'] = df['category'].apply(clean_text)
    df['account'] = df['account'].apply(clean_text)
    df['post type'] = df['post type'].apply(clean_text)

    df['tokenized_title'] = df['title'].apply(word_tokenize)

    df['rating'] = df['rating'].astype(str)

    return df


def clean_text(text):
    text = str(text)

    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = re.sub(r'\d+', '', text)
    text = text.strip()
    return text
