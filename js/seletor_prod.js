document.addEventListener('DOMContentLoaded', function() {
    var drop = document.querySelector(".drop");
    var dropdown = document.querySelector(".dropdown");
    var animationFrameId;
    var opacity = 0;
  
    var fadeInDropdown = function() {
      dropdown.style.display = "block";
  
      var fadeIn = function() {
        opacity += 0.02;
        dropdown.style.opacity = opacity;
  
        if (opacity < 1) {
          animationFrameId = requestAnimationFrame(fadeIn);
        }
      };
  
      fadeIn();
    };
  
    var fadeOutDropdown = function() {
      var fadeOut = function() {
        opacity -= 0.02;
        dropdown.style.opacity = opacity;
  
        if (opacity > 0) {
          animationFrameId = requestAnimationFrame(fadeOut);
        } else {
          dropdown.style.display = "none";
        }
      };
  
      fadeOut();
    };
  
    drop.addEventListener("mouseover", fadeInDropdown);
    drop.addEventListener("mouseleave", fadeOutDropdown);
  });
  
  
  
  const openShopping = document.querySelector(".shopping"),
        closeShopping = document.querySelector(".closeShopping"),
        body = document.querySelector("body"),
        list= document.querySelector(".list"),
        listCard = document.querySelector(".listCard"),
        total = document.querySelector(".total"),
        quantity = document.querySelector(".quantity")
  
  
  openShopping.addEventListener("click", () => {
      body.classList.add("active");
  })
  
  closeShopping.addEventListener("click", () => {
      body.classList.remove("active")
  })
  
  let products = [
      {
          "id": 1,
          "name": "Iphone 15 Pro Max 1",
          "image":"15pro.png",
          "price": 10000
      },
      {
          "id": 2,
          "name": "Iphone 14 Pro",
          "image":"14pro.png",
          "price": 5200
      },
      {
          "id": 3,
          "name": "Iphone 13 Pro Max",
          "image":"13pro.png",
          "price": 2400
      },
      
  ]
  
  
  let listCards = [];
  
  const initApp = () => {
      products.forEach((value, key) => {
          let newDiv = document.createElement("div");
          newDiv.classList.add("item");
          newDiv.innerHTML = `
              <img src = "assets/${value.image}">
              <div class = "title">${value.name}</div>
              <div class="price">${value.price.toLocaleString()}</div>
              <button onclick = "addToCard(${key})">Add To Card</button>
          `;
          list.appendChild(newDiv)
      })
  }
  
  initApp()
  
  
  const addToCard = key => {
      if(listCards[key] == null) {
          listCards[key] = JSON.parse(JSON.stringify(products[key]));
          // console.log(listCards);
          listCards[key].quantity = 1;
          // console.log(listCards[key].quantity);
      }
  
      reloadCard()
  }
  
  const reloadCard = () => {
      listCard.innerHTML = "";
      let count = 0;
      let totalPrice= 0;
  
      listCards.forEach((value, key) => {
          totalPrice = totalPrice + value.price
          count = count + value.quantity;
  
          if(value != null) {
              let newDiv = document.createElement("li");
              newDiv.innerHTML = `
                  <div><img src = "assets/${value.image}"></div>
                  <div class = "cardTitle">${value.name}</div>
                  <div class = "cardPrice">${value.price.toLocaleString()}</div>
  
                  <div>
                      <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                      <div class = "count">${value.quantity}</div>
                      <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                  </div>
              `
              listCard.appendChild(newDiv)
          }
  
          total.innerText = totalPrice.toLocaleString();
          quantity.innerText = count;
      })
  }
  
  
  const changeQuantity = (key, quantity) => {
      if(quantity == 0) {
          delete listCards[key]
      }
      else {
          listCards[key].quantity = quantity;
          listCards[key].price = quantity * products[key].price
      }
      reloadCard()
  }