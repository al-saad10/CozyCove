/*slide*/
const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 4000); 

// login/signup js

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// single product slider

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
  MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src;
}

// cart
// document.addEventListener('DOMContentLoaded', function () {
//   const addToCartButtons = document.querySelectorAll('.add-to-cart');

//   addToCartButtons.forEach(button => {
//       button.addEventListener('click', function (event) {
//           event.preventDefault();

//           const product = button.closest('.product');
//           const productName = product.querySelector('.description h3').textContent;
//           const productImage = product.querySelector('img').src;

//           addToCart(productName, productImage);
//       });
//   });

//   function addToCart(name, image) {
//       const cartItemsContainer = document.getElementById('cart-items');

//       const cartItem = document.createElement('div');
//       cartItem.classList.add('cart-item');

//       const imageElement = document.createElement('img');
//       imageElement.src = image;
//       imageElement.alt = name;
//       cartItem.appendChild(imageElement);

//       const nameElement = document.createElement('h3');
//       nameElement.textContent = name;
//       cartItem.appendChild(nameElement);

//       cartItemsContainer.appendChild(cartItem);
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  // Function to add a product to the cart
  function addToCart(name, image, price) {
      const cartItemsContainer = document.getElementById('cart-items');

      // Create a new row for the product
      const cartItem = document.createElement('tr');
      cartItem.innerHTML = `
          <td><img src="${image}" alt="${name}"></td>
          <td>${name}</td>
          <td>${price}</td>
          <td>1</td>
          <td>${price}</td>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
      `;

      // Append the new row to the cart
      cartItemsContainer.appendChild(cartItem);
  }

  // Example: Adding a product to the cart
  addToCart("Product Name", "product_image.jpg", "$100.00");
});
