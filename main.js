document.addEventListener('DOMContentLoaded', init);

var inputName;
var inputEmail;
var pass;
var confirmPass;
var selectedGender;

function init(){
inputName = document.querySelector('#inputName');
inputEmail = document.querySelector('#inputEmail');
pass = document.querySelector('#pass');
confirmPass = document.querySelector('#confirmPass');
selectedGender = document.querySelector('#selectedGender');
btnSubmit = document.querySelector('#btnSubmit');
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    checkErrors();
});
}

function checkErrors() {
    var errorList = [];

    if (inputName.hasAttribute('required') && inputName.value.length == 0) {
        errorList.push('Fill the field "User name"');}
    else if (inputName.hasAttribute('pattern')) {
        var patternName = inputName.getAttribute('pattern');
        var reg = new RegExp(patternName);
        if (!reg.test(inputName.value.toUpperCase())) {
            errorList.push('User name is not valid');
        };
    };

    if (inputEmail.hasAttribute('required') && inputEmail.value.length == 0) {
        errorList.push('Fill the field "Email"');}
    else if (inputEmail.hasAttribute('pattern')) {
        var patternMail = inputEmail.getAttribute('pattern');
        var regMail = new RegExp(patternMail);
        if (!regMail.test(inputEmail.value)) {
            errorList.push('Mail is not valid');
        }; 
    };

    if (pass.hasAttribute('required') && pass.value.length == 0) {
        errorList.push('Fill the field "Password"');}
    else if (pass.hasAttribute('pattern')) {
        var patternPass = pass.getAttribute('pattern');
        var regPass = new RegExp(patternPass);
            if (!regPass.test(pass.value)) {
            errorList.push('Password is not valid');
            if (pass.value != confirmPass.value && confirmPass.value.length != 0) {
                errorList.push('Passwords do not match');
            };
        };
    };

    if (selectedGender.hasAttribute('required') && selectedGender.value.length == 0) {
        errorList.push('Select gender');
    };

    showErrors(errorList)

};

function showErrors(list) {
    if (list.length > 0) {
        errorBlock = document.querySelector('.error-list');
        for (var i = 0; i < list.length; i++) {
            let errorItem = document.createElement('li');
            errorItem.className = 'li-class';
            errorItem.innerHTML = list[i];
            errorBlock.appendChild(errorItem);
        };
        }
    else alert("Your data from form sended");

}

