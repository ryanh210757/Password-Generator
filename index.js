const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = [];
let password2 = [];
let pw1 = document.getElementById("password")
let pw2 = document.getElementById("password1")

function getRandomPhrase(){
   for (let i = 0; i < 16; i++){
            let randomString1 = Math.floor(Math.random() * characters.length)
            let randomString2 = Math.floor(Math.random() * characters.length)
            randomString1 = characters[randomString1]
            randomString2 = characters[randomString2]
            password1.push(randomString1)
            password2.push(randomString2)
       
   }
   
    pw1.textContent = password1.join("")
    pw2.textContent = password2.join("")
    password1.pop(password1)
}

