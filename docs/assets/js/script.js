document.addEventListener('DOMContentLoaded', () => {

    document.body.classList.add('page-loaded');

    // --- Sticky Header ---
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    const mainNav = document.getElementById('main-nav');

    const handleScroll = () => {
        const navLinks = header.querySelectorAll('nav a');
        const logoText = header.querySelectorAll('.logo-text span');
        const menuBtn = header.querySelector('#menu-btn');
        const ctaBtn = header.querySelector('a[href*="contact"]');

        if (window.scrollY > scrollThreshold) {
            header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
            header.classList.remove('bg-transparent');
            if (mainNav) {
                mainNav.classList.remove('py-5');
                mainNav.classList.add('py-3');
            }
            // Change text to dark for white background
            logoText.forEach((span, i) => {
                if (i === 0) {
                    span.classList.remove('text-white');
                    span.classList.add('text-navy-900');
                } else {
                    span.classList.remove('text-teal-400');
                    span.classList.add('text-teal-600');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('text-white', 'text-teal-400');
                link.classList.add('text-navy-900');
                if (link.classList.contains('text-teal-400') || link.href.includes(window.location.pathname.split('/').pop())) {
                    link.classList.add('text-teal-600');
                }
            });
            if (menuBtn) {
                menuBtn.classList.remove('text-white');
                menuBtn.classList.add('text-navy-900');
            }
            // CTA button stays the same when scrolled (already has correct classes)
        } else {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
            if (mainNav) {
                mainNav.classList.add('py-5');
                mainNav.classList.remove('py-3');
            }
            // Change text to white for transparent background
            logoText.forEach((span, i) => {
                if (i === 0) {
                    span.classList.remove('text-navy-900');
                    span.classList.add('text-white');
                } else {
                    span.classList.remove('text-teal-600');
                    span.classList.add('text-teal-400');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('text-navy-900', 'text-teal-600');
                link.classList.add('text-white');
                if (link.href.includes(window.location.pathname.split('/').pop())) {
                    link.classList.add('text-teal-400');
                }
            });
            if (menuBtn) {
                menuBtn.classList.remove('text-navy-900');
                menuBtn.classList.add('text-white');
            }
            // CTA button stays the same when at top (already has correct classes)
        }
    };
    window.addEventListener('scroll', handleScroll);

    // Set initial state immediately for transparent hero pages
    // Run handleScroll BEFORE page is visible to prevent flash
    requestAnimationFrame(() => {
        handleScroll();
        // Force another check after DOM is fully ready
        setTimeout(handleScroll, 10);
    });

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu && closeMenuBtn) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        const toggleMenu = () => {
            const isHidden = mobileMenu.classList.contains('translate-x-full');
            if (isHidden) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        };
        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
    }

    // --- Enhanced Scroll Reveal (IntersectionObserver) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .fade-in-up, .animated-underline, .process-line, .step-icon-animated, .check-item').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Animated Counters ---
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                const duration = 2000;
                const start = performance.now();

                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);
                    el.textContent = prefix + current.toLocaleString('fr-FR') + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = prefix + target.toLocaleString('fr-FR') + suffix;
                    }
                };
                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // --- 3D Tilt Effect ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    if (window.innerWidth > 768) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // --- Parallax on Scroll ---
    const parallaxElements = document.querySelectorAll('.parallax-img');
    const handleParallax = () => {
        parallaxElements.forEach(el => {
            const container = el.closest('.parallax-container');
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const viewH = window.innerHeight;
            if (rect.top < viewH && rect.bottom > 0) {
                const progress = (viewH - rect.top) / (viewH + rect.height);
                const offset = (progress - 0.5) * 60;
                el.style.transform = `translateY(${offset}px) scale(1.15)`;
            }
        });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax();

    // --- Magnetic Buttons ---
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    if (window.innerWidth > 768) {
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- CTA Particles ---
    const particleContainer = document.getElementById('cta-particles');
    if (particleContainer) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (4 + Math.random() * 4) + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particleContainer.appendChild(particle);
        }
    }

    // --- Portfolio Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('bg-teal-600', 'text-white'));
                filterButtons.forEach(b => b.classList.add('bg-gray-100', 'text-slate-600'));
                btn.classList.remove('bg-gray-100', 'text-slate-600');
                btn.classList.add('bg-teal-600', 'text-white');

                const filterValue = btn.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox) {
        document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = trigger.getAttribute('href') || trigger.querySelector('img').src;
                const caption = trigger.getAttribute('title') || 'Projet Jayscom';
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    // --- Service Cards Stagger Reveal ---
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        const staggerCards = servicesGrid.querySelectorAll('.service-card-stagger');
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerCards.forEach(card => {
                        const index = parseInt(card.getAttribute('data-index') || '0', 10);
                        setTimeout(() => {
                            card.classList.add('is-visible');
                        }, index * 150);
                    });
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
        staggerObserver.observe(servicesGrid);
    }

    // --- Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

});
