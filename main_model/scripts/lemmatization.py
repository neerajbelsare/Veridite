from nltk import WordNetLemmatizer, word_tokenize


def lemmatize_text(text):
    lemmatizer = WordNetLemmatizer()
    tokens = word_tokenize(text)
    lemmatized_tokens = [lemmatizer.lemmatize(word) for word in tokens]
    lemmatized_text = ' '.join(lemmatized_tokens)
    return lemmatized_text


def lemmatize_dataframe(dataframe, text_column_name):
    dataframe['Lemmatized_Statement'] = dataframe[text_column_name].apply(lemmatize_text)
    return dataframe
