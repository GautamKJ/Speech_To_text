console.log('speech recognisation')
// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.onstart = function () {
//     console.log("We are listening. Try speaking into the microphone.");
// };
let p = document.createElement('p');
const box = document.querySelector('.box');
box.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        box.appendChild(p);
    }
    console.log(" transcript-->", transcript);
})
recognition.addEventListener('end', recognition.start)
recognition.start();