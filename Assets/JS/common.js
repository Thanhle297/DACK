function dangxuat() {
  localStorage.setItem("IsLogin", "false");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
  let islogin = localStorage.getItem("IsLogin");
  if (islogin === "true") {
    document.getElementById("btn-login").style.display = "none";
  } else {
    document.getElementById("btn-logout").style.display = "none";
  }
});
