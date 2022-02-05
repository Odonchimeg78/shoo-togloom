



// Тоглоомын бүх газарт ашиглах глобаль хувьсагчлыг энд зарлая.
// Тоглоом дууссан эсхийг хадгалах хувьсагч
var isNewGame;
// Аль тоглогч шоо шидэхийг энд хадгалах хувьсагч.
// var activePlayer, scores, roundScore;   ингэж нэг дор зарлаж бас болно.
var activePlayer;

// тоглогчдийн  цуглуулсан оноог хадгалах хувьсагч
var scores;

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
// Шооны зургыг Dom-ooc  хайж олоод энд хадгалъя.
var diceDom = document.querySelector(".dice");

//  Тоглоомх шинээр эхлэхэд бэлтгэнэ.
isNewGame = true;
// Тоглоом эхлүүлнэ 
initGame();


// Тоглоом шинээр эхлэхэд  бэлтгэнэ
function initGame() {
//  Тоглоом эхэллээ гэдэг төлөвт оруулна.
                
// Аль тоглогч шоо шидэхийг энд хадгална.
 activePlayer = 0 ;

// тоглогчдийн  цуглуулсан оноог хадгалах 
 scores = [0 , 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах 
 roundScore = 0;
                
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
                
//  тоглогчдын нэр буцааж гаргах
                document.getElementById('name-0').textContent = "Player 1";
                document.getElementById('name-1').textContent = "Player 2";
                
                document.querySelector('.player-0-panel').classList.remove('winner');
                document.querySelector('.player-1-panel').classList.remove('winner');

                document.querySelector('.player-0-panel').classList.remove("active");
                document.querySelector('.player-1-panel').classList.remove("active");

                document.querySelector('.player-0-panel').classList.add("active");

                diceDom.style.display = "none";  
               
                isNewGame = true;
               
}


// шоог шидэх эвент листенер btn-roll
document.querySelector('.btn-roll').addEventListener("click", function () {
                         
if (isNewGame) {
                
 // 1 - 6 хүртэл утгыг санамсаргүйгээр гаргаж авна.
  // шооны аль талхаараа буусныг хадаглах хувьсагч, 
    var diceNumber = Math.floor(Math.random() * 6) + 1;
     
   // шооны зургийг вэб дээр гаргаж ирнэ
                diceDom.style.display = "block";
                
   // Буусан санамсаргүй тоонд харгалзах тооны зургийг вэб дээр гаргах
   diceDom.src = 'dice-' + diceNumber + ".png";                  
  
                  
  //Буусан тоо 1-ээс ялгаатай бол идвэхтэй Тоглогчийн ээлжийн оноог нэмэгдүүднэ.

                 if (diceNumber !== 1) {
                  //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
                roundScore = (roundScore + diceNumber);
                             
                                 
                document.getElementById("current-" + activePlayer).textContent = roundScore;
                           
                        // Уг тоглогчийн цуглуулсан Ээлжийн оноог глобаль оноон дээр нэмж өгнө.
                           scores[activePlayer] = ( roundScore +scores[activePlayer]);                
                       
                     // Дэлгэц дээр оноог өөрчилнө.          
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];                       
                 //   тоглогч хожсон эсхийг  шалгах(оноо нь 100-с их үү?)               
                 if (scores[activePlayer] >= 100) {
                       
                 
                // тоглоомыг дууссан төлөвт оруулна.
                                 isNewGame=false;                                                                   
                // Ялагч гэсэн техт нэрнийх нь оронд гаргана.
                                document.getElementById("name-" + activePlayer).textContent = "WINNER!!!!";
                                document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
                                }else {
                                isNewGame = true; 
                                //   document.querySelector('.btn-roll').addEventListener("click"); 
                                  }
                                } else {
                                 switchToNextPlayer(); 
                                
                                } 
                } else { alert(' Togloom duuslaa New game button push ');
                           }              
});

// HOLD товчны эвент лестенер
document.querySelector(' .btn-hold ').addEventListener("click", function () {
                //     Уг тоглогчийн цуглуулсан Ээлжийн оноог глобаль оноон дээр нэмж өгнө..
                  scores[activePlayer] = (scores[activePlayer] + roundScore);
                       
                   // Дэлгэц дээр оноог өөрчилнө.
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                if (isNewGame) {
                 // Уг тоглогч хожсон эсхийг  шалгах(оноо нь 100-с их үү?)
                       if (scores[activePlayer] >= 100){ 
                 
                   // тоглоомыг дууссан төлөвт оруулна.
                                isNewGame = false;
                //Ялагч гэсэн техт нэрнийх нь оронд гаргана.
                                document.getElementById("name-" + activePlayer).textContent = "WINNER!!";
                                document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
                } else {

                                //   Тоглогчийн ээлжийг солно.
                             switchToNextPlayer();
                 }        
                } else {
                       alert(' Togloom duuslaa New game button push ');        
                }
});



//  энэ функц нь тоглох ээлжийг дараачийн тоглогчид шилжүүлдэг.
// DRY Don't repeat yourself!!!!!!!!
function switchToNextPlayer() {
                
                  
                  

                //энэ тоглогчийн ээлжид цуглуулсан оноог 0 болго.   
                                  roundScore = 0;
                                  document.getElementById("current-" + activePlayer).textContent = 0;
                                  
                                 //   тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ
                                    // хэрэв идвэхтэй тоглогч 0 байвал идвэхтэй тоглогчийг 1 болго.
                                    // Үгүй бол хэрэв идвэхтэй тоглогчийг 0 болго.
                                    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
                                   
                                    
                                
                                    // идвэхтэй тоглогчийн тэмдэг цэг шилжүүлэх
                                  document.querySelector('.player-0-panel ').classList.toggle("active");
                                  document.querySelector('.player-1-panel ').classList.toggle("active");
                                //   шоог түр алга болгох
                                  diceDom.style.display = "none";
}
//// New game tovchluur ba шинэ тоглоом эхлүүлэх эвент листенер
document.querySelector('.btn-new').addEventListener("click", initGame);



      
