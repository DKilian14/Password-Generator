//Array to hold all possible characters
//button to generate 4 random password options
//display password options
// ability to let user set password length
//1-click copy/paste to the clipboard
//      --hint: use <input type="text"> to display the password options

//93 characters total
const rawChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;"<,>.?/\''
const chars = rawChars.split("")
let potential_passwords = ['','','','']
let passOptions = 4
const passConfirm = document.getElementById('pass-confirm')
const passDisplay = document.getElementById('pass-display')


function render(chosenPass){
  passConfirm.innerHTML= "Password copied to clipboard! Selected password is below:"
  passDisplay.innerHTML = chosenPass.innerHTML

}


function passwordGen(){
  let passLength = document.querySelector('input').value
  for (let j = 0; j<passOptions; j++){
    for (let i = 0; i<passLength; i++){
    potential_passwords[j]+=chars[Math.floor(Math.random()*chars.length)]
    }
  }
  let pass1 = document.getElementById('pass1-el')
  let pass2 = document.getElementById('pass2-el')
  let pass3 = document.getElementById('pass3-el')
  let pass4 = document.getElementById('pass4-el')

  pass1.textContent = potential_passwords[0]
  pass2.textContent = potential_passwords[1]
  pass3.textContent = potential_passwords[2]
  pass4.textContent = potential_passwords[3]
  passLength=0
  potential_passwords = ['','','','']
}

function copyPass(passId){
  let copiedPass = document.getElementById(passId)
  navigator.clipboard.writeText(copiedPass.textContent)
  render(copiedPass)

}
