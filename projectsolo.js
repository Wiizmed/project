var used = Math.floor(Math.random() * 5);
var counter = 0;
var highscore = 0;


function guessMyNumber(n, upperbound) {
    counter++;
    
    
    if (counter > 3) {
        return 'You have exceeded the limit !! Please pres restart';
    }
    // else if(isNaN(n)){
    //     return "please use number"
    // }
    
    if (n > upperbound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperbound;
    } else if (n === used) {
        if (counter === 1) {
            if(highscore===counter){
              return  'Congratulations! You guessed my number on the first try! Please press restart '
            }
              else if(highscore>counter)
            highscore=counter
            return 'Congratulations! You guessed my number on the first try! New highscore !!! Please press restart '
        }
         if(highscore>counter){
            highscore=counter
            return 'You guessed my number in ' + counter + ' guesses'+ 'new highscore'+highscore+'Please press restart'
         }
        return 'You guessed my number in ' + counter + ' guesses !!! Please press restart';

    }
    
    return 'Nope! That wasn\'t it!';
}



$('document').ready(function() {
    $("#guessButton").click(function() {
        $('.hide').html('');
        var guess = parseInt($("#guessInput").val());
        var result = guessMyNumber(guess, 5); // Assuming upperbound is 5
        $("#result").text(result);
        if(!result.includes('Congratulations!') ||!result.includes('guesses') ){
            var time= setTimeout(function() {
                $('#result').html('please use number');
    
               
            }, 3000);
        }
        
        else if(result.includes('Congratulations!') || result.includes('guesses') ){
            clearTimeout(time)

        }
        setTimeout(function() {
            $('#guessInput').val('');
            
           
        }, 3000);
       
    });
});


$("#restart").click(function() {
   
    location.reload()
});


















































// function randInt(n) { 
//     var r = Math.floor(Math.random() * (n + 1)) 
//     return r 
// } 





// var used=randInt()
//  var counter=0 
//  var highscore=0 
//  function guessMynumber(n,upperbound) { 
//     used=up
//     counter++ 
//     highscore++ 
//     if (counter>20){ 
//         return 'you have exceddes the limit' 
//     } 
//     if ((n > upperbound)) { 
//         return ('Out of bounds! Please try a number between 0 and '+ upperbound) 
//     } 
    
// else if (n === used) {
//      if (counter===1){ 
//         return 'Congratulations! You guessed my number on the first try! new score now! one guess! 
//     } highscore++ 
//     return 'You guessed my number in '+(counter)+' guesses * new High score:+(highscore); 
// } 
// return 'Nope! That wasnt it!'
// }

// $("#resetButton").click(function() {
//     counter = 0; // Reset the counter
//     highscore = 0; // Reset the highscore
//     used = Math.floor(Math.random() * 5); // Generate a new random number
//     $("#result").text(""); // Clear the result
//     $("#guessInput").val(""); // Clear the input field
// });






// $(document).ready(function() {
//     $("#but1").click(function() {
//         var guess = parseInt($("#guessInput").val());
//         var result = guessMynumber(guess, 5); // Assuming upperbound is 5
//         $("#result").text(result);
       
//     });
// });

// $("Button").click(function() {
//     counter = 0; // Reset the counter
//     highscore = 0; // Reset the highscore
//     used = Math.floor(Math.random() * 5); // Generate a new random number
//     $("#result").text(""); // Clear the result
//     $("#guessInput").val(""); // Clear the input field
// });



