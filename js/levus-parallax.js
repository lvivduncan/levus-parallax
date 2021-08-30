{
  // обгортка
  const parallax = document.querySelector('.levus-parallax');

  if (parallax != null) {

    // відступ згори від батьківського елемента (у нашому випадку -- body) до паралаксу
    const offsetTop = parallax.offsetTop;

    // елементи 
    const articles = document.querySelectorAll('.levus-parallax picture');

    // вішаємо подію "скрол"
    window.addEventListener('scroll', () => {

      // розмір вікна
      const hightWindow = document.documentElement.clientHeight;

      // відстань прокрутки
      const scroll = window.pageYOffset;

      articles.forEach(article => {

        // час вмикання анімації (коли розмір видимого вікна + прокрутка більша за відступ до блока)
        if (hightWindow + scroll > offsetTop) {

          // при прокрутці picture отримує зсув
          const offset = Math.round((hightWindow + scroll - offsetTop) / 3);

          article.style.transform = `translateY(-${offset}px)`;
        } else {

          // видаляємо стилі
          article.removeAttribute('style');
        }

      });

    });
  }
}