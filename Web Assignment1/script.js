let bar = document.getElementById("head");
let num = document.getElementById("label");
let bell = document.getElementById("bell");
let bodysec = document.getElementById("body-sec");
var audio = document.getElementById('myAudio');

bar.addEventListener("click",function(){
    audio.play();
    setTimeout(()=>{
        audio.pause();
    },1500);
    bar.style.marginRight = "200px";
    bar.style.width = "250px";
    bar.style.borderRadius = "30px";
    setTimeout(function(){
        bell.innerHTML = "<i class='bx bxs-bell bx-flip-horizontal' ></i>";
        num.style.display = "block";
    },800);  
    setTimeout(function(){
        bar.style.marginTop="-80px";
    },1200);
    setTimeout(function(){
        bodysec.style.display = "block";
        bodysec.style.height="190px";
    },1400);
});