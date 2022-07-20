var productApi = 'http://localhost:3000/products';
var userApi = 'http://localhost:3000/username';
var orderApi = 'http://localhost:3000/order';
var commentApi = 'http://localhost:3000/comments';

function start() {

}

start();

var btnBuy = document.getElementById('buy');

btnBuy.onclick = function() {
    alert("Mua hàng thành công. Chờ nhận hàng sau 5-7 ngày")
}

var btnAdd = document.getElementById('addCart');

btnAdd.onclick = function() {
    alert("Đã thêm vào giỏ hàng");
}

