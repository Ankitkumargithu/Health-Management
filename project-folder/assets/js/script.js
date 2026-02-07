 
const menuBtn = document.getElementById('menu-toggle');
        const nav = document.querySelector('.nav-x');

        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });