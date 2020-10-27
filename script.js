// Your JavaScript goes here!

var user_score= document.getElementById("User_score");
var comp_score= document.getElementById("Computer_score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
var Play_Result_div = document.getElementById("Play_Result");

var user_score_num = 0
var comp_score_num = 0


rock_div.addEventListener('click',function(){
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = "MAKE A MOVE!"
    user_score.innerHTML = 0
    comp_score.innerHTML = 0
    user_score_num = 0
    comp_score_num = 0
    }
  
  var y = Comp_Move()
  if(y=="rock"){
    Play_Result_div.innerHTML = "User plays Rock - Computer plays Rock<br>Draw!"
    console.log("DRAW")
  }else if (y=="paper"){
    Play_Result_div.innerHTML = "User plays Rock - Computer plays Paper<br>Computer Wins!"
    console.log("win")
    comp_score_num++
    comp_score.innerHTML = comp_score_num
  }else{
    Play_Result_div.innerHTML = "User plays Rock - Computer plays Scissors<br>User Wins!"
    console.log("loose")
    user_score_num++
    user_score.innerHTML = user_score_num
  }
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = Play_Result_div.innerHTML + "<br><br>GAME OVER!"
    }
})

paper_div.addEventListener('click',function(){
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = "MAKE A MOVE!"
    user_score.innerHTML = 0
    comp_score.innerHTML = 0
    user_score_num = 0
    comp_score_num = 0
    }
  var y = Comp_Move()
  if(y=="rock"){
    Play_Result_div.innerHTML = "User plays Paper - Computer plays Rock<br>User Wins!"
    user_score_num++
    user_score.innerHTML = user_score_num
  }else if (y=="paper"){
    Play_Result_div.innerHTML = "User plays Paper - Computer plays Paper<br>Draw!"
    
    
  }else{
    Play_Result_div.innerHTML = "User plays Paper - Computer plays Scissors<br>Computer Wins!"
    comp_score_num++
    comp_score.innerHTML = comp_score_num
    
  }
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = Play_Result_div.innerHTML + "<br><br>GAME OVER!"
    }
  })

scissors_div.addEventListener('click',function(){
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = "MAKE A MOVE!"
    user_score.innerHTML = 0
    comp_score.innerHTML = 0
    user_score_num = 0
    comp_score_num = 0
    }
  var y = Comp_Move()
  if(y=="rock"){
    Play_Result_div.innerHTML = "User plays Scissors - Computer plays Rock<br>Computer Wins!"
    comp_score_num++
    comp_score.innerHTML = comp_score_num
  }else if (y=="paper"){
    Play_Result_div.innerHTML = "User plays Scissors - Computer plays Paper<br>User Wins!"
    
    user_score_num++
    user_score.innerHTML = user_score_num
  }else{
    Play_Result_div.innerHTML = "User plays Scissors - Computer plays Scissors<br>DRAW!"
  
  }
  if(user_score_num>2 || comp_score_num>2){
    Play_Result_div.innerHTML = Play_Result_div.innerHTML + "<br><br>GAME OVER!"
    }
  })


  function Comp_Move(){
  var x = Math.floor(Math.random()*3)
  if (x==0){
    return "rock"
  } else if(x==1){
    return "paper"
  }else{
    return "scissors"
  }
}