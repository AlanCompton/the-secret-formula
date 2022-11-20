let alertForm = document.querySelector('#alertForm');
let alertInput = document.querySelector('#alertInput');
let sandwichForm = document.querySelector('#sandwichForm');
let ingredients = document.querySelectorAll("#sandwichForm .ingredients");

let appointment = document.querySelector('#appointment');
let date = document.querySelector('#date');
let stylist = document.querySelector('#hairStylist');
let long = document.querySelector('#long');
let short = document.querySelector('#short');
let hairLength = '';

let account = document.querySelector('#account');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confPassword = document.querySelector('#confPassword');


// Alerter
alertForm.addEventListener('submit',function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
});

// Sandwich Builder
for(let item of ingredients){
    console.log(item);
};

sandwichForm.addEventListener('submit',function(event){
    event.preventDefault();

    let newStr = "";

    for(let i = 0;i < ingredients.length;i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `;
        };
    };

    console.log(newStr);
    alert(`Your sandwich contains: ${newStr}`);
});

// Haircut Appointment Scheduler
appointment.addEventListener('submit',function(event){
    event.preventDefault();

    if(long.checked === true){
        hairLength = "long";
    }else if(short.checked === true){
        hairLength = "short";
    };

    alert(`Your appointment is scheduled for ${date.value} and your stylist will be ${hairStylist.value} for ${hairLength} hair.`);
});

// Create Account
account.addEventListener('submit',function(event){
    event.preventDefault;

    if(password.value === confPassword.value){
        alert(`Your account has successfully been created. Your username is ${username.value} connected to the email ${email.value}`);
    }else if(password.value !== confPassword.value){
        alert('Your passwords do not match!');
    };
});