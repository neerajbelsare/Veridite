import re
import string


def preprocess_data(df):
    df = df.dropna(subset=['rating'])
    df = df.dropna(subset=['title'])

    df = df.drop(['id'], axis=1)

    df['title'] = df['title'].apply(clean_text)
    df['category'] = df['category'].apply(clean_text)
    df['account'] = df['account'].apply(clean_text)
    df['post type'] = df['post type'].apply(clean_text)

    return df


def clean_text(text):
    text = str(text)

    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = re.sub(r'\d+', '', text)
    text = text.strip()
    return text
