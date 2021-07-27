# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with
- Sublime Text
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
- Learnt how to make use of the event listener
- Call mulitiple functions using a function.
- Learnt how to use the eventListener to initiate a keypress on Enter event.

```js
document.getElementById("b5_value").addEventListener("click", b5_Functions);

function b5_Functions(){
  alert();
  b5_Tip();
}

custom_input.addEventListener("keypress", function(event) {
    if (event.keyCode == 13){
      alert(); 
    }
```

### Continued development

 - Apps that deals with input and manipulations 

### Useful resources

- [Stack overflow](https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box) - this helped me learn how to trigger a keyboard enter button for the custom input.
- [Stack overflow]() - They taught me how pass multiple events on a button onclick using the eventListener.
- [w3schools](w3schools.com) 


## Author

- Website - [Ugochukwu Peter Uche](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
