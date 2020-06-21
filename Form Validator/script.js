const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
      showSuccess(input);
    }
    else{
      showError(input,'Email is not Valid');
    }
}
function checkPassword(input){
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  }
  else{
    showError(input,'Password should have string and special character');
  }
}
function checkPasswordMatch(input1,input2){
   if(input1.value!== input2.value){
     showError(input2,'Passwords do not Match');
   }
}
function checkRequired(inputArr){
   inputArr.forEach(function(input){
     if(input.value.trim()=== ''){
       showError(input,`${getFieldName(input)} is Required`);
     }
     else{
       showSuccess(input);
     }
   })
}
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
  
}
function checkLength(input,min,max){
  if(input ===password){
    if(input.value.length < min){
      showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
      showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
    else {
        checkPassword(input);
      }
  }
  else{
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
  }
  else if(input.value.length>max){
    showError(input,`${getFieldName(input)} must be less than ${max} characters`)
  }
  else {
    showSuccess(input);
    }
  }
}


form.addEventListener('submit',function(e){
  e.preventDefault();
  checkRequired([username,email,password,password2]);
  checkLength(username,3,15);
  checkLength(password,6,25);
  checkLength(password2,6,25);
  checkEmail(email);
  checkPasswordMatch(password,password2);
  // if(username.value === ''){
  //   showError(username,'Username is Required')
  // }else{
  //   showSuccess(username);
  // }
  // if(email.value === ''){
  //   showError(email,'Email is Required')
  // }
  // else if(!isValidEmail(email.value)){
  //   showError(email,'Email is not valid')
  // }
  // else{
  //   showSuccess(email);
  // }
  // if(password.value === ''){
  //   showError(password,'Password is Required')
  // }else{
  //   showSuccess(password);
  // }
  // if(password2.value === ''){
  //   showError(password2,'Password2 is Required')
  // }else{
  //   showSuccess(password2);
  // }

});
