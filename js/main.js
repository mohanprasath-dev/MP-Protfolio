/**
 * ============================================
 * MOHAN PRASATH - PORTFOLIO JAVASCRIPT
 * Premium animations and interactions
 * ============================================
 * 
 * Technologies used:
 * - GSAP (GreenSock Animation Platform)
 * - ScrollTrigger (GSAP Plugin)
 * - Lenis (Smooth Scroll Library)
 */

// ============================================
// INITIALIZATION
// Wait for DOM and libraries to load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        // Remove loader if GSAP fails
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('loaded');
        return;
    }
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize all modules
    initLoader();
    initLenisScroll();
    initCustomCursor();
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initHorizontalScroll(); // New horizontal scroll for projects
    initParallax();
    initCounters();
    initContactForm();
    initFooter();
});

// ============================================
// LOADER ANIMATION
// Cinematic intro sequence
// ============================================

function initLoader() {
    const loader = document.getElementById('loader');
    const loaderLetters = document.querySelectorAll('.loader-letter');
    const loaderBar = document.querySelector('.loader-bar');
    
    // Create loader timeline
    const loaderTL = gsap.timeline({
        onComplete: () => {
            // Remove loader after animation
            loader.classList.add('loaded');
            // Trigger hero animations
            triggerHeroEntrance();
            // Enable scrolling
            document.body.style.overflow = '';
        }
    });
    
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Animate letters staggered entrance (using fromTo for reliability)
    loaderTL.fromTo(loaderLetters, 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        }
    );
    
    // Animate progress bar
    loaderTL.to(loaderBar, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
    }, '-=0.5');
    
    // Animate letters exit
    loaderTL.to(loaderLetters, {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.in'
    }, '+=0.3');
}

// ============================================
// LENIS SMOOTH SCROLL
// Butter-smooth scrolling experience
// ============================================

let lenis;

function initLenisScroll() {
    // Check if Lenis is available
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis not loaded, using native scroll');
        // Handle anchor links without Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        return;
    }
    
    // Initialize Lenis with configuration
    lenis = new Lenis({
        duration: 1.2,           // Duration of scroll animation
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        direction: 'vertical',   // Scroll direction
        gestureDirection: 'vertical',
        smooth: true,            // Enable smooth scroll
        smoothTouch: false,      // Disable on touch devices
        touchMultiplier: 2,      // Touch sensitivity
    });
    
    // Connect Lenis to GSAP's ticker for sync
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    // Handle anchor links with smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: -80, // Account for fixed header
                    duration: 1.5
                });
            }
        });
    });
}

// ============================================
// CUSTOM CURSOR
// Premium interactive cursor effect
// ============================================

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    // Skip on touch devices
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        gsap.to(cursorDot, {
            x: mouseX,
            y: mouseY,
            duration: 0.1
        });
    });
    
    // Animate outline with delay (trailing effect)
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        gsap.set(cursorOutline, {
            x: outlineX,
            y: outlineY
        });
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Hover effects on interactive elements (excluding project cards)
    const hoverElements = document.querySelectorAll('a, button, .skill-item, .stat-card, .timeline-content');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
    
    // Special "View" cursor for project cards
    const projectCards = document.querySelectorAll('.project-card-horizontal');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-view');
            cursor.classList.remove('cursor-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-view');
        });
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-click');
    });
}

// ============================================
// NAVIGATION
// Header scroll effects and mobile menu
// ============================================

