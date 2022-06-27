

var productApi = 'http://localhost:3000/products';

function start() {
    getProducts(renderProducts);
}


start();

// Functions
function getProducts(callback) {
    fetch(productApi)
       .then(function(response) {
           return response.json();
       })
       .then(callback);
}

function renderProducts(products) {
    var listProductsBlock = 
        document.querySelector('#list-products');
    var htmls = products.map(function(product) {
        return `
            
            <div class="home-product">
                <div class="grid_row">
                <div class="grid_column-2-4">
                <a class="home-product-item" href="#">
                    <div class="home-product-item_img" style="background-image: url(${product.img});"></div>
                    <h4 class="home-product-item-name">${product.name}</h4>
                    <div class="home-product-item-price">
                        <span class="home-product-item_price-old">${product.oldPrice}</span>
                        <span class="home-product-item_price-current">${product.currentPrice}</span>
                    </div>
                    <div class="home-product-item_action">
                        <span class="home-product-item_like home-product-item_like-liked">
                            <i class="home-product-item_like-icon-empty fa-brands fa-gratipay"></i>
                            <i class="home-product-item_like-icon-fill fa-solid fa-heart"></i>
                        </span>
                        <div class="home-product-item_rating">
                            <i class="home-product-item_star-gold fa-solid fa-star"></i>
                            <i class="home-product-item_star-gold fa-solid fa-star"></i>
                            <i class="home-product-item_star-gold fa-solid fa-star"></i>
                            <i class="home-product-item_star-gold fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="home-product-item_sold">${product.itemSold} Đã bán</span>
                    </div>
                    <div class="home-product-item_origin">
                        <span class="home-product-item_brand">${product.brand}</span>
                        <span class="home-product-item_origin-name">${product.originName}</span>
                    </div>
                    <div class="home-product-item_favorite">
                        <i class="fa-solid fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item_sale-off">
                        <span class="home-product-item_sale-off-percent">${product.salePercent}</span>
                        <span class="home-product-item_sale-off-label">GIẢM</span>
                    </div>
                </a>
            </div>
            
            </div>
            </div>
            
        `;
    });
    listProductsBlock.innerHTML = htmls.join('');
}
