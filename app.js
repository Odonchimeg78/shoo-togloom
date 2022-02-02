// тоглогчийнм ээлж хадгалах хувьсагч, 1-р тоглогчыг 0 , 2-р тоглогчыг  1 гэж тэмдэглэе
var activePlayer = 1;

// тоглогчийн  цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;


// шооны аль талхаараа буусныг хадаглах хувьсагч, 1-6 хүртэл утгыг санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6)+1;

{/* <div class="player-score" id="score-0">43</div> */}
// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = <em>Yes!</em>;

// |Програм эхэлхэд бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector(".dice").style.display = "none" ;


console.log('Шоо :' + dice);