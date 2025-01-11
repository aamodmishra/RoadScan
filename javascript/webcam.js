// Select elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture-btn');
const context = canvas.getContext('2d');

// creating a function that open camera for user (using getmedia api)

function open_camera(){
// Access the webcam

navigator.mediaDevices
.getUserMedia({ video: true })
.then((stream) => {
  video.srcObject = stream; // Display the live video feed
})
.catch((err) => {
  console.error('Error accessing the webcam:', err);
});

// Capture the image
captureButton.addEventListener('click', () => {
// Set canvas dimensions to match the video frame
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

// Draw the video frame onto the canvas
context.drawImage(video, 0, 0, canvas.width, canvas.height);

// Optional: Convert the canvas content to an image URL
const imageDataURL = canvas.toDataURL('image/png');
console.log('Captured Image:', imageDataURL);
});


}
