const accordion= document.getElementsByClassName('contentBx')

for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

const label= document.getElementsByClassName('label')

for (let i=0; i<label.length; i++){
    label[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}


const inputs=document.querySelectorAll(".input")

function focusFunc(){
    let parent= this.parentNode;
    parent.classList.add("focus")
}
function blurFunc(){
    let parent= this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc)
})

document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.getElementById('contactForm');
    let confirmationPopup = document.getElementById('confirmationPopup');
    let errorPopup = document.getElementById('errorPopup');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            confirmationPopup.style.display = 'block';

            setTimeout(function () {
                confirmationPopup.style.display = 'none';
            }, 3000);
            contactForm.reset();
        } else {
            errorPopup.style.display = 'block';

            setTimeout(function () {
                errorPopup.style.display = 'none';
            }, 3000);
        }
    });

    function validateForm() {

        let nameField = document.getElementsByName('name')[0];
        let emailField = document.getElementsByName('email')[0];
        let phoneField = document.getElementsByName('phone')[0];
        let messageField = document.getElementsByName('message')[0];

        if (nameField.value.trim() === '' || emailField.value.trim() === '' || phoneField.value.trim() === '' || messageField.value.trim() === '') {
            return false;
        } else {
            return true;
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("appointmentForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const visitType = document.getElementById("visitType").value;
        const appointmentDate = document.getElementById("appointmentDate").value;
        const appointmentTime = document.getElementById("appointmentTime").value;

        alert(`Umówiłeś wizytę u weterynarza:\n\nImię i Nazwisko: ${fullName}\nTyp wizyty: ${visitType}\nData: ${appointmentDate}\nGodzina: ${appointmentTime}`);
    });
});
