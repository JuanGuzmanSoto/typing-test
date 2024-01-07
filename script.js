import commonWords from './commonWords.js';
document.addEventListener('DOMContentLoaded', () => {
    const testText = document.getElementById('testText');
    const textInput = document.getElementById('textInput');
    const timeLeft = document.getElementById('timeLeft');
    const wordsPerMinute = document.getElementById('wordsPerMinute');
    const resetButton = document.getElementById('resetButton');
    const totalTestTime = 30;
    let timer = 30, interval, wordCount = 0, startTime, expectedWPM = 200;

    const generateRandomText = () => {
        let randomText = "";
        for (let i = 0; i < 20; i++) {
            randomText += commonWords[Math.floor(Math.random() * commonWords.length)] + " ";
        }
        // Create new span elements for each character in the randomText
        const newSpans = randomText.trim().split('').map(char => `<span>${char}</span>`).join('');
        // Append the new spans to the testText element
        testText.innerHTML += newSpans;
        // Call highlightText to apply the correct styling
        highlightText();
    };
    const highlightText = () => {
        let typedText = textInput.value;
        const testTextSpans = testText.querySelectorAll('span');
        testTextSpans.forEach((span, index) => {
            // Reset classes only for the part that has been typed
            if (index < typedText.length) {
                span.classList.remove('correct', 'incorrect');
                span.classList.add(typedText[index] === span.textContent ? 'correct' : 'incorrect');
            } else {
                span.classList.remove('correct', 'incorrect', 'current');
            }
            // Highlight the current character being typed
            if (index === typedText.length) {
                span.classList.add('current');
            }
        });
    };
    
    const getColorForWPM = (wpm) => {
        // Define the WPM thresholds for color changes
        const lowWPMThreshold = 0; // Below this is blue
        const highWPMThreshold = 150; // Above this is red
    
        let color = 'blue'; // Default color
        if (wpm >= highWPMThreshold) {
            color = 'red'; // High WPM
        } else if (wpm >= lowWPMThreshold) {
            // Calculate the color gradient between blue and red
            const ratio = (wpm - lowWPMThreshold) / (highWPMThreshold - lowWPMThreshold);
            const blueToRedGradient = Math.floor(255 * ratio);
            const redToBlueGradient = 255 - blueToRedGradient;
            color = `rgb(${blueToRedGradient}, 0, ${redToBlueGradient})`; // This will create a gradient from blue to red
        }
        return color;
    };

    const calculateWPM = () => {
        const currentTime = new Date();
        const timeSpent = (currentTime - startTime) / 1000; // time spent in seconds
        const wordsTyped = correctCharCount / 5; // average word length is around 5 characters
        const wpm = timeSpent > 0 ? (wordsTyped / timeSpent) * 60 : 0;
        wordsPerMinute.textContent = Math.round(wpm);
        
        // Update WPM progress bar
        const wpmProgress = document.getElementById('wpmProgress');
        const wpmPercentage = Math.min(Math.round((wpm / expectedWPM) * 100), 100);
        const wpmColor = getColorForWPM(Math.round(wpm));
        wpmProgress.style.backgroundColor = wpmColor;
        wpmProgress.style.width = `${wpmPercentage}%`;
    };
    

    const startTest = () => {
        if (!startTime) {
            startTime = new Date();
        }
        interval = setInterval(() => {
            timer--;
            timeLeft.textContent = timer;
    
            // Update time progress bar
            const timeProgress = document.getElementById('timeProgress');
            const timePercentage = ((totalTestTime - timer) / totalTestTime) * 100;
            timeProgress.style.width = `${timePercentage}%`;
    
            calculateWPM();
            if (timer === 0) {
                clearInterval(interval);
                textInput.disabled = true;
    
                // Hide the typing test section
                document.getElementById('typingTest').style.display = 'none';
    
                // Show the final statistics
                document.getElementById('finalStats').style.display = 'block';
                document.getElementById('finalWPM').textContent = document.getElementById('wordsPerMinute').textContent;
                document.getElementById('finalAccuracy').textContent = document.getElementById('accuracyPercentage').textContent;
            }
        }, 1000);
    };

    textInput.addEventListener('focus', () => {
        if (timer === 30) startTest();
    });

    textInput.addEventListener('input', calculateWPM);

    resetButton.addEventListener('click', () => {
        location.reload() ;
        clearInterval(interval);
        timer = 30;
        timeLeft.textContent = timer;
        textInput.disabled = false;
        textInput.value = '';
        wordsPerMinute.textContent = '0';
        correctCharCount = 0;
        totalTypedCharCount = 0;
        lastInputLength = 0;
        accuracyPercentage.textContent = '100%';
        startTime = null;
    
        // Clear the existing text before generating new text
        testText.innerHTML = '';
    
        // Now generate new random text which will be the only content within testText
        generateRandomText();
        highlightText();
    });


    const accuracyPercentage = document.getElementById('accuracyPercentage');
    let correctCharCount = 0;
    let totalTypedCharCount = 0;
    let lastInputLength = 0;
    const calculateAccuracy = () => {
        const typedText = textInput.value;
        const originalText = testText.textContent.substring(0, typedText.length);

        // Calculate the number of newly added characters on input change
        const newCharCount = typedText.length - lastInputLength;

        // Adjust total typed character count based on new character count
        totalTypedCharCount += newCharCount > 0 ? newCharCount : -1;

        // Reset correct char count on every input to recalculate
        correctCharCount = 0;
        for (let i = 0; i < typedText.length; i++) {
            if (typedText[i] === originalText[i]) {
                correctCharCount++;
            }
        }

        // Calculate accuracy percentage
        const accuracy = totalTypedCharCount > 0 ? (correctCharCount / totalTypedCharCount) * 100 : 100;
        accuracyPercentage.textContent = accuracy.toFixed(2) + '%';

        // Update last input length for the next input event
        lastInputLength = typedText.length;
    };


    textInput.addEventListener('input', () => {
        calculateAccuracy();
        highlightText();
        if (startTime) {
            calculateWPM();
        }
    
        const typedText = textInput.value;
        const lastChar = typedText[typedText.length - 1];
        
        // Add new text only if the last character typed is a space
        if (lastChar === ' ' && testText.textContent.length - typedText.length < 100) {
            generateRandomText();
        }
    });
    generateRandomText(); //initial text.
});