const mainMenuEl = document.querySelector('.main-menu');
const menuBgEl = document.querySelector('.menu-bg');

// console.log(mainMenuEl);
// console.log(mainBgEl);

    mainMenuEl.addEventListener('mouseover', function(){
        menuBgEl.classList.add('on'); //마우스 올라갔을때
    });
    
    mainMenuEl.addEventListener('mouseout', function(){
        menuBgEl.classList.remove('on');//마우스 내려갔을때
    });

    menuBgEl.addEventListener('mouseover', function(){
        menuBgEl.classList.add('on');
        mainMenuEl.classList.add('on');//마우스 올라갔을때
    });

    menuBgEl.addEventListener('mouseout', function(){
        menuBgEl.classList.remove('on');
        mainMenuEl.classList.remove('on');//마우스 내려갔을때
    });

const mobileMenuEl = document.querySelector('.mobile-menu')
const closeMenuEl = document.querySelector('.close')
const mobileBoxEl = document.querySelector('.mobile-box')

    mobileMenuEl.addEventListener('click',function(){
        mobileBoxEl.classList.add('show');
    })

    closeMenuEl.addEventListener('click',function(){
        mobileBoxEl.classList.remove('show');
    })