if (window.matchMedia('(max-width: 768px)')) {
    const menuBurger = document.querySelector('.header__burger');
    const menuList = document.querySelector('.header__menu');
    menuBurger.addEventListener('click', () => {
        if (menuBurger.classList.contains('_active')) {
            menuBurger.classList.remove('_active');
            menuList.classList.remove('_active');
        } else {
            menuBurger.classList.add('_active');
            menuList.classList.add('_active');
        }
        menuList.addEventListener('click', e => {
            if(e.target !== e.currentTarget) {
                menuBurger.classList.remove('_active');
                menuList.classList.remove('_active');
            }
        })

    })
}