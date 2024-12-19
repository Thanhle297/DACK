function dangnhap() {
  localStorage.setItem("IsLogin", "true");
  localStorage.setItem("currentUser",JSON.stringify(userData));
  window.location.href = "index.html"; 
}

function dangxuat() {
  localStorage.setItem("IsLogin", "false");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html"; 
}

// document.addEventListener("DOMContentLoaded", function () {
//   let islogin = localStorage.getItem("IsLogin");
//   if (islogin === "true") {
//     document.getElementById("btn-login").style.display = "none";
//   } else {
//     document.getElementById("btn-logout").style.display = "none";
//   }
// });

// update
document.addEventListener("DOMContentLoaded", function () {
  let isLogin = localStorage.getItem("IsLogin");
  if (isLogin === "true") {
      let currentUser = localStorage.getItem("currentUser");
      if (!currentUser) {
          localStorage.setItem("IsLogin", "false"); // Reset trạng thái nếu không có người dùng hợp lệ
          window.location.href = "index.html"; // Điều hướng về trang đăng nhập
      } else {
          document.getElementById("btn-login").style.display = "none";
      }
  } else {
      document.getElementById("btn-logout").style.display = "none";
  }
});
