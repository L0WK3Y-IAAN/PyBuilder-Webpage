function handleFileChange(input) {
    const file = input.files[0];
    document.getElementById('spinner').style.display = 'block';

    const formData = new FormData();
    formData.append('file', file);

    // Add endpoint upload data here 

    fetch('your_upload_endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('File upload failed');
    })
    .then(data => {
      document.getElementById('spinner').style.display = 'none';
      showMessageBox(`File uploaded successfully: ${file.name}`);
    })
    .catch(error => {
      console.error(error);
      document.getElementById('spinner').style.display = 'none';
      showMessageBox('File upload failed. Please try again.');
    });
  }

  function handleDrop(event) {
    event.preventDefault();
    document.getElementById('fileInput').files = event.dataTransfer.files;
    document.getElementById('fileInput').classList.remove('drag-over');
    const fileName = event.dataTransfer.files[0].name;
    document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {
      document.getElementById('spinner').style.display = 'none';
      showMessageBox(`File dropped: ${fileName}`);
    }, 2000);
  }

  function handleDragOver(event) {
    event.preventDefault();
    document.getElementById('fileInput').classList.add('drag-over');
  }

  function handleDragLeave(event) {
    event.preventDefault();
    document.getElementById('fileInput').classList.remove('drag-over');
  }

  function showMessageBox(message) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 3000);
  }