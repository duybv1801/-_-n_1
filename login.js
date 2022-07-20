var productApi = 'http://localhost:3000/products';
var userApi = 'http://localhost:3000/username';
var orderApi = 'http://localhost:3000/order';
var commentApi = 'http://localhost:3000/comments';

var btnLogin = document.getElementById('btnLogin');
btnLogin.onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Vui lòng nhập username password");
    } else if (
      username == data.username &&
      password == data.password
    ) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    } else {
      alert("Đăng nhập thất bại");
    }
}