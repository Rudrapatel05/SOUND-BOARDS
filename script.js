const sounds = ["applause", "boo", "gsap", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

const stopSounds = () => {
    sounds.forEach((sound) => {
        const currentsound = document.getElementById(sound);
        currentsound.pause();
        currentsound.currentTime = 0;
    });
};

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", () =>{
        stopSounds();
        document.getElementById(sound).play();
    });
    buttons.appendChild(btn);
});