const crossBtn = document.querySelector(".row-cross");
const tweetMainBtn = document.querySelector("#tweet");
const cardDiv = document.querySelector(".container");

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");
const charCountDiv = document.querySelector(".char-count");

const maxTweetLength = tweetInput.attributes.maxLength.value;

tweetInput.addEventListener("keyup", () => {

    checkMaxLength();

    remainingChars = Number(maxTweetLength) - tweetInput.value.length;
    renderCharCountDiv(remainingChars)

    if(tweetInput.value.length == 0){
        tweetBtn.disabled = true;
    }
    else{
        tweetBtn.disabled = false;
    }
})

function renderCharCountDiv(len){

    charCountDiv.innerText = len;

    if(len > 10){
        charCountDiv.style.color ="rgb(29, 155, 240)";
        charCountDiv.style.border = "1px solid rgb(29, 155, 240)";
    }
    else if(len <= 10 && len > 5){
        charCountDiv.style.color ="#F59E0B";
        charCountDiv.style.border = "1px solid #F59E0B";
    }
    else if(len >= 0) {
        charCountDiv.style.color ="#EF4444";
        charCountDiv.style.border = "1px solid #EF4444";
    }
}


crossBtn.addEventListener("click", () => {

    resetTweetDiv();
    cardDiv.style.display = "none";
    tweetMainBtn.style.display = "block";
})

tweetMainBtn.addEventListener("click", () => {

    console.log("tweet")
    cardDiv.style.display = "block";
    tweetMainBtn.style.display = "none";
})


function checkMaxLength(){
    if(tweetInput.value.length > maxTweetLength) {
        tweetInput.value = tweetInput.value.substring(0, maxTweetLength);
    }
}

function resetTweetDiv(){
    
    tweetInput.value ="";
    charCountDiv.innerText = maxTweetLength;
    charCountDiv.style.color ="rgb(29, 155, 240)";
    charCountDiv.style.border = "1px solid rgb(29, 155, 240)";
}


tweetInput.focus();