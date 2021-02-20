const btn = document.getElementById("btn").addEventListener("click" , function(event){
const password1 = document.getElementById("password1").value
const password2 = document.getElementById("password2").value
    if (password1 !== password2){
        event.preventDefault()
        alert("password dont match")
    } else {
        
        console.log('sou eklepsa to pass')
    }
})