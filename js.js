window.addEventListener('DOMContentLoaded', () =>{

    let iconElement = document.getElementById("icon");
    let menuItem = document.querySelectorAll('.menu');

    iconElement.addEventListener('click', showMenu);
    menuItem.forEach((item) =>{
        item.addEventListener('click',(showMenu));
    })


function showMenu() {
    let menuElement = document.getElementById("menu");
    menuElement.classList.toggle("hidden");
}



//Slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		speed:800,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
//Animation
const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - 2* window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}

//Модальне вікно
 const dataModal = document.querySelectorAll('[data-modal]');
 const modal = document.querySelector('.form_call');
 const closeModal = document.querySelector('.close');
 const screenWindow = window.matchMedia("(min-width: 1024px)");

 if (screenWindow.matches){
    function closeCall (){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
     }
     
     dataModal.forEach(el =>{
         el.addEventListener('click', ()=>{
             modal.classList.add('show');
             modal.classList.remove('hide');
             document.body.style.overflow ='hidden';
         })
     })
     closeModal.addEventListener('click', () =>{
        closeCall ();
     })
     window.addEventListener('click', (e)=>{
        if(e.target === modal){
            closeCall ();
        }
     })
    
 }; 
 /*Calculator */
 


})
