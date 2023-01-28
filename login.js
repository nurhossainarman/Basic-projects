window.addEventListener('load', ()=>{
    const form = document.querySelector('#login-page');
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const user = username.value;
        const pass = password.value;
        
        if (user == "admin" && pass == "arman" ) {
            sessionStorage.setItem("key", user);
            window.location.href = "index.html";
        }
        else{
            alert("wrong username or password");
            username.value= "";
            password.value= "";
        }
    })
})
