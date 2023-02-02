
const helloBtn = document.querySelector("#hello");
const byeBtn = document.querySelector("#goodbye");

helloBtn.addEventListener('click', function () {
    console.log("hello");
});
byeBtn.addEventListener('click', () => console.log("goodbye"));