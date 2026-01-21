const txtInput = document.getElementById('txtInput');
const content = document.getElementById('content');
const mainContentBox = document.getElementById('mainContentBox');
let input;
let isMobile = false;

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

  txtInput.focus();

  //This gets the height of the page from load. Only really used for mobile.
 

}

//This does nothing at the moment

function draw(){
    
}

//As we are using form, we want to prevent the default action of submitting the form so we can do other things.
document.querySelector('form').addEventListener('submit', ()=>{
  console.log('Preventing default...');
  event.preventDefault();
  if(isMobile){
    txtInput.blur();
  }
})


function changeTxt(){
  //Gets the text that was inputted into the input box
  input = txtInput.value;

  //If the browser is not a mobile device, we focus back on the keyboard so the user can type again
  if(!isMobile){
    txtInput.focus();
  }
  
  //Checks to see if there is anything in the input, if not then it doesn't do anything
  if(input != ''){

    //This takes the input and sends it to the check input function 
    checkCommand(input);
    
    // For testing
    console.log('New Text');
  }else{
    //If blank, prompt user to enter text
    content.innerHTML = 'Please enter text to continue'
  }

  //Reset the text value inside the input box to nothing
  txtInput.value = '';
}


function checkCommand(txt) {

  if(txt == 'Hello'){
    content.innerHTML = 'Hi'
  }
  else{
    //This is mainly for testing long passages of text

    // content.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales luctus urna scelerisque lacinia. Phasellus luctus consequat erat, vitae tincidunt libero sollicitudin commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis felis tortor, vel placerat dolor aliquet vitae. Curabitur feugiat nunc metus, in venenatis est varius vel. Fusce a purus consequat, condimentum nibh non, venenatis dui. Proin quis porttitor sapien. Nulla gravida pellentesque vehicula. Aenean tincidunt mattis enim non dapibus. Suspendisse potenti. Suspendisse potenti.`

    content.innerHTML = veryLongText;
  }
}

//When the keyboard on the mobile screen is active, we make a slight adjustment to the mainContent box.

txtInput.addEventListener('click', ()=> {
  
  if(isMobile){
    mainContentBox.style.maxHeight = "calc(100% - 140px)";
    txtInput.focus();
    //For testing only
    console.log('Click');
  }
})

txtInput.addEventListener('blur', ()=>{
  if(isMobile){
    //With no value, this resets to the default in the CSS.
    mainContentBox.style.maxHeight = "";
  }
})