import pandas as pd
import nltk

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')


def load_and_clean_data(data_path, cleaned_path, names, columns_to_drop, counts_columns):
    liar_plus_df = pd.read_csv(data_path, sep='\t', header=None,
                               names=names)
    # Display the first few rows of the dataset
    print(liar_plus_df.head())

    # Check for missing values
    print(liar_plus_df.isnull().sum())

    # Drop irrelevant columns (e.g., ID, Speaker's Job, State)

    liar_plus_df = liar_plus_df.drop(columns=columns_to_drop)

    # Convert 'Label' column to binary (1 for 'false' and 'pants-fire', 0 for others)
    liar_plus_df['Label'] = liar_plus_df['Label'].apply(lambda x: 1 if x in ['false', 'pants-fire'] else 0)

    # Convert counts columns to numeric

    liar_plus_df[counts_columns] = liar_plus_df[counts_columns].apply(pd.to_numeric, errors='coerce')

    # Drop rows with missing values
    liar_plus_df = liar_plus_df.dropna()

    # Remove duplicates
    liar_plus_df = liar_plus_df.drop_duplicates()

    # Clean and preprocess the 'Statement' column
    liar_plus_df['Statement'] = liar_plus_df['Statement'].apply(lambda x: x.lower())
    liar_plus_df['Statement'] = liar_plus_df['Statement'].str.replace('[^a-zA-Z0-9\s]', '')
    liar_plus_df['Statement'] = liar_plus_df['Statement'].str.strip()

    # Display the cleaned dataset
    print(liar_plus_df.head())

    liar_plus_df.to_csv(cleaned_path, index=False)
