// movie card click 
document.getElementById('card1').addEventListener('click', function() {
    // The link to open
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL
});
document.getElementById('card2').addEventListener('click', function() {
    // The link to open
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL
});
document.getElementById('card3').addEventListener('click', function() {
    // The link to open
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL
});
document.getElementById('card4').addEventListener('click', function() {
    // The link to open
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL
});
document.getElementById('card5').addEventListener('click', function() {
    // The link to open
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL
});



// Q&A card click

// Store the original height of .class4
let originalHeight = parseFloat(getComputedStyle(document.querySelector('.class4')).height); // Baseline height
let isExpanded = false; // Track if the box is expanded or collapsed

function toggleBoxInfo(boxId) {
    let class4 = document.querySelector('.class4');
    let boxInfo = document.querySelector(`#${boxId}`);
    let boxes_info = document.querySelector('.boxes_info');
    
    let heightChange = 30;  // The amount of vh to increase or decrease

    if (!isExpanded) {
        // Expand the box and increase the height
        class4.style.height = (heightChange+originalHeight/6) + 'vh';
        boxInfo.style.visibility = "visible";  // Make it visible
        boxInfo.style.display = "flex";
        boxInfo.style.opacity = "1";  // Fade in
        boxes_info.style.visibility = "visible";
        boxes_info.style.opacity = "1";  // Fade in
        isExpanded = true;  // Mark it as expanded
    } else {
        // Collapse the box and reset the height back to original
        isExpanded = false;  // Mark it as collapsed
        class4.style.height = heightChange+originalHeight/10 + 'vh';  // Reset to original height
        boxInfo.style.opacity = "0";  // Fade out
        boxes_info.style.opacity = "0";  // Fade out
        boxInfo.style.display = "none";
        setTimeout(() => {
            boxInfo.style.visibility = "hidden";  // Hide after fade out
            boxes_info.style.visibility = "hidden";  // Hide after fade out
        }, 500);  // Wait for the fade out transition to finish
    }
}

// Example: Event listener for a box (apply similar event listeners for other boxes)
document.getElementById('elj7tfr3').addEventListener('click', function () {
    toggleBoxInfo('box1_info');
});



    // if (!flag) {
    //     let currentHeight = parseFloat(getComputedStyle(class4).height);
    //     class4.style.height = (currentHeight ) + 'vh';
    //     boxInfo.style.display = "flex";
    //     boxes_info.style.display = "flex";
    //     boxInfo.dataset.flag = "true";  
    //     // Set flag to true
    // } else {
    //     let currentHeight = parseFloat(getComputedStyle(class4).height);
    //     class4.style.height = (currentHeight - 30) + 'vh';
    //     boxInfo.style.display = "none";
    //     boxes_info.style.display = "none";
    //     boxInfo.dataset.flag = "false";  // Set flag to false
    // }




document.getElementById('elj7tfr31').addEventListener('click', function () {
    toggleBoxInfo('box2_info');
});

document.getElementById('elj7tfr32').addEventListener('click', function () {
    toggleBoxInfo('box3_info');
});

document.getElementById('elj7tfr33').addEventListener('click', function () {
    toggleBoxInfo('box4_info');
});

document.getElementById('elj7tfr34').addEventListener('click', function () {
    toggleBoxInfo('box5_info');
});
document.getElementById('elj7tfr35').addEventListener('click', function () {
    toggleBoxInfo('box6_info');
});


// clickable sign in button

document.getElementById("sign_in_Button").addEventListener('click', function(){
    window.location.href = 'https://www.netflix.com/signup/registration?previousMode=welcome&locale=en-IN'; // Replace with your desired URL

})

// to focus on the input section on clicking the button get started

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('first_input');
    const input = document.getElementById('first_input_section');
    
    // Debugging
    button.addEventListener('click', function(){
        console.log("Button Clicked!"); // Verify the button is clicked
        input.focus();
        console.log("Input Focused!");  // Verify the input field is focused
    });
});


// making the backend of Get Started button 

document.getElementById('first_input').addEventListener('click', function() {
    var email = document.getElementById('first_input_section').value; 
    if(email !== '') { 
        window.location.href = 'https://www.netflix.com/signup/linkRegistration?locale=en-IN'; 
        document.getElementById('first_input_section').value = ''
    }
    else {
        alert('Enter Email To Get-Started');
    }
});