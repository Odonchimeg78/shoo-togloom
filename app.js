// тоглогчийнм ээлж хадгалах хувьсагч, 1-р тоглогчыг 0 , 2-р тоглогчыг  1 гэж тэмдэглэе
var activePlayer = 1;

// тоглогчийн  цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;




{/* <div class="player-score" id="score-0">43</div> */}
// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = <em>Yes!</em>;

// |Програм эхэлхэд бэлтгэе
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";



var diceDom = document.querySelector(".dice");
                 diceDom .style.display = "none";
document.querySelector('.btn-roll').addEventListener("click", function ( ) {
                  // шооны аль талхаараа буусныг хадаглах хувьсагч, 1-6 хүртэл утгыг санамсаргүйгээр үүсгэж өгнө.
                  var diceNumber = Math.floor(Math.random() * 6) + 1;
                 diceDom.style.display = "block" ;
                 diceDom.src = 'dice-' + diceNumber + ".png";                  
                  // alert("ｷｭ-ﾌﾞがダウンしました : " + diceNumber);
});
