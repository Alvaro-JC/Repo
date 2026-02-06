// Awesome random image generator
const mediaSets = {
    bgvid: [
        '../IMG/BlueSky1.mp4', '../IMG/BlueSky2.mp4', 
        '../IMG/BlueSky3.mp4', '../IMG/BlueSky4.mp4', 
        '../IMG/BlueSky5.mp4'
    ],
    snails: [
        '../IMG/SNAIL/Snail1.gif','../IMG/SNAIL/Snail2.gif',
        '../IMG/SNAIL/Snail3.gif','../IMG/SNAIL/Snail4.gif',
        '../IMG/SNAIL/Snail5.gif','../IMG/SNAIL/Snail6.gif',
    ],
    marqueeTexts: [
        "Welcome to hell",
        "Hello World!",
        "Remember to put text here",
        "gulp",
        "I hate people who never end their",
        "Lorem ipsum, dolor sitsjdasuidhaufsdhfadtafdtyasfd",
        "Whoa-oh-oh-oh-oh-oh-oh-oh-oh-oh--Story of Undertale I fell from the light Talk? Or should I fight? Monster genocide This my Undertale",
        "Marquee!!",
        "funny snail",
        "I know what you are",
        "Dink some water",
        "Eat your greens!",
        "'Cause I'm a punk rocker, yes I am...",
        "Behind you",
        "Hold your horses, pal!!",
        "FUNCTION: 'getRandomLine' FAILED. RELOAD THIS PAGE IMMEDIATELY."
    ]
};

// Random media selector
function getRandomMedia(mediaArray) {
    const randomIndex = Math.floor(Math.random() * mediaArray.length);
    return mediaArray[randomIndex];
}

// Function to change media
function changeAllMedia() {
    // Muda o vídeo de fundo
    const videoElement = document.querySelector('#bgvideo');
    const videoSource = videoElement.querySelector('source');
    const videoSet = mediaSets.bgvid;
    
    if (videoSet && videoSource) {
        const randomVideo = getRandomMedia(videoSet);
        videoSource.src = randomVideo;
        // Recarrega o vídeo com a nova source
        videoElement.load();
    }
    
    // Muda a imagem
    const snailImg = document.querySelector('img.snailguy');
    const snailSet = mediaSets.snails;
    
    if (snailSet && snailImg) {
        const randomSnail = getRandomMedia(snailSet);
        snailImg.src = randomSnail;
    }

        // Muda o texto do marquee
    const marqueeElement = document.querySelector('marquee');
    const textSet = mediaSets.marqueeTexts;
    
    if (textSet && marqueeElement) {
        const randomText = getRandomMedia(textSet);
        marqueeElement.textContent = randomText;
    }
}

// Executes when page loads
document.addEventListener('DOMContentLoaded', function() {
    changeAllMedia();
});