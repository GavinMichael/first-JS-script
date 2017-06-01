function play(){

  //Generates the random number the user will finally guess
  var rand = Math.random() * 100;

  //The decimals are trimmed off with Math.floor()
  rand = Math.floor(rand);

  //Add one to keep the range between 1 and 100
  rand = rand + 1;

  //tries variable used to store the number to attempts/ guesses
  var tries = 1;

  //checker function being called after all the above is done
  checker();

  /*
    Here lives the meat
    */
    function checker(){

      //Initial prompt to the user and the user input is stored in guess
      guess = prompt('I am thinking of a number between 0 - 100.\nGuess what I am thinking!');

      //guess is parsed to check if NaN
      guess = parseInt(guess);


      if (isNaN(guess)) {
          // If user input is cancel or if user enters abc instead of 123, script ends
          alert('Not interested? Ok Bye!');

        } else if (guess != rand){
        //checks if guess is larger than or smaller than the number 
        
        //increments the number of tries/ guesses
        tries++;
        
        if (guess < rand){
           //if the guess is small than the random
           
           alert('Nope, ' + guess + ' is too small.\nGuess again.');
           
           //recursive function
           checker()
           
         } else if (guess > rand){
           //if the guess if larger than the random
           
           alert('Nope, ' + guess + ' is too large.\nGuess again.');
           
           //recursive function
           checker()
           
         } 

       } else if (guess == rand){
        //if the user guesses the correct number
        
        if (tries == 1){
          //if some freak gets guesses it the very first try, i want the grammer to be correct - '1 try'
          alert('Yes! That is correct! \nIt took you ' + tries + ' try for you to guess the number');
          
        } else {

          //'2 tries'
          alert('Yes! That is correct! \nIt took you ' + tries + ' tries for you to guess the number');
          
        }
      } 
  }
}
