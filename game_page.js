player1_name= localStorage.getItem("player1_name", player1_name);
player2_name= localStorage.getItem("player2_name", player2_name);

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : " + player2_name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer= parseInt(number1)*(number2);
    question_word = "<h4 id='word_display'>"+number1+"x"+number2+"</h4>";
    input_box = "<br>answer : <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn= "player1_name";
answer_turn="player2_name";

function check() {
    player_answer = document.getElementById("input_checkbox").value;
    answer = player_answer.toLowerCase();
    if(answer == actual_answer){
        if(answer_turn == "player1_name"){
            player1_score = player1_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        if (answer_turn=="player1_name"){
            player1_score=player1_score -1;
            player2_score=player2_score +1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score=player1_score +1;
            player2_score=player2_score -1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    } 
    if (question_turn=="player1_name") {
        question_turn="player2_name";
        document.getElementById("player_question").innerHTML="Question turn -"+ player2_name;
    }
    else{
        question_turn="player1_name";
        document.getElementById("player_question").innerHTML="Question turn -"+ player1_name;
    }

    if (answer_turn=="player1_name") {
        answer_turn="player2_name";
        document.getElementById("player_answer").innerHTML="Answer turn -"+ player2_name;
    }
    else{
        answer_turn="player1_name";
        document.getElementById("player_answer").innerHTML="Answer turn -"+ player1_name;
    } 
    document.getElementById("output").innerHTML="";       
} 
function update_score(){
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score",player2_score);
}