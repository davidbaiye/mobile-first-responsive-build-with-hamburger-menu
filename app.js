const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   
    //Toggle nav
    burger.addEventListener('click', () => {
        //adding and removing the nav active
        nav.classList.toggle('nav-active');

        //if nav is actIve
        if(nav.classList[1] == 'nav-active'){
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        }else{
            document.body.style.position = 'static';
        }

        //Animate Links
        navLinks.forEach((link, index) => {
            //reset it, acts like a toggle
            if(link.style.animation){
                link.style.animation = '';
                link.style.opacity = '1';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
                link.style.opacity = '0';
            }
        });
    });

}

/* ANIMATED BURGER */
    const burgerAnimation = () => {
        const burger = document.querySelector('.burger');

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
        });

    }
/* END ---- ANIMATED BURGER */


const navLinkTouched = () => {
    const portfolioLink = document.querySelector('.portfolio-tapped');
    const skillsLink = document.querySelector('.skills-tapped');
    const contactLink = document.querySelector('.contact-tapped');
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');


    portfolioLink.addEventListener('click', () => {
        //close the nav
        nav.classList.toggle('nav-active'); 
        //close the burger   
        burger.classList.toggle('is-active');
        //Animate Links again to close
        navLinks.forEach((link, index) => {
            //reset it, acts like a toggle
            if(link.style.animation){
                link.style.animation = '';
                link.style.opacity = '1';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
                link.style.opacity = '0';
            }
        });

        //allow me to travel to portfolio section
        setTimeout(function() {
            //allow to scroll again
            document.body.style.position = 'static';
            //got to the id of portfolio
            document.getElementById('portfolio').scrollIntoView({
                behavior: 'smooth'
              });
        }, 500);
        
    });

    skillsLink.addEventListener('click', () => {
        //close the nav
        nav.classList.toggle('nav-active'); 
        //close the burger   
        burger.classList.toggle('is-active');
        //Animate Links again to close
        navLinks.forEach((link, index) => {
            //reset it, acts like a toggle
            if(link.style.animation){
                link.style.animation = '';
                link.style.opacity = '1';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
                link.style.opacity = '0';
            }
        });
        //allow me to travel to skills section
        setTimeout(function() {
            //allow to scroll again
            document.body.style.position = 'static';
            //got to the id of portfolio
            document.getElementById('skills').scrollIntoView({
                behavior: 'smooth'
                });
        }, 500);

    });

    contactLink.addEventListener('click', () => {
        //close the nav
        nav.classList.toggle('nav-active'); 
        //close the burger   
        burger.classList.toggle('is-active');
        //Animate Links again to close
        navLinks.forEach((link, index) => {
            //reset it, acts like a toggle
            if(link.style.animation){
                link.style.animation = '';
                link.style.opacity = '1';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
                link.style.opacity = '0';
            }
        });
        //allow me to travel to contact section
        setTimeout(function() {
            //allow to scroll again
            document.body.style.position = 'static';
            //go to the id of portfolio, smooth scrolling
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
                });
        }, 500);
    });

}

  

const app = () => {
    navSlide();
    burgerAnimation();
    navLinkTouched();

    


}

app();