//CLOCK

let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let ampm = hours > 12 ? 'PM' : 'AM'



setInterval(() => {

    let curentTime = new Date();

// console.log(curentTime.getHours());

hrs.innerHTML = (curentTime.getHours() < 10 ? "0":"") + curentTime.getHours();
min.innerHTML = (curentTime.getMinutes() < 10 ? "0":"") + curentTime.getMinutes();
sec.innerHTML = (curentTime.getSeconds() < 10 ? "0":"") + curentTime.getSeconds();
ampm.innerHTML = (curentTime.getPM)
}, 1000)

