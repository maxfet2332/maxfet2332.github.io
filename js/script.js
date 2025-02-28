document.addEventListener("DOMContentLoaded", function() {
    // Toggle мобильного меню
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", function(e) {
      navMenu.classList.toggle("active");
    });
  
    // Закрытие меню при клике вне его
    document.addEventListener("click", function(e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
      }
    });
  
    // Обработка отправки формы бронирования
    const form = document.getElementById("booking-form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
      form.reset();
    });
  
    // Корзина
    let cart = [];
    const buyButtons = document.querySelectorAll(".buy-btn");
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartToggle = document.getElementById("cart-toggle");
    const cartMenu = document.getElementById("cart-menu");
  
    buyButtons.forEach(button => {
      button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = this.getAttribute("data-price");
        addToCart(name, price);
      });
    });
  
    function addToCart(name, price) {
      cart.push({name, price});
      updateCart();
    }
  
    function updateCart() {
      // Обновление счетчика
      cartCount.textContent = cart.length;
  
      // Обновление списка товаров
      cartItems.innerHTML = "";
      if (cart.length === 0) {
        cartItems.innerHTML = "<li id='empty-cart'>Корзина пуста</li>";
      } else {
        cart.forEach((item, index) => {
          const li = document.createElement("li");
          li.innerHTML = `<span>${item.name} (${item.price} руб.)</span> <button class="remove-btn" data-index="${index}">×</button>`;
          cartItems.appendChild(li);
        });
      }
  
      // Обработка клика по кнопкам удаления
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach(btn => {
        btn.addEventListener("click", function() {
          const index = this.getAttribute("data-index");
          removeFromCart(index);
        });
      });
    }
  
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }
  
    // Toggle отображения корзины
    cartToggle.addEventListener("click", function(e) {
      cartMenu.classList.toggle("active");
    });
  
    // Закрыть корзину при клике вне ее области
    document.addEventListener("click", function(e) {
      if (!document.getElementById("cart").contains(e.target)) {
        cartMenu.classList.remove("active");
      }
    });
  
    // Обработка кнопки оформления заказа
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", function() {
      if (cart.length === 0) {
        alert("Ваша корзина пуста!");
      } else {
        alert("Оформление заказа...");
        // Здесь можно добавить логику оформления заказа
        cart = [];
        updateCart();
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    // Существующая логика (например, для навигации, корзины и пр.)
  
    // Функциональность слайдера галереи
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let sliderIndex = 0;
    const slideWidth = 350; // ширина изображения (300px) + отступ (20px)
    const totalSlides = document.querySelectorAll('.slider-track img').length;
    
    // Рассчитываем количество видимых слайдов в зависимости от ширины контейнера
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let visibleSlides = Math.floor(sliderWrapper.offsetWidth / slideWidth);
    
    // Обновляем видимые слайды при изменении размера окна
    window.addEventListener('resize', () => {
      visibleSlides = Math.floor(sliderWrapper.offsetWidth / slideWidth);
      // При необходимости можно корректировать позицию слайдера
    });
    
    const maxIndex = totalSlides - visibleSlides;
    
    nextBtn.addEventListener('click', function(){
      if (sliderIndex < maxIndex) {
        sliderIndex++;
        sliderTrack.style.transform = `translateX(-${sliderIndex * slideWidth}px)`;
      }
    });
    
    prevBtn.addEventListener('click', function(){
      if (sliderIndex > 0) {
        sliderIndex--;
        sliderTrack.style.transform = `translateX(-${sliderIndex * slideWidth}px)`;
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('review-form');
    const reviewAuthor = document.getElementById('review-author');
    const reviewText = document.getElementById('review-text');
    const reviewsList = document.getElementById('reviews-list');
  
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const author = reviewAuthor.value.trim();
      const text = reviewText.value.trim();
  
      if(author !== '' && text !== ''){
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<div class="review-author">${author}</div>
                                <div class="review-text">${text}</div>`;
        reviewsList.appendChild(reviewItem);
  
        // Очистка формы
        reviewForm.reset();
      }
    });
  });
  