const block = document.querySelector('.block')
const click_login = document.querySelector('.login');
const click_register = document.querySelector('.register');
const wrapper_login = document.querySelector('.wrapper_login');
const wrapper_register = document.querySelector('.wrapper_register');

// khởi tạo sự kiện cho ô đăng ký
click_register.addEventListener('click', () => { // ():call back sử dụng around funtion 
    block.classList.add('active');
    wrapper_login.classList.add('close')
    wrapper_register.classList.remove('close')

});

// khởi tạo sự kiện cho ô đăng nhập
click_login.addEventListener('click', () => {
    block.classList.remove('active');
    wrapper_login.classList.remove('close')
    wrapper_register.classList.add('close')
});

// thiết lập tài khoản admin liên kết localStorage
var admin = {
    username: 'admin1',
    password: '1',
    role:'admin'
}
var adminData = JSON.stringify(admin);
localStorage.setItem('admin1', adminData);

// thiết lập sự kiện đăng ký tài khoản 
document.getElementById('register-box').addEventListener('submit', function (event) {
    event.preventDefault();
    let usernameElm = document.querySelector('#us-register').value;
    let passwordElm = document.querySelector('#pw-register').value;
    let cfPasswordElm = document.querySelector('#cfpw').value;

    if (passwordElm != cfPasswordElm) {
        alert('Password does not match. Please try again!')
        return;
    }

    let user = localStorage.getItem(usernameElm)
    if (user != null) {
        alert('Username already exists. Please try again!')
        return;
    }

    user = {
        username: usernameElm,
        password: passwordElm,
        role: 'user'
    }

    let userData = JSON.stringify(user);
    localStorage.setItem(usernameElm, userData)

    // let countAcc = Number(localStorage.getItem('accountNumber'))
    // countAcc += 1
    // localStorage.setItem('accountNumber', countAcc)

    alert('Register success!')
    window.location.href = "login.html";
})

document.getElementById('login-box').addEventListener('submit', function (event) {
    event.preventDefault();
    let usernameElm = document.querySelector('#us-login').value;
    let passwordElm = document.querySelector('#pw-login').value;
    let user = localStorage.getItem(usernameElm)

    if (user == null) {
        alert('Account does not exist. Please try again!');
        return;
    }
    
    let userData = JSON.parse(user)
    if (passwordElm != userData.password) {
        alert('Incorrect Password. Please try again!');
        return;
    }

    localStorage.setItem('IsAdmin',userData.role ==='admin')
    localStorage.setItem('IsLogin', 'true')
    localStorage.setItem('IsManager',userData.role==='manager')
    localStorage.setItem('currentUser', userData.username) 
    
    if(userData.role ==='admin'){
        alert('Welcome,admin!');
    }

    if(userData.role === 'manager'){
        alert('Welcome,manager')
    }
    
    window.location.href = "index.html";
})