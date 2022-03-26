//theme btn
let page = document.querySelector('.page');
let themeBtn = document.querySelector('.theme-button');

themeBtn.onclick = function () {
    page.classList.toggle('dark-theme')
}

//comments

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentInput = document.querySelector('.comment-input');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    if (priorityButton.classList.contains('important')) {
        newComment.style.backgroundColor = 'red'
    }   else { 
        if (page.classList.contains('dark-theme')) {
            newComment.style.backgroundColor = 'black'
        }   else {
            newComment.style.backgroundColor = 'white'
        }
    }
    commentList.append(newComment);
    commentInput.value = ""; // проблема с виртуалкой в этой строке
    commentCounter.textContent = 0;
}

//char-conter for comments

let submitButton = document.querySelector('.submit-button');
let commentCounter = document.querySelector('.comment-counter');

commentInput.oninput = function () {
    let commentLength = commentInput.value.length;
    commentCounter.textContent = commentLength;
    if (commentLength > 200) {
        submitButton.disabled = true;
        commentForm.style.backgroundColor = 'red';
    }   else {
        submitButton.disabled = false;
        if (page.classList.contains('dark-theme')) {
            commentForm.style.backgroundColor = 'black';
        }   else {
            commentForm.style.backgroundColor = 'white';
        }
    }
}

//priority for comments 

let priorityButton = document.querySelector('.priority-button')

priorityButton.onclick = function () {
    priorityButton.classList.toggle('important');
    if (priorityButton.classList.contains('important')) {
        priorityButton.textContent = 'Important issue';
        priorityButton.style.backgroundColor = 'red';
    } else {
        priorityButton.textContent = 'Low priority issue';
        priorityButton.style.backgroundColor = 'white';
    }
}

//like button 

let likeButton = document.querySelector('.like-button');
let likeNumber = document.querySelector('.like-number');

likeButton.onclick = function () {
    if (likeButton.classList.contains('added')) {
        likeNumber.textContent --;
    } else {
        likeNumber.textContent ++;
    }
    likeButton.classList.toggle('added');
}

// tooltip and tooltip text

let tooltip = document.querySelector('.tooltip');
let tooltipText = document.querySelector('.toolti-text');
let tooltipClose = document.querySelector('.tooltip-close');
let tooltipButtons = document.querySelectorAll('.tooltip-button');

for (let tooltipButton of tooltipButtons) {
    tooltipButton.onclick = function () {
        tooltip.style.display = 'flex';
        tooltipText.textContent = tooltipButton.dataset.tooltipText
    }
}

tooltipClose.onclick = function () {
    tooltip.style.display = 'none';
}


// up-button

let upButton = document.querySelector('.up-button')

window.onscroll = function () {
    if (window.pageYOffset > 500) {
        upButton.style.display = 'flex'
    }   else {
        upButton.style.display = 'none'
    }
}

upButton.onclick = function () {
    window.scrollTo(0, 0);
}

//filter and news

let filter = document.querySelector('.filter');
let newsBlocks = document.querySelectorAll('.news-block');

filter.onchange = function () {
    for (let newsBlock of newsBlocks) {
        if (newsBlock.dataset.category !== filter.value && filter.value !== 'all') {
            newsBlock.style.display = 'none'
        }   else {
            newsBlock.style.display = 'block'
        }
    }
}

// poll

let pollOptions = document.querySelectorAll('.poll-option');
let pollResult = document.querySelector('.poll-result');
let pollSubmit = document.querySelector('.poll-submit');

for (let pollOption of pollOptions) {
    pollOption.onchange = function () {
        if (pollOption.dataset.poll === 'back' || pollOption.dataset.poll === 'ui') {
                pollSubmit.disabled = true; 
                pollResult.style.display = 'block';
                pollResult.textContent = 'мб выберешь другой вариант?';
                pollResult.style.color = 'red'; 
        }  else if (pollOption.dataset.poll === 'hr') { 
                pollSubmit.disabled = false;
                pollResult.style.display = 'block';
                pollResult.textContent = 'рили?';
                pollResult.style.color = 'red';
        }  else {
                pollSubmit.disabled = false;
                pollResult.style.display = 'none';
        }
    }
}

// style changers

let article = document.querySelector('.reader');
let readerColor = document.querySelector('.reader-color');
let readerBackColor = document.querySelector('.reader-backcolor');
let readerFontSize = document.querySelector('.reader-font');

readerColor.onchange = function () {
    article.style.color = readerColor.value;
}

readerBackColor.oninput = function () {
    article.style.backgroundColor = readerBackColor.value;
}

readerFontSize.oninput = function () {
    article.style.fontSize = readerFontSize.value + 'px';
}

//password type

let passwordField = document.querySelector('.password-field');
let showPassword = document.querySelector('.show-password');

showPassword.onchange = function () {
    if (showPassword.checked) {
        passwordField.type = 'text';
    }   else {
        passwordField.type = 'password'
    }
}

//security bar

securityBar = document.querySelector('.security-bad');

passwordField.oninput = function () {
    let passLength = passwordField.value.length;
    securityBar.style.width = passLength * 10 + '%';
    if (passLength <= 5) {
        securityBar.style.backgroundColor = 'red';
    }   else if (passLength > 5 && passLength <= 10) {
        securityBar.style.backgroundColor = 'gold';
    }   else {
        securityBar.style.backgroundColor = 'aqua';
    }
}