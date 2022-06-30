function ShowMenuOn1() {
    const want = document.getElementById("menu");
    want.innerText = "contact";
}

function ShowMenuOn2() {
    const want = document.getElementById("menu");
    want.innerText = "gallery";
}

function ShowMenuOn3() {
    const want = document.getElementById("menu");
    want.innerText = "music";
}

function ShowMenuOut() {
    const want = document.getElementById("menu");
    want.innerText = "imusgnaj";
}

function email() {
    alert('rewq30@naver.com');
}

function warning() {
    alert('antonio carlos jobim - wave \n음악을 끄려면 새로고침 해주세요.');
}

function music() {

    var audio = new Audio("./jazz.mp3");

    if(audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
    }
}
