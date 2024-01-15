let buttonColors=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedPattern=[];
let level=1;
let started=false;


function nextSequence(){
    let randNum=Math.floor(4*Math.random());
    let randChosenColor=buttonColors[randNum];
    console.log(randChosenColor);
    gamePattern.push(randChosenColor);

    $("h1").text("Level "+level);
    level++;



    $("#"+randChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randChosenColor);
    
}


$(document).keydown(()=>{
    if(!started){
        nextSequence();
        started=true;
    }
})


$(".btn").click((event)=>{
    let userChosenColor=event.currentTarget.id;
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    let audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#"+currentColor).removeClass("pressed");
    },200)
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]!=gamePattern[currentLevel]){
        //wrong answer
        let audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over!, Press any key to restart")
        startOver();
    }
    else{
        //console.log("success");
        if(userClickedPattern.length==gamePattern.length){
            userClickedPattern=[];
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    }
}

function startOver(){
    gamePattern=[];
    started=false;
    level=1;
}
