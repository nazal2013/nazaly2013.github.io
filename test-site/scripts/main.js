var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myHeading.textContent = 'Hello World';
var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === '../test-site/images/UN.png') {
        myImage.setAttribute('src', '../test-site/images/signal.jpg');
    } else {
        myImage.setAttribute('src', '../test-site/images/signals.jpg');
    }
    
};
function setUsername() {
    var myName = prompt('Please enter your name : ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome Mr ' + myName;
    if (!localStorage.getItem('name')) {
        setUsername();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Welcome Mr ' + storedName;
    }
}

myButton.onclick = function () {
    setUsername();
}