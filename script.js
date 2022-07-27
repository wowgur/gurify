// chrome.exe --autoplay-policy=no-user-gesture-required
console.log("Welcome to partikify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs =[
    {songName:"Majhe Aale" ,filePath:"songs/1.mp3" , coverPath: "cover/1.jpg",},
    {songName:"295" ,filePath:"songs/2.mp3" , coverPath: "cover/2.jpg"},
    {songName:"Chhithiyaan" ,filePath:"songs/3.mp3" , coverPath: "cover/3.jpg"},
    {songName:"Don't Worry" ,filePath:"songs/4.mp3" , coverPath: "cover/4.jpg"},
    {songName:"Jatt de Jawani" ,filePath:"songs/5.mp3" , coverPath: "cover/5.jpg"},
    {songName:"Jhanjhar" ,filePath:"songs/6.mp3" , coverPath: "cover/6.jpg"},
    {songName:"Mexico" ,filePath:"songs/7.mp3" , coverPath: "cover/7.jpg"},
    {songName:"Old Skool" ,filePath:"songs/8.mp3" , coverPath: "cover/8.jpg"},
    {songName:"These Days" ,filePath:"songs/9.mp3" , coverPath: "cover/9.jpg"},
    {songName:"We Rollin" ,filePath:"songs/10.mp3" , coverPath: "cover/10.jpg"},
    // {songName:"Love's Voice" ,filePath:"songs/11.mp3" , coverPath: "cover/10.jpg"},
]
songItems.forEach((element , i) =>{
    // element.getElementsByClassName("songName")[0].src=songs[i].songName;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    // element.getElementsByClassName('timestamp').innerText =audioElement.duration;
}) 

masterPlay.addEventListener('click' ,()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
audioElement.play();

audioElement.addEventListener('timeupdate' ,()=> {
// console.log('timeupdate');
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value =progress;
});

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays =() =>{
  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        console.log(e.target);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click' ,() =>{
    if (songIndex >= 9) {
        songIndex =1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click' ,() =>{
    if (songIndex <= 0) {
        songIndex =1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
