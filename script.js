 // ================================================
        // TYPEWRITER EFFECT
        // Name banner ke liye smooth typewriter animation
        // Character by character text reveal karate hain
        // ================================================
        const typewriterText = document.getElementById('typewriterText');
        const fullName = 'DHEERAJ TIWARI4405';
        let index = 0;
        let isTyping = true;

        function typeWriter() {
            if (index < fullName.length && isTyping) {
                typewriterText.textContent += fullName.charAt(index);
                index++;
                setTimeout(typeWriter, 180); // Typing speed - 120ms per character
            } else if (index === fullName.length) {
                isTyping = false;
            }
        }

        // Start typewriter animation when page loads
        typeWriter();

        // ================================================
        // GSAP ANIMATIONS SETUP
        // Smooth animations aur scroll effects ke liye
        // ================================================
        gsap.registerPlugin(ScrollTrigger);
        
        // ================================================
        // CUSTOM CURSOR
        // Mouse cursor ko dot aur ring effect dete hain
        // Smooth follow animation ke saath
        // ================================================
        const cursorDot = document.querySelector('.cursor-center');
        const cursorOutline = document.querySelector('.cursor-ring');
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            gsap.to(cursorDot, {
                x: posX - 4,
                y: posY - 4,
                duration: 0.1
            });
            
            gsap.to(cursorOutline, {
                x: posX - 20,
                y: posY - 20,
                duration: 0.3
            });
        });
        
        // ================================================
        // ANIMATED HEADLINE
        // Hero headline ke characters ko ek-ek karke animate karate hain
        // Staggered animation ke saath smooth entry
        // ================================================
        const headline = document.getElementById('heroHeadline');
        const chars = headline.textContent.split('');
        headline.innerHTML = chars.map(char => 
            char === ' ' ? ' ' : `<span class="char-animate">${char}</span>`
        ).join('');
        
        gsap.to('.char-animate', {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: 0.3
        });
        
        // ================================================
        // SCROLL ANIMATIONS
        // Elements ko scroll ke saath fade-in aur slide animations
        // ScrollTrigger se trigger hote hain
        // ================================================
        gsap.utils.toArray('section').forEach((section, i) => {
            const elements = section.querySelectorAll('h2, .card-lift, .project-item');
            
            elements.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
        });
        
        // ================================================
        // MOBILE MENU FUNCTIONALITY
        // Mobile devices ke liye sidebar menu toggle karate hain
        // Open/close button click events handle karate hain
        // ================================================
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
        
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // ================================================
        // CONTACT FORM HANDLER
        // Form submission handle karate hain aur feedback dete hain
        // Sending -> Sent animation ke saath
        // ================================================
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
                btn.classList.add('bg-green-500');
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-500');
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
        
        // Navbar scroll effect
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('shadow-2xl');
            } else {
                nav.classList.remove('shadow-2xl');
            }
        });

        (function(){document.addEventListener("click",function(e){var a=e.target.closest("[data-product-id]");if(!a)return;e.preventDefault();var pid=a.getAttribute("data-product-id");if(pid)parent.postMessage({type:"ecto-artifact-link-click",productId:pid},"*")})})();