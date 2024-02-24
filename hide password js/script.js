 function changeType() {

    const passwordInput = document.getElementById("password");
    
    const eyeBtn = document.getElementById("eyeBtn");
    
    if (passwordInput.getAttribute("type") === "password") {
    
        passwordInput.setAttribute("type", "text");
    
        eyeBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`
 
        eyeBtn.style.fontSize ="30px"

    }
    
    else {
    
        passwordInput.setAttribute("type", "password");
    
        eyeBtn.innerHTML = `<i class="fa-solid fa-user-secret"></i>`
    
        eyeBtn.style.fontSize ="30px"

    }

}
