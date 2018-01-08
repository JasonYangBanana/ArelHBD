
const submitButton = document.getElementById("submitButton");
let inputDate = document.getElementById("inputDate");
let resultPic = document.getElementById("resultPic");

submitButton.addEventListener('click', checkDate, false);
function checkDate(){

    if (inputDate.value === "01/08"|| inputDate.value === "0108"|| inputDate.value === "01.08"){
        var resultPic = document.getElementById('resultPic');
        resultPic.src = 'img/Arel.jpg';
        resultPic.res = 'img/Arel.jpg';
    } else {
        var resultPic = document.getElementById('resultPic');
        resultPic.src = 'img/MrChow.jpg';
    }
    return false;
}





/* function myFunction() {
    document.getElementById("submitButton").click();
} */