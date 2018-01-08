
const submitButton = document.getElementById("submitButton");
const inputDate = document.getElementById("inputDate");
const resultPic = document.getElementById("resultPic");

submitButton.addEventListener('click', checkDate, false);
function checkDate(){

    if (inputDate.value === "01/08"|| inputDate.value === "0108"|| inputDate.value === "01.08"){
        resultPic.src = 'img/Arel.jpg';
    } else {
        resultPic.src = 'img/MrChow.jpg';
    }
    return false;
}





/* function myFunction() {
    document.getElementById("submitButton").click();
} */