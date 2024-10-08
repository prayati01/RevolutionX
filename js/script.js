// Function to toggle the menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    //querySelector returns the first element within the document that matches the specified selector(s). 
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// Function to change the background video based on the clicked car
function changeVideo(name) {
    // Get all video elements
    const videoElements = document.querySelectorAll('.bg-video'); 
    //querySelectorAll returns a static NodeList representing a list of elements matching the specified group of selectors.

    // Loop through video elements
    videoElements.forEach(video => {
        // Hide all videos
        video.style.display = 'none'; // Corrected the property name to 'display'

        // If the video matches the selected car name, show it
        if (video.classList.contains(name)) {
            video.style.display = 'block';
        }
    });
}

// Change the play and pause button on click event
function togglePlayPause() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
    //classList.toggle() method adds the specified class if it is not present and removes it if it is.
}

// Video play and pause
function pauseVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
    });
    togglePlayPause(); // Call the function to toggle play/pause button
}

function playVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.play();
    });
    togglePlayPause(); // Call the function to toggle play/pause button
}
