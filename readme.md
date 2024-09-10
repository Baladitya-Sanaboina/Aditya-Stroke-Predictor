  Stroke Predictor Application

Stroke Predictor Application
============================

This project is a Stroke Prediction system that uses a Flask server for the backend and a Node.js server for handling additional operations. Follow the steps below to set up and run the project on your local machine.

Prerequisites
-------------

Make sure you have the following installed on your machine:

*   Python 3.x
*   Node.js (v14.x or higher)
*   pip (Python package installer)

Setup Instructions
------------------

### 1\. Clone the repository

    git clone https://github.com/your-username/stroke-predictor.git
    cd stroke-predictor

### 2\. Create a virtual environment

Set up a Python virtual environment to isolate dependencies.

    # On Windows
    python -m venv venv
    venv\Scripts\activate
    
    # On macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

### 3\. Install Python dependencies

After activating the virtual environment, install the required dependencies from the `requirements.txt` file.

    pip install -r requirements.txt

### 4\. Run the Flask server

Start the Flask server using the following command:

    python strokePredictor.py

### 5\. Run the Node.js server

Start the Node.js server using the following command:

    node server.js

### 6\. Test the application

Once both servers are running, you can provide inputs to the application and receive predictions.
