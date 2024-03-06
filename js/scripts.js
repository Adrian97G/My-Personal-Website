var video = document.getElementById("myVideo");

function playVideo() {
    video.play();
}

setInterval(playVideo, 15000); 

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const texts = ["I'm Frontend Developer", "I'm Web Developer", "I'm Business Manager"];
    let index = 0;
    
    function type() {
        const text = texts[index % texts.length];
        let innerIndex = 0;

        function typeText() {
            if (innerIndex <= text.length) {
                textElement.textContent = '! ' + text.substr(0, innerIndex);
                innerIndex++;
                setTimeout(typeText, 100); 
            } else {
                setTimeout(eraseText, 1000); 
            }
        }

        function eraseText() {
            if (innerIndex >= 0) {
                textElement.textContent = '! ' + text.substr(0, innerIndex);
                innerIndex--;
                setTimeout(eraseText, 50); 
            } else {
                index++;
                if (index === texts.length) {
                    index = 0;
                }
                setTimeout(type, 500); 
            }
        }

        typeText(); 
    }

    type(); 
});
