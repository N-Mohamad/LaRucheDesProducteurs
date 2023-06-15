
let countDate = new Date("Dec 31, 2022 23:59:59").getTime();


let counter = setInterval (() => {
    let dateNow = new Date(). getTime();

    
    let dateDiff = dateNow - countDate;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000))

    // console.log(minutes/ 1000 / 60)

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".Hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
if (seconds % 5 === 0) {
    let timerimg = document.querySelector(".timerimg");
    timerimg.innerHTML="";
    let img = new Image();
    img.src= "/images.jpg"
    timerimg.appendChild(img);
    if (seconds % 0 === 5){
        img.style.display = "none"
    }
    
    
    if (seconds % 15 === 5){
        let timerimg2 = document.querySelector(".timerimg2");
        timerimg2.innerHTML="";
        let img2 = new Image();
        img2.onload = () => {
            img.style.display = "none";
        };
        img2.src="/800px-Veggies.jpg";
        timerimg.appendChild(img2);
        if (seconds % 15 === 0){
            img.style.display = "none"
        }
        

        if  (seconds % 50 === 15){
        let timerimg3 = document.querySelector(".timerimg3");
        timerimg3.innerHTML="";
        let img3 = new Image();
        img3.onload = () => {
            img.style.display = "none";
            img2.style.display = "none";
        };
        img3.src="/istockphoto-1198220441-612x612.jpg";
        timerimg.appendChild(img3);

    };
    };
    

    
}
}, 1000);
