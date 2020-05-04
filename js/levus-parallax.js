{
  // обгортка
  const wrapper = document.querySelector('.wrapper');

  // відступ згори до паралаксу
  const marginTop = wrapper.getBoundingClientRect().top;

  // відступ до нижнього краю
  const marginBottom = wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height;

  // елементи 
  const articles = document.querySelectorAll('.wrapper article');

  // вішаємо подію "скрол"
  window.addEventListener('scroll', () => {

    // час вмикання анімації
    if (window.pageYOffset > marginTop && window.pageXOffset < marginBottom) {
      articles.forEach(article => {
        article.style.backgroundPositionY = `-${(window.pageYOffset - marginTop) / 2}px`;
      });
    }
  });
}