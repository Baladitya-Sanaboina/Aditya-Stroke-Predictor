from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

app = Flask(__name__)

df = pd.read_csv("heart.csv")

X = df.drop(columns='target')
Y = df['target']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=42)

model = LogisticRegression(max_iter=1000)
model.fit(X_train, Y_train)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        input_data = np.array([[
            float(data['age']),
            int(data['sex']),
            int(data['cp']),
            float(data['trestbps']),
            float(data['chol']),
            int(data['fbs']),
            int(data['restecg']),
            float(data['thalach']),
            int(data['exang']),
            float(data['oldpeak']),
            int(data['slope']),
            int(data['ca']),
            int(data['thal'])
        ]])

        prediction = model.predict(input_data)

        result = "The Person has Heart Disease" if prediction[0] == 1 else "The Person does not have Heart Disease"
        return jsonify({'prediction': result})
    except ValueError:
        return jsonify({'error': 'Invalid input data. Please provide numeric values.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
