document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    document.querySelector('header').insertBefore(navToggle, navLinks);

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('nav-links-active');
    });

    // Smooth scrolling
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('nav-links-active'); // Close nav on click (mobile)
        });
    });
}); 

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    titles.forEach(title => {
        observer.observe(title);
    });
});