function changeColor(elementID) {
    const box = document.getElementById(elementID);
    box.addEventListener('click', function() {
        const allBoxes = document.querySelectorAll('.box');
        allBoxes.forEach(function(item) {
            if (item === box) {
                item.style.backgroundColor = '#FFF7C0';
            } else {
                item.style.backgroundColor = ''; 
            }
        });
    });
}

function moveCursor(input, nextFieldID) {
    if (input.value.length >= input.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    const inputLabel = document.getElementById("inputLabel");
    const inputContainer = document.getElementById("inputContainer");
    const errorContainer = document.getElementById("errorContainer");
    const inputContainerTwo=document.getElementById("inputContainerTwo");
    const title20=document.getElementById("title20");
    const errorContainerTwo=document.getElementById("errorContainerTwo");
    const inputFieldTwo=document.getElementById("inputFieldTwo");
    const inputContainerThree=document.getElementById("inputContainerThree");
    const inputLabelThree=document.getElementById("inputLabelThree");
    const field14=document.getElementById("field14");
    const inputContainerFour=document.getElementById("inputContainerFour");
    const inputLabelFour=document.getElementById("inputLabelFour");
    const Field22=document.getElementById("Field22");
    const Field23=document.getElementById("Field23");




    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        if (inputField.value.trim() === ""||inputFieldTwo.value.trim() ===""||field14.value.trim() ===""||Field22.value.trim()===""||Field23.value.trim()==="") {
            showError();
        } else {
            hideError();
            // Proceed with form submission if validation passes
            // form.submit(); // Uncomment this line to submit the form
        }
    });

    function showError() {
        inputLabel.classList.add("error");
        inputContainer.classList.add("error");
        errorContainer.classList.remove("hidden");
        title20.classList.add("error");
        inputContainerTwo.classList.add("error");
        errorContainerTwo.classList.remove("hidden");
        inputLabelThree.classList.add("error");
        inputContainerThree.classList.add("error");
        errorContainerThree.classList.remove("hidden");
        inputContainerFour.classList.add("error");



    }

    function hideError() {
        inputLabel.classList.remove("error");
        inputContainer.classList.remove("error");
        errorContainer.classList.add("hidden");
        title20.classList.remove("error");
        inputContainerTwo.classList.remove("error");
        errorContainerTwo.classList.add("hidden");
        inputLabelThree.classList.remove("error");
        inputContainerThree.classList.remove("error");
        errorContainerThree.classList.add("hidden");
        inputContainerFour.classList.remove("error");



    }
});


