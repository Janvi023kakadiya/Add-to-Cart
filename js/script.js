document.addEventListener('DOMContentLoaded', () => {
  const products = [
      { thumbnail: "images/img.1.jpg", id: 1, name: 'Essence Mascara Lash Princess', price: 9.99 },
      { thumbnail: "images/img.2.jpg", id: 2, name: 'Eyeshadow Palette with Mirror', price: 19.99 },
      { thumbnail: "images/img.3.jpg", id: 3, name: 'Powder Canister', price: 14.99 },
      { thumbnail: "images/img.4.jpg", id: 4, name: 'Red Lipstick', price: 12.99 },
      { thumbnail: "images/img.5.jpg", id: 5, name: 'Red Nail Polish', price: 8.99 },
      { thumbnail: "images/img.6.jpg", id: 6, name: 'Calvin Klein CK One', price: 49.99 },
      { thumbnail: "images/img.7.jpg", id: 7, name: 'Chanel Coco Noir Eau De', price: 129.99 },
      { thumbnail: "images/img.8.jpg", id: 8, name: 'Dior J adore', price: 89.99 },
      { thumbnail: "images/img.9.jpg", id: 9, name: 'Dolce Shine Eau de', price: 69.99 },
      { thumbnail: "images/img.10.jpg", id: 10, name: 'Gucci Bloom Eau de', price: 79.99 },
      { thumbnail: "images/img.11.jpg", id: 11, name: 'Annibale Colombo Bed', price: 1899.99 },
      { thumbnail: "images/img.12.jpg", id: 12, name: 'Annibale Colombo Sofa', price: 2499.99 },
      { thumbnail: "images/img.13.jpg", id: 13, name: 'Bedside Table African Cherry', price: 299.99 },
      { thumbnail: "images/img.14.jpg", id: 14, name: 'Knoll Saarinen Executive Conference Chair', price: 499.99 },
      { thumbnail: "images/img.15.jpg", id: 15, name: 'Wooden Bathroom Sink With Mirror', price: 799.99 },
      { thumbnail: "images/img.16.jpg", id: 16, name: 'Apple', price: 1.99 },
      { thumbnail: "images/img.17.jpg", id: 17, name: 'Beef Steak', price: 12.99 },
      { thumbnail: "images/img.18.jpg", id: 18, name: 'Cat Food', price: 8.99 },
      { thumbnail: "images/img.19.jpg", id: 19, name: 'Chicken Meat', price: 9.99 },
      { thumbnail: "images/img.20.jpg", id: 20, name: 'Cooking Oil', price: 4.99 },
      { thumbnail: "images/img.21.jpg", id: 21, name: 'Cucumber', price: 1.49 },
      { thumbnail: "images/img.22.jpg", id: 22, name: 'Dog Food', price: 10.99 },
      { thumbnail: "images/img.23.jpg", id: 23, name: 'Eggs', price: 2.99 },
      { thumbnail: "images/img.24.jpg", id: 24, name: 'Fish Steak', price: 14.99 },
      { thumbnail: "images/img.25.jpg", id: 25, name: 'Green Bell Pepper', price: 1.29 },
      { thumbnail: "images/img.26.jpg", id: 26, name: 'Green Chili Pepper', price: 0.99 },
      { thumbnail: "images/img.27.jpg", id: 27, name: 'Honey Jar', price: 6.99 },
      { thumbnail: "images/img.28.jpg", id: 28, name: 'Ice Cream', price: 5.49 },
      { thumbnail: "images/img.29.jpg", id: 29, name: 'Juice', price: 3.99 },
      { thumbnail: "images/img.30.jpg", id: 30, name: 'Kiwi', price: 2.99 },
  ];

  const viewCart = document.getElementById('viewCart');
  const cartCount = document.getElementById('cart-count');

  const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);
  };

  const addToCart = (product) => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
  };

  const createProductElement = (product) => {
      const productElement = document.createElement('div');
      productElement.className = 'col-12 col-md-6 col-lg-3 mb-4';
      productElement.innerHTML = `
          <div class="card">
              <img src="${product.thumbnail}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                  <button class="btn btn-primary add-to-cart">Add to Cart</button>
                  <a href="product.html?id=${product.id}" class="btn btn-primary add-to-cart">View</a>
              </div>
          </div>
      `;
      productElement.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
      return productElement;
  };
  products.forEach(product => viewCart.appendChild(createProductElement(product)));
  updateCartCount();
});
