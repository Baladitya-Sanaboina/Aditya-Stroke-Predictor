<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stroke Predictor Application</title>
</head>
<body>
    <h1>Stroke Predictor Application</h1>
    <p>This project is a Stroke Prediction system that uses a Flask server for the backend and a Node.js server for handling additional operations. Follow the steps below to set up and run the project on your local machine.</p>

    <h2>Prerequisites</h2>
    <p>Make sure you have the following installed on your machine:</p>
    <ul>
        <li>Python 3.x</li>
        <li>Node.js (v14.x or higher)</li>
        <li>pip (Python package installer)</li>
    </ul>

    <h2>Setup Instructions</h2>

    <h3>1. Clone the repository</h3>
    <pre><code>git clone https://github.com/your-username/stroke-predictor.git

cd stroke-predictor</code></pre>

    <h3>2. Create a virtual environment</h3>
    <p>Set up a Python virtual environment to isolate dependencies.</p>
    <pre><code># On Windows

python -m venv venv
venv\Scripts\activate

# On macOS/Linux

python3 -m venv venv
source venv/bin/activate</code></pre>

    <h3>3. Install Python dependencies</h3>
    <p>After activating the virtual environment, install the required dependencies from the <code>requirements.txt</code> file.</p>
    <pre><code>pip install -r requirements.txt</code></pre>

    <h3>4. Run the Flask server</h3>
    <p>Start the Flask server using the following command:</p>
    <pre><code>python strokePredictor.py</code></pre>

    <h3>5. Run the Node.js server</h3>
    <p>Start the Node.js server using the following command:</p>
    <pre><code>node server.js</code></pre>

    <h3>6. Test the application</h3>
    <p>Once both servers are running, you can provide inputs to the application and receive predictions.</p>

</body>
</html>
