const formInput = document.getElementById('txtInput');
const textContent = document.getElementById('content');
const mainContentDiv = document.getElementById('mainContentBox');
const commandsList = ['HELLO', 'CLEAR', 'SAMPLE', 'FONTSIZE', 'USER'];
let textInput;
let isMobile = false;
let isNewText = false;
let textSplitIntoWords = [];
let textToChange, previousText;
let remainingWords = 0;
let currentWordCount = 0;

let isValidCommand = false;

let hasIntroPlayed = false;

let wordSpeed = 2;

let isAwaitingUserInput = false;
let awaitingCommand;


let username = 'user';

let veryLongText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales luctus urna scelerisque lacinia. Phasellus luctus consequat erat, vitae tincidunt libero sollicitudin commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis felis tortor, vel placerat dolor aliquet vitae. Curabitur feugiat nunc metus, in venenatis est varius vel. Fusce a purus consequat, condimentum nibh non, venenatis dui. Proin quis porttitor sapien. Nulla gravida pellentesque vehicula. Aenean tincidunt mattis enim non dapibus. Suspendisse potenti. Suspendisse potenti.
Nunc finibus nec lectus in cursus. Quisque at nibh eu sem efficitur vestibulum eu in tellus. Morbi eget ligula quam. Ut bibendum interdum nunc, nec varius nibh malesuada ac. Proin tortor eros, commodo vitae nunc a, blandit finibus felis. Maecenas ipsum ex, lacinia eget leo eu, sollicitudin vulputate libero. Duis porttitor id nibh sed egestas. Phasellus ultrices ut erat non placerat. Integer arcu nisl, porttitor ac ante sit amet, efficitur ultrices mi. Nullam tincidunt cursus varius. Duis eleifend varius ipsum et consequat. Donec et est id justo tempus semper eu eu libero.
Mauris porta vestibulum tincidunt. Vestibulum porttitor dapibus neque ut imperdiet. Nulla lectus ligula, scelerisque non dignissim ut, eleifend sed elit. In sodales sagittis ullamcorper. Fusce nec tortor laoreet, volutpat sem in, eleifend erat. Sed vel libero tellus. Vestibulum id tristique neque, nec vulputate enim. Cras vel mollis felis. Nullam ut aliquam turpis. Ut id turpis laoreet, congue lectus nec, dictum urna. Proin malesuada nisi vitae mi pretium mollis. Nunc fermentum ipsum ex, eu vulputate ante blandit quis. Cras blandit faucibus mi non aliquet. Nunc et justo faucibus, sollicitudin tortor rutrum, gravida turpis.
Etiam rutrum in urna a ultricies. Aliquam malesuada, tellus ut pulvinar porttitor, erat metus dapibus ex, sit amet volutpat elit est nec quam. Nunc fermentum nunc varius nulla porta, tempor aliquet libero consectetur. Donec vel vestibulum enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eu libero nisl. Integer ullamcorper nulla turpis, eu elementum quam tristique at. Praesent nec lacus quis diam ultrices tempor. Morbi blandit dolor nec justo rutrum, eget accumsan urna auctor. Ut mattis sodales quam, sit amet ullamcorper nunc tempor sed. Vestibulum at arcu a tellus efficitur sagittis eu at augue. Integer sit amet nisl ornare, volutpat velit eget, mattis neque. Nulla blandit, nunc id vestibulum molestie, metus orci consequat tortor, vehicula sollicitudin nulla justo sit amet est. Aliquam iaculis porttitor tincidunt. Aenean mauris magna, suscipit non blandit et, scelerisque quis sapien.`;

//This bit of code checks to see if the browser cannot do hover functions, meaning it's a mobile browser
//Found from this link https://xobyte.org/scripts/isMobile.js
if(window.matchMedia("(any-hover:none)").matches){
  isMobile = true;
}

function setup() {

  noCanvas();
  formInput.focus();

}

function draw(){

  background(0);
  
  if(isOverflow(mainContentDiv)){
    mainContentDiv.style.flexDirection = 'column-reverse';
  }

  if(!isOverflow(mainContentDiv)){
    mainContentDiv.style.flexDirection = 'column';
  }


  //Intro text
  if(!hasIntroPlayed){
    textContent.innerHTML = '';
    textToChange = `Welcome to Terminal 10, a interactive typeface sampler!
    Please enter a command to continue.`;
    isNewText = true;
    hasIntroPlayed = true;
  }

  if(isNewText){

    //This checks if there is anything in the split text variable. If not, then we split the text
    if(textSplitIntoWords == ''){
      //Pushing the formatting into it's own function.
      textSplitIntoWords = formatText(textToChange);
    }
    
    //Grabbing the previous text before we make any changes.
    previousText = textContent.innerHTML;

    //Checks if the current word count is not the same as the amount of words in the text
    if(currentWordCount != textSplitIntoWords.length){

      if (frameCount>wordSpeed*currentWordCount){
        textContent.innerHTML = previousText + ' ' + textSplitIntoWords[currentWordCount];
        currentWordCount++;
      }

    }else{

      console.log('Finished');
      currentWordCount = 0;
      textSplitIntoWords = '';
      isNewText = false;

    }
  } 
}

//As we are using form, we want to prevent the default action of submitting the form so we can do other things.
document.querySelector('form').addEventListener('submit', ()=>{
  event.preventDefault();
  if(isMobile){
    formInput.blur();
  }
})


function changeTxt(){
  
  //This is a failsafe in case the user enters something into the text box before all the text has been written.
  //This will just print the remaining words left.
  if(isNewText){
    
    //Checks how many words are remain by subtracting the current word count from the length
    remainingWords = textSplitIntoWords.length - currentWordCount;
    
    //Loops through until all the words are printed
    for(i = 0; i<remainingWords; i++){
      textContent.innerHTML = previousText + ' ' + textSplitIntoWords[i+currentWordCount];
      previousText = textContent.innerHTML;
    }
    
    //Resets all the variables back to what would happen when the text was fully written.
    currentWordCount = 0;
    textSplitIntoWords = '';
    isNewText = false;
  }

  //Gets the text that was inputted into the input box
  textInput = formInput.value;
  
  isNewText = true;
  frameCount = 0;

  //If the browser is not a mobile device, we focus back on the keyboard so the user can type again
  if(!isMobile){
    formInput.focus();
  }
  
  //Checks to see if there is anything in the input, if not then it doesn't do anything
  if(textInput != ''){
    if(textContent.innerHTML == ''){
      textContent.innerHTML = username + ' >'  + textInput + '<br>';
    }else{
      textContent.innerHTML = textContent.innerHTML + '<br>'+username+' > ' + textInput + '<br>';
    }
    
    //This takes the input and sends it to the check input function
    

    //This checks to see if something is waiting for user input, in which it will run the command that is waiting for user input
    if(isAwaitingUserInput){
      checkCommand(awaitingCommand);
    }else{
      textInput = textInput.toUpperCase();
      checkCommand(textInput);
    }
  
  }else{
    //If blank, prompt user to enter text
    textContent.innerHTML = textContent.innerHTML + '<br>';
    textToChange = 'ERROR: Please enter text to continue'
  }

  //Reset the text value inside the input box to nothing
  formInput.value = '';

  //This forces the main content box to scroll to the bottom of the text
  mainContentDiv.scrollTop = mainContentDiv.scrollHeight;

}


//Making a function that formats the text to be displayed
function formatText(txt) {

  let unformattedText = txt;
  let lines = unformattedText.split('\n');
  let linesText = '';
  let formattedText = [];
  
  //Adding line breaks so that the text isn't just a single block.
  if(lines.length != 1){
    for (i = 0; i<lines.length; i++){
      if(i != lines.length-1){
        lines[i] = lines[i] + '<br>';
        linesText = linesText + lines[i];
      }else{
        linesText = linesText + lines[i];
      }
    }
  }else{
    linesText = txt;
  }

  formattedText = linesText.split(' ');
  return formattedText;
}

function checkCommand(txt) {

  console.log(txt);
  isValidCommand = false;

  if(isAwaitingUserInput){
    this[awaitingCommand]();
  }else{
    for(i=0; i<commandsList.length; i++){
      if(commandsList[i] == txt){
        let currentFunction=commandsList[i];
        this[currentFunction]();
        isValidCommand = true;
        break;
      }
    }
    if(!isValidCommand){
      textToChange = 'No command found, please try again';
    }
  }
  
}

//When the keyboard on the mobile screen is active, we make a slight adjustment to the mainContent box.

formInput.addEventListener('click', ()=> {
  
  if(isMobile){
    mainContentDiv.style.maxHeight = "calc(100% - 140px)";
    formInput.focus();
    //For testing only
    // console.log('Click');
  }
})

formInput.addEventListener('blur', ()=>{
  if(isMobile){
    //With no value, this resets to the default in the CSS.
    mainContentDiv.style.maxHeight = "";
  }
})

//This checks to see if there is overflow in the main content and returns either true or false.
function isOverflow(x){
  return x.scrollHeight > x.clientHeight;
}

//----//

//These are the list of commands available. There's probably an easier way of doing this.

function HELLO(){
  textToChange = 'Hi';
}

function SAMPLE(){
  textToChange = veryLongText;
}

function CLEAR(){
  textContent.innerHTML = '';
  isNewText = false;
}

function USER(){
  if(isAwaitingUserInput){
    username = textInput;
    textToChange = 'Hello, ' + username;
    isAwaitingUserInput = false;
  }else{
    textToChange = 'Please enter a username';
    awaitingCommand = 'USER';
    isAwaitingUserInput = true;
  }
}


//This function is taking user input and making the font size what the user wants
function FONTSIZE(){

  //There is a check to see if we are already waiting for an input to change the font size
  if(isAwaitingUserInput){
    
    //Converts the text into an integer. This also rounds it if the user enters a decimal/float
    textInput = parseInt(textInput);

    //Checks to see if the input is a integer
    if(Number.isInteger(textInput)){

      //There are limits to what can be displayed. This is just some random numbers
      if(textInput < 8 || textInput > 124){
        if(textInput < 8){
          textToChange = 'Input too small, please try again';
        }
        if(textInput > 124){
          textToChange = 'Input too big, please try again';
        }
      }else{

        //Converts the integer back into a string so it can be used to change the font size of the text content box
        textInput = textInput.toString() + 'px';

        //Changes the font size to what the user inputs
        textContent.style.fontSize = textInput;

        //Prints a message on success
        textToChange = 'Font size changed to '+ textInput;

        //Since we successfully completed the function, we are no longer waiting for user input, so we reset
        isAwaitingUserInput = false;
      }
    }else{

      //This tells the user what was entered is not an integer
      textToChange = 'Input is not a integer, please try again';
    }

  //This will run when the command is initally called, prompting the user for input.
  //This also sets the waiting command so the user doesn't have to enter it again.
  }else{
    textToChange = 'Please enter font size between 8px and 124px you wish to change the text to. Please note decimals will round to the nearest whole number';
    awaitingCommand = 'FONTSIZE';
    isAwaitingUserInput = true;
  }
  
}