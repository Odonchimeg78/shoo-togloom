// тоглогчийнм ээлж хадгалах хувьсагч, 1-р тоглогчыг 0 , 2-р тоглогчыг  1 гэж тэмдэглэе
var activePlayer = 0;

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
diceDom.style.display = "none";
                 
// шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener("click", function () {
                  
  // шооны аль талхаараа буусныг хадаглах хувьсагч, 
  // 1 - 6 хүртэл утгыг санамсаргүйгээр үүсгэж өгнө.
 var diceNumber = Math.floor(Math.random() * 6) + 1;
     
   // шооны зургийг вэб дээр гаргаж ирнэ
                  diceDom.style.display = "block";
   // Буусан санамсаргүй тоонд харгалзах тооны зургийг вэб дээр гаргах
 diceDom.src = 'dice-' + diceNumber + ".png";                  
  // alert("ｷｭ-ﾌﾞがダウンしました : " + diceNumber);
                  
  //Буусан тоо 1-ээс ялгаатай бол идвэхтэй Тоглогчийн ээлжийн оноог нэмэгдүүднэ.

                  if (diceNumber !== 1) {
                  //                1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
                                    roundScore = roundScore + diceNumber;
                                    document.getElementById("current-" + activePlayer).textContent = roundScore;
                  }  else {
                                    // 1 буусан тул тоглчийн ээлжийг энэ хэсэгт солж өгнө.
                                  
                                    //энэ тоглогчийн ээлжид цуглуулсан оноог 0 болго.   
                                  roundScore = 0;
                                  document.getElementById("current-" + activePlayer).textContent = 0;
                                  
                                 //   тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ
                                    // хэрэв идвэхтэй тоглогч 0 байвал идвэхтэй тоглогчийг 1 болго.
                                    // Үгүй бол хэрэв идвэхтэй тоглогчийг 0 болго.
                                   
                                    // if (activePlayer === 0) {
                                    //                   activePlayer = 1;
                                    // } else {
                                    //                   activePlayer = 0
                                    // }
                                  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
                                
                                    // идвэхтэй тоглогчийн тэмдэг цэг шилжүүлэх
                                  document.querySelector('.player-0-panel ').classList.toggle("active");
                                  document.querySelector('.player-1-panel ').classList.toggle("active");
                                //   шоог түр алга болгох
                                  diceDom.style.display = "none";
               }
});
