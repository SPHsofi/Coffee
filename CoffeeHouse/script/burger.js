document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.full-menu');
    const nav = document.querySelector('.full-nav a');

    burger.addEventListener('click', function () {
        burger.classList.toggle('cross');
    });

    burger.addEventListener('click', function () {
        menu.classList.toggle('slide');
    })

    nav.addEventListener('click', function() {
      menu.classList.remove('slide');
      burger.classList.remove('cross');
    })
  });

