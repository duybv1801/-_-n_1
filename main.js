var productApi = 'http://localhost:3000/products';
var userApi = 'http://localhost:3000/username';
var orderApi = 'http://localhost:3000/order';
var commentApi = 'http://localhost:3000/comments';

function start() {
  handleCreateForm();
}

start();

function handleCreateForm() {
  var btnRegister = document.getElementById('btnRegister');
  btnRegister.onclick = function() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      var userData = {
          username: username,
          password: password
      };
      var json = JSON.stringify(userData);
      localStorage.setItem(username, json);
      sessionStorage.setItem("user", json); 
      createUser(userData);
      alert("Đăng kí thành công");
  }
}

function createUser(data, callback) {
  var options = {
      method: 'POST',
      headers: {
              'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  };
  fetch(userApi, options)
      .then(function(response) {
          response.json();
      })
      .then(callback);
}




