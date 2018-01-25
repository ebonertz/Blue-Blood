// Set shotclock to 30 second countdown
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

startButton.onclick = function() {
  if (!timer) {
    timer = setInterval(setTime, 1000);
  }
  console.log('Let the Game Begin!')
  countDown();
};

const countDown = () => {
    let remainingSeconds = 30;
    let shotClock = setInterval(function(){
      if (remainingSeconds === 0) {
      alert('Shotclock Expired'); //alert user that shotclock has expired
      clearInterval(shotClock); //stop the countdown

    } else {
      remainingSeconds --;
      $('#timer').text('Shot Clock : ' + remainingSeconds);
    }
    }, 1000)
  };

//Global Variables
let fouls = 8;
let firstFlip = true;
let secondFlip = false;
let flippedNames = [];
let flippedCards =[];
let remainingFouls = $('.fa-heart').toArray();

 $('.card').click(function() {
    if(firstFlip === true){
        $(this).addClass('flipped');
        $(this).children().removeClass('name');

        flippedNames.push($(this).children().attr('class'));
        flippedCards.push($(this));

        console.log(`${flippedNames}`);
        firstFlip = false;
    }
    else if (firstFlip === false )  {
        $(this).addClass('flipped');
        $(this).children().removeClass('name');
        flippedNames.push($(this).children().attr('class'));
        flippedCards.push($(this));

    setTimeout(function() {
        console.log(`${flippedNames}`);
        if(flippedNames[0] === flippedNames[1]){
          console.log('Thats a Match!');
        } else {
            $(flippedCards[0]).removeClass('flipped');
            $(flippedCards[0]).children().toggleClass('name');
            $(flippedCards[1]).removeClass('flipped');
            $(flippedCards[1]).children().toggleClass('name');
            fouls--;
            remainingFouls[fouls].remove();
            console.log(`Lives remaining: ${fouls}`);
            console.log('Removed one Foul');

        }

        if(fouls===0){
          alert('You Fouled Out!');
            }
        flippedNames = [];
        flippedCards = [];
        }, 1000);

        firstFlip = true;

    }; //This closes the else statement
}); //This closes the click function
