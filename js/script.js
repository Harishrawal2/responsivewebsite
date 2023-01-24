// JavaScript for handling the image upload and display
const form = document.getElementById("upload-form");
const uploadedImage = document.getElementById("uploaded-image");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the selected file
  const file = document.getElementById("image-file").files[0];

  // Check that a file was selected
  if (!file) {
    return;
  }

  // Create a new FileReader object
  const reader = new FileReader();

  // Set the onload event handler
  reader.onload = () => {
    // Get the file content
    const content = reader.result;

    // Create an image element and set its src to the file content
    const image = document.createElement("img");
    image.src = content;

    // Show the uploaded image and hide the upload form
    uploadedImage.innerHTML = "";
    uploadedImage.appendChild(image);
    uploadedImage.style.display = "block";
    form.style.display = "none";
  };

  // Read the file as a data URL
  reader.readAsDataURL(file);
});