function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navActions = document.querySelector('.nav-actions');
    
    // Header scroll effect
    ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => {
            if (self.direction === 1) {
                header.classList.add('scrolled');
            } else if (self.progress === 0) {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Animate menu items
        if (navMenu.classList.contains('active')) {
            gsap.fromTo(navLinks, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.5, 
                    stagger: 0.1, 
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
            
            // Animate action buttons on mobile
            if (window.innerWidth <= 900 && navActions) {
                gsap.fromTo(navActions, 
                    { y: 30, opacity: 0 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: 'power3.out',
                        delay: 0.6
                    }
                );
            }
        }
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu on action button click
    const actionButtons = document.querySelectorAll('.nav-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Active section highlighting (scroll spy)
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// ============================================
// HERO ANIMATIONS
// Cinematic entrance effects
// ============================================

function initHeroAnimations() {
    // Create floating particles
    createParticles();
}

function triggerHeroEntrance() {
    const heroTL = gsap.timeline({
        defaults: { ease: 'power3.out' }
    });
    
    // Animate hero title words (using fromTo for reliability)
    heroTL.fromTo('.hero-word', 
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15
        }
    );
    
    // Animate subtitle items
    heroTL.fromTo('.subtitle-item, .subtitle-divider',
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1
        },
        '-=0.6'
    );
    
    // Animate CTA button
    heroTL.fromTo('.hero-cta', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
    );
    
    // Animate scroll indicator
    heroTL.fromTo('.hero-scroll-indicator',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
    );
}

// Create floating particles for hero background
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background-color: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
        `;
        container.appendChild(particle);
        
        // Animate each particle
        gsap.to(particle, {
            y: -100 - Math.random() * 100,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: 3 + Math.random() * 4,
            repeat: -1,
            delay: Math.random() * 3,
            ease: 'none'
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// Reveal animations on scroll
// ============================================

function initScrollAnimations() {
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.fromTo(header, 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            }
        );
    });
    
    // Reveal text animation
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.fromTo(text,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: text,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            }
        );
    });
    
    // Stats cards stagger animation
    gsap.fromTo('.stat-card',
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.about-stats',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        }
    );
    
    // Skills items stagger animation
    gsap.fromTo('.skill-item',
        { y: 30, opacity: 0 },
        {
            scrollTrigger: {
                trigger: '.skills-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
        ease: 'power3.out'
    });
    
    // Note: Horizontal project cards are animated in initHorizontalScroll()
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.marker-dot');
        
        gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
        
        // Animate timeline line fill
        gsap.to(marker, {
            scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            scale: 1.3,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Animate timeline line progress
    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) {
        gsap.fromTo(timelineLine,
            { scaleY: 0, transformOrigin: 'top' },
            {
                scaleY: 1,
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 1
                },
                ease: 'none'
            }
        );
    }
    
    // Contact section animations
    gsap.utils.toArray('.contact-link, .social-link').forEach((el, index) => {
        gsap.fromTo(el,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out'
            }
        );
    });
    
    // Form groups animation
    gsap.utils.toArray('.form-group').forEach((group, index) => {
        gsap.fromTo(group,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: group,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power3.out'
            }
        );
    });
}

// ============================================
// HORIZONTAL SCROLL - PROJECTS SECTION
// Converts vertical scroll to horizontal movement
// ============================================

let horizontalScrollTrigger = null;

function initHorizontalScroll() {
    const projectsSection = document.getElementById('projects');
    const projectsWrapper = document.getElementById('projects-wrapper');
    const projectsTrack = document.getElementById('projects-track');
    const projectCards = document.querySelectorAll('.project-card-horizontal');
    const progressBar = document.getElementById('projects-progress-bar');
    const progressContainer = document.querySelector('.projects-progress');
    const counterContainer = document.querySelector('.projects-counter');
    const counterCurrent = document.getElementById('project-counter-current');
    const counterTotal = document.getElementById('project-counter-total');
    
    if (!projectsSection || !projectsTrack || projectCards.length === 0) return;
    
    // Set total project count
    if (counterTotal) {
        counterTotal.textContent = String(projectCards.length).padStart(2, '0');
    }
    
    // Check if we should enable horizontal scroll (only on larger screens)
    const isLargeScreen = () => window.innerWidth > 768;
    
    // Calculate the total scroll distance needed
    const getScrollDistance = () => {
        const trackWidth = projectsTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(0, trackWidth - viewportWidth + 200);
    };
    
    // Set section height based on scroll distance
    const setSectionHeight = () => {
        if (!isLargeScreen()) {
            projectsSection.style.height = 'auto';
            return;
        }
        const scrollDistance = getScrollDistance();
        const sectionHeight = window.innerHeight + scrollDistance;
        projectsSection.style.height = `${sectionHeight}px`;
    };
    
    // Initialize or cleanup horizontal scroll based on screen size
    const setupHorizontalScroll = () => {
        // Kill existing ScrollTrigger if any
        if (horizontalScrollTrigger) {
            horizontalScrollTrigger.kill();
            horizontalScrollTrigger = null;
            gsap.set(projectsTrack, { x: 0 });
        }
        
        if (!isLargeScreen()) {
            projectsSection.style.height = 'auto';
            if (progressContainer) progressContainer.classList.remove('active');
            if (counterContainer) counterContainer.classList.remove('active');
            return;
        }
        
        setSectionHeight();
        
        // Create horizontal scroll animation with GSAP ScrollTrigger
        horizontalScrollTrigger = ScrollTrigger.create({
            trigger: projectsSection,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: projectsWrapper,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
                if (progressContainer) progressContainer.classList.add('active');
                if (counterContainer) counterContainer.classList.add('active');
            },
            onLeave: () => {
                if (progressContainer) progressContainer.classList.remove('active');
                if (counterContainer) counterContainer.classList.remove('active');
            },
            onEnterBack: () => {
                if (progressContainer) progressContainer.classList.add('active');
                if (counterContainer) counterContainer.classList.add('active');
            },
            onLeaveBack: () => {
                if (progressContainer) progressContainer.classList.remove('active');
                if (counterContainer) counterContainer.classList.remove('active');
            },
            onUpdate: (self) => {
                // Move the track horizontally
                gsap.set(projectsTrack, { x: -getScrollDistance() * self.progress });
                
                // Update progress bar
                if (progressBar) {
                    progressBar.style.width = `${self.progress * 100}%`;
                }
                
                // Update current project counter
                if (counterCurrent) {
                    const currentIndex = Math.min(
                        Math.floor(self.progress * projectCards.length) + 1,
                        projectCards.length
                    );
                    counterCurrent.textContent = String(currentIndex).padStart(2, '0');
                }
            }
        });
    };
    
    // Initialize horizontal scroll
    setupHorizontalScroll();
    
    // Parallax effect on project images (only on large screens)
    if (isLargeScreen()) {
        projectCards.forEach((card, index) => {
            const image = card.querySelector('.project-image');
            
            if (image) {
                gsap.to(image, {
                    scrollTrigger: {
                        trigger: projectsSection,
                        start: 'top top',
                        end: () => `+=${getScrollDistance()}`,
                        scrub: 1
                    },
                    x: -50 * (index + 1) * 0.3,
                    ease: 'none'
                });
            }
        });
    }
    
    // Recalculate on resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setupHorizontalScroll();
            ScrollTrigger.refresh();
        }, 250);
    });
}

// ============================================
// PARALLAX EFFECTS
// Depth-rich layered scrolling
// ============================================

function initParallax() {
    // Hero background parallax
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        ease: 'none'
    });
    
    // Hero title parallax
    gsap.to('.hero-title', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        opacity: 0.3,
        ease: 'none'
    });
    
    // Stats cards individual parallax speeds
    gsap.utils.toArray('.stat-card').forEach(card => {
        const speed = card.dataset.speed || 1;
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: (1 - speed) * 50,
            ease: 'none'
        });
    });
    
    // Horizontal project cards - handled by initHorizontalScroll()
}

// ============================================
// COUNTERS ANIMATION
// Animated number counters
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// ============================================
// CONTACT FORM
// Form interactions and validation
// ============================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('.form-input');
    
    // Input focus animations
    inputs.forEach(input => {
        const label = input.previousElementSibling;
        
        input.addEventListener('focus', () => {
            gsap.to(label, {
                color: '#ffffff',
                duration: 0.3
            });
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                gsap.to(label, {
                    color: '#555555',
                    duration: 0.3
                });
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText.textContent;
        
        // Animate button
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
        
        // Show sending state
        btnText.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual logic)
        setTimeout(() => {
            btnText.textContent = 'Sent!';
            
            // Reset form
            form.reset();
            
            // Reset button text after delay
            setTimeout(() => {
                btnText.textContent = originalText;
            }, 2000);
            
        }, 1500);
    });
}

// ============================================
// FOOTER
// Footer interactions
// ============================================

function initFooter() {
    // Set current year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    
    // Back to top smooth scroll
    const backToTop = document.querySelector('.footer-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            lenis.scrollTo('#hero', {
                duration: 2
            });
        });
    }
}

// ============================================
// MAGNETIC BUTTON EFFECT
// Buttons follow cursor slightly
// ============================================

function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn, .project-link, .social-link');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(el, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// Initialize magnetic effect after load
window.addEventListener('load', initMagneticButtons);

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Refresh ScrollTrigger on resize
window.addEventListener('resize', debounce(() => {
    ScrollTrigger.refresh();
}, 200));

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable smooth scroll
    if (lenis) {
        lenis.destroy();
    }
    
    // Reduce GSAP animations
    gsap.globalTimeline.timeScale(5);
}

// Listen for preference changes
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        if (lenis) {
            lenis.destroy();
        }
        gsap.globalTimeline.timeScale(5);
    } else {
        initLenisScroll();
        gsap.globalTimeline.timeScale(1);
    }
});

// ============================================
// TEXT SPLITTING UTILITY
// For letter-by-letter animations
// ============================================

function splitText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    return text.split('').map(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.display = 'inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char;
        element.appendChild(span);
        return span;
    });
}

// ============================================
// HOVER TILT EFFECT
// Cards tilt slightly on hover
// ============================================

function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.project-card, .stat-card');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            gsap.to(el, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// Initialize tilt effect after load
window.addEventListener('load', initTiltEffect);

// ============================================
// INTERSECTION OBSERVER FALLBACK
// For browsers without ScrollTrigger support
// ============================================

function initIntersectionObserver() {
    if (typeof ScrollTrigger === 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal-text, .section-header, .stat-card, .skill-item, .project-card, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }
}

// ============================================
// KEYBOARD NAVIGATION
// Enhanced keyboard accessibility
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log(`
%c🚀 Mohan Prasath's Portfolio

%cBuilt with passion and precision.
Technologies: HTML5, CSS3, JavaScript, GSAP, Lenis

%cLooking to collaborate? Let's connect!

`, 
'font-size: 24px; font-weight: bold;',
'font-size: 14px; color: #888;',
'font-size: 12px; color: #666;'
);
