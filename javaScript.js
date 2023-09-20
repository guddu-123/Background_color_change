const btn = document.getElementsByTagName('button')[0];
const colors = [
    "#20639b",
    "#F9E795",
    "#F96167",
    "#CCF381",
    "#4831D4",
    "#FF69B4",
    "#00FFFF",
    "#FFA351",
    "#FFBE7B",
    "#EED971"
];

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.classList.add('change-background-animation');

    setTimeout(() => {
        document.body.classList.remove('change-background-animation');
    }, 500);
});