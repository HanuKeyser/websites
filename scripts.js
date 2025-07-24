// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('max-h-96');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-y-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-y-0');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = 'auto';
        } else {
            // Open menu
            mobileMenu.classList.remove('max-h-0', 'opacity-0', 'scale-y-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100', 'scale-y-100');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-y-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-y-0');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            if (mobileMenu.classList.contains('max-h-96')) {
                mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-y-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-y-0');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Handle escape key for mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('max-h-96')) {
            mobileMenu.classList.remove('max-h-96', 'opacity-100', 'scale-y-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'scale-y-0');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});

// Story modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const storyCard = document.getElementById('storyCard');
    const storyModal = document.getElementById('storyModal');
    const closeStoryModal = document.getElementById('closeStoryModal');

    storyCard.addEventListener('click', function() {
        storyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeStoryModal.addEventListener('click', function() {
        storyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    storyModal.addEventListener('click', function(e) {
        if (e.target === storyModal) {
            storyModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Client Portal modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const clientPortalBtn = document.getElementById('clientPortalMainBtn');
    const clientPortalModal = document.getElementById('clientPortalModal');
    const closeClientPortalModal = document.getElementById('closeClientPortalModal');

    clientPortalBtn.addEventListener('click', function() {
        clientPortalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeClientPortalModal.addEventListener('click', function() {
        clientPortalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    clientPortalModal.addEventListener('click', function(e) {
        if (e.target === clientPortalModal) {
            clientPortalModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Client Portal form submission
    const clientPortalForm = document.getElementById('clientPortalForm');
    clientPortalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(clientPortalForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const projectReference = formData.get('projectReference');
        
        // Create mailto link
        const subject = encodeURIComponent('Project Status Request - ' + projectReference);
        const body = encodeURIComponent(`Hi Hanu,

I would like to request an update on my project status.

Name: ${name}
Email: ${email}
Project Reference: ${projectReference}

Please send me an update on the current progress of my project.

Thank you!`);
        
        const mailtoLink = `mailto:hanu@hanu.co.za?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Close modal
        clientPortalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Reset form
        clientPortalForm.reset();
    });
});

// Service modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    const serviceModal = document.getElementById('serviceModal');
    const closeModal = document.getElementById('closeModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalIconSvg = document.getElementById('modalIconSvg');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalService = document.getElementById('modalService');
    const modalSubmitBtn = document.getElementById('modalSubmitBtn');

    // Service configurations
    const serviceConfigs = {
        'Web Design & Development': {
            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
            gradient: 'linear-gradient(to bottom right, #1e9bd5, #7cd6ff)',
            title: 'Website Design & Development',
            subtitle: 'Let\'s create a website that converts visitors into customers!',
            buttonText: 'Start My Website Project'
        },
        'Social Media Management': {
            icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
            gradient: 'linear-gradient(to bottom right, #ec343e, #ff6f76)',
            title: 'Social Media Management',
            subtitle: 'Ready to make your brand the main character on social media?',
            buttonText: 'Let\'s Go Viral Together'
        },
        'Logo Design': {
            icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z',
            gradient: 'linear-gradient(to bottom right, #fed121, #fbbf24)',
            title: 'Logo & Brand Design',
            subtitle: 'Let\'s create a logo that leaves a lasting impression!',
            buttonText: 'Design My Brand Identity'
        },
        'SEO Optimization': {
            icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
            gradient: 'linear-gradient(to bottom right, #4ade80, #16a34a)',
            title: 'SEO Optimization',
            subtitle: 'Ready to dominate search results and get found by your ideal customers?',
            buttonText: 'Boost My Search Rankings'
        },
        'E-commerce Solutions': {
            icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M17 17a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z',
            gradient: 'linear-gradient(to bottom right, #8b5cf6, #a78bfa)',
            title: 'E-commerce Solutions',
            subtitle: 'Let\'s build an online store that turns browsers into buyers!',
            buttonText: 'Start Selling Online'
        },
        'Content Marketing': {
            icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
            gradient: 'linear-gradient(to bottom right, #6366f1, #4f46e5)',
            title: 'Content Marketing',
            subtitle: 'Ready to tell your brand story in a way that converts?',
            buttonText: 'Create Compelling Content'
        }
    };

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const config = serviceConfigs[service];
            
            if (config) {
                // Update modal content
                modalIconSvg.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${config.icon}"></path>`;
                modalIcon.style.background = config.gradient;
                modalTitle.textContent = config.title;
                modalSubtitle.textContent = config.subtitle;
                modalService.value = service;
                modalSubmitBtn.textContent = config.buttonText;
                modalSubmitBtn.style.background = config.gradient;
                
                // Show modal
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeModal.addEventListener('click', function() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Service form submission
    const serviceForm = document.getElementById('serviceForm');
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(serviceForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const service = formData.get('service');
        
        // Create mailto link
        const subject = encodeURIComponent('New Service Request: ' + service);
        const body = encodeURIComponent(`Hi Hanu,

I'm interested in your ${service} service.

Name: ${name}
Email: ${email}

Project Details:
${message}

Looking forward to hearing from you!

Best regards,
${name}`);
        
        const mailtoLink = `mailto:hanu@hanu.co.za?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        // Close modal
        serviceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Reset form
        serviceForm.reset();
    });
});

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        `;
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate form
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            showFormFeedback('Please fill in all fields.', 'error');
            resetSubmitButton();
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormFeedback('Please enter a valid email address.', 'error');
            resetSubmitButton();
            return;
        }
        
        // Create mailto link
        const mailtoSubject = encodeURIComponent(subject);
        const body = encodeURIComponent(`Hi Hanu,

${message}

Best regards,
${name}
${email}`);
        
        const mailtoLink = `mailto:hanu@hanu.co.za?subject=${mailtoSubject}&body=${body}`;
        
        // Simulate processing time for better UX
        setTimeout(() => {
            window.location.href = mailtoLink;
            showFormFeedback('Email client opened! Your message is ready to send.', 'success');
            contactForm.reset();
            resetSubmitButton();
        }, 1000);
    });
    
    function resetSubmitButton() {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
    
    function showFormFeedback(message, type) {
        // Remove existing feedback
        const existingFeedback = contactForm.querySelector('.form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = `form-feedback p-4 rounded-lg mb-4 ${type === 'error' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`;
        feedback.innerHTML = `
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${type === 'error' ? 
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>' :
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
                    }
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        // Insert feedback before submit button
        submitBtn.parentNode.insertBefore(feedback, submitBtn);
        
        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.remove();
                }
            }, 5000);
        }
    }
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Cookie notification functionality
document.addEventListener('DOMContentLoaded', function() {
    const cookieNotification = document.getElementById('cookieNotification');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');
    const closeCookies = document.getElementById('closeCookies');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    
    if (!cookieChoice) {
        // Show cookie notification after 2 seconds
        setTimeout(() => {
            cookieNotification.classList.remove('translate-y-full', 'opacity-0');
            cookieNotification.classList.add('translate-y-0', 'opacity-100');
        }, 2000);
    }
    
    // Accept cookies
    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'accepted');
        hideCookieNotification();
    });
    
    // Decline cookies
    declineCookies.addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'declined');
        hideCookieNotification();
    });
    

    
    function hideCookieNotification() {
        cookieNotification.classList.remove('translate-y-0', 'opacity-100');
        cookieNotification.classList.add('translate-y-full', 'opacity-0');
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Video error handling
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('error', function() {
            // Hide video and show fallback background
            this.style.display = 'none';
            this.parentElement.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)';
        });
    });
});

// Theme toggle functions for portfolio cards
function toggleSimpleTheme(button) {
    const card = button.closest('.card');
    const preview = card.querySelector('.simple-light, .simple-dark');
    
    if (preview.classList.contains('simple-light')) {
        // Switch to dark theme
        preview.classList.remove('simple-light');
        preview.classList.add('simple-dark');
        
        // Update all elements with simple-light class to simple-dark
        const elements = card.querySelectorAll('.simple-light');
        elements.forEach(el => {
            el.classList.remove('simple-light');
            el.classList.add('simple-dark');
        });
    } else {
        // Switch to light theme
        preview.classList.remove('simple-dark');
        preview.classList.add('simple-light');
        
        // Update all elements with simple-dark class to simple-light
        const elements = card.querySelectorAll('.simple-dark');
        elements.forEach(el => {
            el.classList.remove('simple-dark');
            el.classList.add('simple-light');
        });
    }
}

function toggleCorporateTheme(button) {
    const card = button.closest('.card');
    const preview = card.querySelector('.corporate-light, .corporate-dark');
    
    if (preview.classList.contains('corporate-light')) {
        // Switch to dark theme
        preview.classList.remove('corporate-light');
        preview.classList.add('corporate-dark');
        
        // Update all elements with corporate-light class to corporate-dark
        const elements = card.querySelectorAll('.corporate-light');
        elements.forEach(el => {
            el.classList.remove('corporate-light');
            el.classList.add('corporate-dark');
        });
    } else {
        // Switch to light theme
        preview.classList.remove('corporate-dark');
        preview.classList.add('corporate-light');
        
        // Update all elements with corporate-dark class to corporate-light
        const elements = card.querySelectorAll('.corporate-dark');
        elements.forEach(el => {
            el.classList.remove('corporate-dark');
            el.classList.add('corporate-light');
        });
    }
}

function toggleCreativeTheme(button) {
    const card = button.closest('.card');
    const preview = card.querySelector('.creative-light, .creative-dark');
    
    if (preview.classList.contains('creative-light')) {
        // Switch to dark theme
        preview.classList.remove('creative-light');
        preview.classList.add('creative-dark');
        
        // Update all elements with creative-light class to creative-dark
        const elements = card.querySelectorAll('.creative-light');
        elements.forEach(el => {
            el.classList.remove('creative-light');
            el.classList.add('creative-dark');
        });
    } else {
        // Switch to light theme
        preview.classList.remove('creative-dark');
        preview.classList.add('creative-light');
        
        // Update all elements with creative-dark class to creative-light
        const elements = card.querySelectorAll('.creative-dark');
        elements.forEach(el => {
            el.classList.remove('creative-dark');
            el.classList.add('creative-light');
        });
    }
}

function toggleEcommerceTheme(button) {
    const card = button.closest('.card');
    const preview = card.querySelector('.ecommerce-light, .ecommerce-dark');
    
    if (preview.classList.contains('ecommerce-light')) {
        // Switch to dark theme
        preview.classList.remove('ecommerce-light');
        preview.classList.add('ecommerce-dark');
        
        // Update all elements with ecommerce-light class to ecommerce-dark
        const elements = card.querySelectorAll('.ecommerce-light');
        elements.forEach(el => {
            el.classList.remove('ecommerce-light');
            el.classList.add('ecommerce-dark');
        });
    } else {
        // Switch to light theme
        preview.classList.remove('ecommerce-dark');
        preview.classList.add('ecommerce-light');
        
        // Update all elements with ecommerce-dark class to ecommerce-light
        const elements = card.querySelectorAll('.ecommerce-dark');
        elements.forEach(el => {
            el.classList.remove('ecommerce-dark');
            el.classList.add('ecommerce-light');
        });
    }
}

  (function() {
    function c() {
      var b = a.contentDocument || a.contentWindow.document;
      if (b) {
        var d = b.createElement('script');
        d.innerHTML = "window.__CF$cv$params={r:'963a58a5935e73b5',t:'MTc1MzI2NDk4OS4wMDAwMDA='};" +
          "var a=document.createElement('script');" +
          "a.nonce='';" +
          "a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';" +
          "document.getElementsByTagName('head')[0].appendChild(a);";
        b.getElementsByTagName('head')[0].appendChild(d);
      }
    }
    if (document.body) {
      var a = document.createElement('iframe');
      a.height = 1;
      a.width = 1;
      a.style.position = 'absolute';
      a.style.top = 0;
      a.style.left = 0;
      a.style.border = 'none';
      a.style.visibility = 'hidden';
      document.body.appendChild(a);
      if ('loading' !== document.readyState) {
        c();
      } else if (window.addEventListener) {
        document.addEventListener('DOMContentLoaded', c);
      } else {
        var e = document.onreadystatechange || function() {};
        document.onreadystatechange = function(b) {
          e(b);
          if ('loading' !== document.readyState) {
            document.onreadystatechange = e;
            c();
          }
        }
      }
    }
  })();