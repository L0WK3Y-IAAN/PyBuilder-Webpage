from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, this is the home page!'

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['file']
    # Save the uploaded file to a desired location
    uploaded_file.save('uploads/' + uploaded_file.filename)

    # Run your Python script here using subprocess or other methods
    # Replace 'your_script.py' with the actual name of your script
    # subprocess.run(['python', 'your_script.py', uploaded_file.filename])

    return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)
