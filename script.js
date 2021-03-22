// your code here

// DATA는 이미 작성된 트윗을 표시합니다.

console.log(DATA)
let date = new Date();
let dateFormat = date.format();

// let addSpanTime = document.createElement("span");
// let addLi = document.createElement("li"); // <li> 생성
// let addDivUsername = document.createElement('div'); // username이 들어갈 <div> 생성
// let addAUsername = document.createElement("a");
// let addDivComments = document.createElement("div");

let inputUsername = document.querySelector("#input-name");
let inputMessage = document.querySelector("#input-message");
const inputDiv = document.querySelector("#input_div");
let writtenCommentsSpot = document.querySelector("#writtenCommentsSpot");


let goBackBtn = document.querySelector("#go-back-button");
let refreshBtn = document.querySelector("#refresh");
let tweetBtn = document.querySelector("#tweet_btn");

(function wroteCommentsList() {

    for(var i = DATA.length-1; i >= 0; i--) {
        const addLiwrote = document.createElement("li");
        const addDivWroteUser = document.createElement("div");
        const addAWroteUser = document.createElement("a");
        const addUlWroteTime = document.createElement("ul");
        const addDivWroteComments = document.createElement("div");
        const wroteUserNode = document.createTextNode(DATA[i].user);
        const wroteTimeNode = document.createTextNode(DATA[i].created_at);
        const wroteCommentsNode = document.createTextNode(DATA[i].message);
        writtenCommentsSpot.appendChild(addLiwrote);
        addLiwrote.appendChild(addDivWroteUser); 
        addDivWroteUser.appendChild(addAWroteUser);
        addAWroteUser.appendChild(wroteUserNode);
        addDivWroteUser.appendChild(addUlWroteTime);
        addUlWroteTime.appendChild(wroteTimeNode);
        addLiwrote.appendChild(addDivWroteComments);
        addDivWroteComments.appendChild(wroteCommentsNode);        
        addLiwrote.className = "comments-li";
        addAWroteUser.className = "username";
        addUlWroteTime.className = "createdAt";
        addDivWroteComments.className = "comment";
    }
   
})();

refreshBtn.addEventListener("click", function(event) {
    console.log("refresh");
    checkNewTweets();
});

goBackBtn.addEventListener("click", function(event) {
    console.log("goback");
    goBack();
});

tweetBtn.addEventListener("click", function(event){
    console.log("tweet")
    createNewTweet();
});


function goBack() {
    var aTagUsername = document.getElementsByTagName("a");
    for(var i = 0; i < aTagUsername.length; i++) {
        if(event.target.text !== aTagUsername[i].text) {
            aTagUsername[i].closest("li").style.display = "block";
        }
    }
    goBackBtn.style.display = "none";
    refreshBtn.style.display = "block";
}

function createNewTweet() {
    let usernameValue = inputUsername.value; // 입력한 username 값
    let messageValue = inputMessage.value; // 입력한 text 값
    if(inputUsername.value === "" || inputMessage.value === "") {
        alert("Username 과 Message를 입력해주세요");
        return;
    }
    const addDivTime = document.createElement("div");
    const addLi = document.createElement("li"); // <li> 생성
    const addDivUsername = document.createElement("div"); // username이 들어갈 <div> 생성
    const addAUsername = document.createElement("a");
    const addDivComments = document.createElement("div"); // comments가 들어갈 <div> 생성

    const username = document.createTextNode(usernameValue); // usernameValue를 노드로
    const comments = document.createTextNode(messageValue); // textValue를 노드로
    const commentTime = document.createTextNode(new Date().format());

    addDivTime.className = "createdAt";
    addLi.className = "comments-li"; // 생성한 li에 class 적용
    addDivUsername.className = "username"; // username이 들어갈 <div>의 class이름
    addDivComments.className = "comment" // comments가 들어갈 <div>의 class이름
    writtenCommentsSpot.appendChild(addLi); // 코멘트 div에 <li> 자식 추가
    addLi.appendChild(addDivUsername); // <li> 밑에 <div class="username"> 
    addDivUsername.appendChild(addAUsername);
    addAUsername.appendChild(username); 
    addDivUsername.appendChild(addDivTime);
    addDivTime.appendChild(commentTime);
    addLi.appendChild(addDivComments); // <li> 밑에 <div class = "comments">
    addDivComments.appendChild(comments); // <li> <div class = "comments"> 밑에 comments node 추가
    writtenCommentsSpot.insertBefore(addLi, writtenCommentsSpot.childNodes[0]); // 새로운 코멘트 추가
    var addNewCommentsObj = {}
    addNewCommentsObj.user = usernameValue;
    addNewCommentsObj.message = messageValue;
    addNewCommentsObj.created_at = new Date().format();
    DATA.push(addNewCommentsObj);
    inputUsername.value = "";
    messageValue.value = "";
    console.log(DATA);
    filtering();
    
}

function checkNewTweets() {
    let writtenCommentsSpot = document.querySelector("#writtenCommentsSpot");
    DATA.push(generateNewTweet());
    const addUlTime = document.createElement("ul");
    const addLi = document.createElement("li"); // <li> 생성
    const addDivUsername = document.createElement("div"); // username이 들어갈 <div> 생성
    const addAUsername = document.createElement("a");
    const addDivComments = document.createElement("div"); // comments가 들어갈 <div> 생성
    let commentTime = document.createTextNode(new Date().format());
    
    let usernameValue = DATA[DATA.length-1].user; // username 값
    let textValue = DATA[DATA.length-1].message; // 입력한 text 값

    let username = document.createTextNode(usernameValue); // usernameValue를 노드로
    var comments = document.createTextNode(textValue); // textValue를 노드로
    writtenCommentsSpot.appendChild(addLi); // 코멘트 div에 <li> 자식 추가
    addLi.appendChild(addDivUsername); // <li> 밑에 <div class="username"> 
    addDivUsername.appendChild(addAUsername);
    addAUsername.appendChild(username);   
    addDivUsername.appendChild(addUlTime);
    addUlTime.appendChild(commentTime);
    addLi.appendChild(addDivComments); // <li> 밑에 <div class = "comments">
    addDivComments.appendChild(comments); // <li> <div class = "comments"> 밑에 comments node 추가   
    addUlTime.className = "createdAt";
    addLi.className = "comments-li"; // 생성한 li에 class 적용
    addDivUsername.className = "username"; // username이 들어갈 <div>의 class이름
    addDivComments.className = "comment" // comments가 들어갈 <div>의 class이름 
    writtenCommentsSpot.insertBefore(addLi, writtenCommentsSpot.childNodes[0]);
    filtering();
}

function filtering() {
    let aTagUsername = document.querySelectorAll("a");
    for(var i = 0; i < aTagUsername.length; i++) {
        aTagUsername[i].onclick = function(event) { 
            refreshBtn.style.display = "none";
            goBackBtn.style.display = "block";
            for(var j = 0; j < aTagUsername.length; j++) {
                if(event.target.text !== aTagUsername[j].text) {
                    aTagUsername[j].closest("li").style.display = "none";
                }
            }
        }
    }
}


function printComments() {
    DATA.forEach(printComment);
}

function printComment(comment) {
    let commentElement = makeCommentElement(comment);
    readingArea.appendChild(commentElement);
}


// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());
