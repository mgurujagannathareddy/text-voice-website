    const voiceSelect = document.getElementById("voiceSelect");

    function loadVoices() {
        const voices = speechSynthesis.getVoices();
        voiceSelect.innerHTML = "";

        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = voice.name + " (" + voice.lang + ")";
            voiceSelect.appendChild(option);
        });
    }

    speechSynthesis.onvoiceschanged = loadVoices;
    function speakText() {
        const text = document.getElementById("textInput").value;
        const rate = document.getElementById("rate").value;
        const pitch = document.getElementById("pitch").value;
        const voices = speechSynthesis.getVoices();
        const selectedVoice = voiceSelect.value;

        if (text === "") {
            alert("Please enter some text");
            return;
        }

        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = rate;
        speech.pitch = pitch;
        speech.voice = voices[selectedVoice];

        window.speechSynthesis.speak(speech);
    }