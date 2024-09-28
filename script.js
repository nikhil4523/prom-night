function playVideo() {
    // Hide all other sections
    document.querySelector('.welcome-section').style.display = 'none';
    document.querySelector('.photo-carousel').style.display = 'none';
    document.querySelector('.reasons-section').style.display = 'none';
    document.querySelector('.button-section').style.display = 'none';

    // Show the video section
    document.getElementById('video-section').style.display = 'flex';
    document.getElementById('video-section').classList.remove('hidden');

    // Play the video
    document.getElementById('prom-video').play();
}
