// NAVBAR
    const navbar = document.querySelector('nav');
    const sticky = navbar.offsetTop;
    const heightNav = navbar.clientHeight;    
    const heightAboutUs = document.getElementById('aboutUs').offsetTop - heightNav;
    const heightFieldOfWork = document.getElementById('fieldOfWork').offsetTop - heightNav;
    const heightContact = document.getElementById('contact').offsetTop - heightNav;

window.onscroll = () => {
    const scrollValue = window.scrollY;
// Sticky nav bar
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky');
    }
// Change active status on nav item
const heightAboutUs = document.getElementById('aboutUs').offsetTop - heightNav;
    const heightFieldOfWork = document.getElementById('fieldOfWork').offsetTop - heightNav;
    const heightContact = document.getElementById('contact').offsetTop - heightNav;

    [...document.querySelectorAll('nav ul li')].filter(item => item.classList.remove('active'));
    if(scrollValue < heightAboutUs) {       
        document.querySelector('.home').classList.add('active');
    }
    else if(scrollValue< heightFieldOfWork) {
        document.querySelector('.aboutUs').classList.add('active');
    }
    else if(scrollValue< heightContact) {
        document.querySelector('.fieldOfWork').classList.add('active');
    }
    else {
        document.querySelector('.contact').classList.add('active');
    }
}
// on nav click scroll page to clicked content

document.querySelectorAll('nav ul li').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const nameClass = this.className;
        const posSection = document.getElementById(nameClass);
        window.scrollTo({
            behavior: 'smooth',
            top: (posSection.offsetTop - heightNav),
        });
    });
});

//navbar collapse handle 
document.querySelector('.navbtn').addEventListener('click', () => {
    const ulList =document.querySelector('nav ul');
    ulList.classList.toggle('collapse');
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('click', () => {
            ulList.classList.remove('collapse');
        })
    })
})

//Footer contact form 

document.querySelector('.contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('działa')
})