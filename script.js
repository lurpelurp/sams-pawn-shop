/**
 * Sam's Pawn Shop - Enhanced JavaScript
 * Advanced functionality for 9.5/10 rating website
 */

// ===== GLOBAL VARIABLES =====
let currentReviewIndex = 0;
let reviewInterval;
let isHighContrastMode = false;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sam\'s Pawn Shop - Enhanced JavaScript Loaded');
    
    // Initialize all features
    initializeAccessibility();
    initializeFormValidation();
    initializeGoogleReviewsCarousel();
    initializeSmoothScrolling();
    initializeBackToTop();
    initializeCookieConsent();
    initializeLazyLoading();
    initializeAnalytics();
    initializeHighContrastMode();
    initializeTawkToFallback();
    initializeScrollAnimations();
    initializeVideoPlayer();
    initializeEnhancedHoverEffects();
    
    // Performance monitoring
    monitorPerformance();
});

// ===== ACCESSIBILITY FEATURES =====
function initializeAccessibility() {
    // Skip to content functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Enhanced focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // ARIA live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
}

// ===== HIGH CONTRAST MODE =====
function initializeHighContrastMode() {
    const toggle = document.querySelector('.high-contrast-toggle');
    if (!toggle) return;

    // Check for saved preference
    const savedMode = localStorage.getItem('highContrastMode');
    if (savedMode === 'true') {
        enableHighContrastMode();
    }

    toggle.addEventListener('click', function() {
        if (isHighContrastMode) {
            disableHighContrastMode();
        } else {
            enableHighContrastMode();
        }
    });

    // Keyboard shortcut (Ctrl + H)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            toggle.click();
        }
    });
}

function enableHighContrastMode() {
    document.documentElement.setAttribute('data-theme', 'high-contrast');
    isHighContrastMode = true;
    localStorage.setItem('highContrastMode', 'true');
    
    const toggle = document.querySelector('.high-contrast-toggle');
    if (toggle) {
        toggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
        toggle.setAttribute('aria-label', 'Disable high contrast mode');
    }
    
    announceToScreenReader('High contrast mode enabled');
}

function disableHighContrastMode() {
    document.documentElement.removeAttribute('data-theme');
    isHighContrastMode = false;
    localStorage.setItem('highContrastMode', 'false');
    
    const toggle = document.querySelector('.high-contrast-toggle');
    if (toggle) {
        toggle.innerHTML = '<i class="fas fa-eye"></i>';
        toggle.setAttribute('aria-label', 'Enable high contrast mode');
    }
    
    announceToScreenReader('High contrast mode disabled');
}

// ===== GOOGLE REVIEWS CAROUSEL =====
function initializeGoogleReviewsCarousel() {
    const reviews = document.querySelectorAll('.review-item');
    if (reviews.length === 0) return;

    // Show first review
    showReview(0);

    // Auto-rotate reviews every 4 seconds
    reviewInterval = setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    }, 4000);

    // Pause on hover
    const carousel = document.querySelector('.reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(reviewInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            reviewInterval = setInterval(() => {
                currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
                showReview(currentReviewIndex);
            }, 4000);
        });
    }
}

function showReview(index) {
    const reviews = document.querySelectorAll('.review-item');
    reviews.forEach((review, i) => {
        if (i === index) {
            review.classList.add('active');
        } else {
            review.classList.remove('active');
        }
    });
}

// ===== ENHANCED FORM VALIDATION =====
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });

        // Form submission
        form.addEventListener('submit', handleFormSubmission);
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name || field.id;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error states
    clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${getFieldLabel(field)} is required`;
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation
    if (fieldName.includes('phone') && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // ZIP code validation
    if (fieldName.includes('zip') && value) {
        const zipRegex = /^\d{5}(-\d{4})?$/;
        if (!zipRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid ZIP code';
        }
    }

    // Show error if invalid
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        showFieldSuccess(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }

    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);

    // Announce to screen reader
    announceToScreenReader(message);
}

function showFieldSuccess(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
}

function clearFieldError(field) {
    field.classList.remove('is-invalid', 'is-valid');
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function getFieldLabel(field) {
    const label = field.parentNode.querySelector('label');
    return label ? label.textContent.replace('*', '').trim() : 'This field';
}

async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Validate all fields
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (!isValid) {
        announceToScreenReader('Please correct the errors in the form');
        return false;
    }

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
        // Simulate form submission (replace with actual endpoint)
        await simulateFormSubmission(form);
        
        // Success
        showSuccessMessage(form, 'Thank you! Your message has been sent successfully.');
        form.reset();
        
        // Track form submission
        trackEvent('form_submission', {
            form_name: form.id || 'contact_form',
            form_type: 'contact'
        });
        
    } catch (error) {
        // Error
        showErrorMessage(form, 'Sorry, there was an error sending your message. Please try again.');
        console.error('Form submission error:', error);
    } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

function showSuccessMessage(form, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success mt-3';
    alertDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    form.appendChild(alertDiv);
    
    announceToScreenReader(message);
    
    // Remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

function showErrorMessage(form, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger mt-3';
    alertDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    form.appendChild(alertDiv);
    
    announceToScreenReader(message);
    
    // Remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

async function simulateFormSubmission(form) {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 95% success rate for demo
            if (Math.random() > 0.05) {
                resolve();
            } else {
                reject(new Error('Network error'));
            }
        }, 1500);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
                
                // Focus target for accessibility
                target.focus();
            }
        });
    });
}

// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Focus on main content
        const main = document.querySelector('main');
        if (main) {
            main.focus();
        }
    });
}

// ===== COOKIE CONSENT =====
function initializeCookieConsent() {
    if (localStorage.getItem('cookieConsent')) return;

    const consentHtml = `
        <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1055;">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <i class="fas fa-cookie-bite text-primary me-2"></i>
                    <strong class="me-auto">Cookie Policy</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <p class="mb-2">We use cookies to enhance your experience and analyze site traffic.</p>
                    <div class="d-flex gap-2">
                        <button type="button" class="btn btn-primary btn-sm" onclick="acceptCookies()">
                            Accept All
                        </button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" onclick="declineCookies()">
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', consentHtml);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Remove toast
    const toast = document.querySelector('.toast-container');
    if (toast) {
        toast.remove();
    }
    
    // Initialize analytics
    initializeAnalytics();
    
    announceToScreenReader('Cookies accepted');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    
    // Remove toast
    const toast = document.querySelector('.toast-container');
    if (toast) {
        toast.remove();
    }
    
    announceToScreenReader('Cookies declined');
}

// ===== ENHANCED LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load image with srcset for responsive images
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    img.classList.add('loaded');
                    
                    // Remove placeholder animation
                    const wrapper = img.closest('.card-img-wrapper');
                    if (wrapper) {
                        wrapper.classList.add('image-loaded');
                    }
                    
                    observer.unobserve(img);
                    
                    // Track image load event
                    trackEvent('image_loaded', {
                        image_src: img.src,
                        image_location: getElementLocation(img)
                    });
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
            }
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('loaded');
        });
    }
}

// ===== ANALYTICS =====
function initializeAnalytics() {
    if (localStorage.getItem('cookieConsent') !== 'accepted') return;

    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
        });
    }

    // Track page views
    trackEvent('page_view', {
        page_title: document.title,
        page_url: window.location.href
    });

    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-accent');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_text: button.textContent.trim(),
                button_location: getElementLocation(button)
            });
        });
    });
}

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }

    // Console logging for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`📊 Analytics Event: ${eventName}`, parameters);
    }
}

function getElementLocation(element) {
    const sections = ['hero', 'services', 'how-it-works', 'testimonials', 'faq', 'contact'];
    for (const section of sections) {
        if (element.closest(`#${section}`)) {
            return section;
        }
    }
    return 'unknown';
}

// ===== TAWK.TO FALLBACK =====
function initializeTawkToFallback() {
    // Check if Tawk.to loaded successfully
    setTimeout(() => {
        if (typeof Tawk_API === 'undefined' || !Tawk_API.isLoaded()) {
            showFallbackChat();
        }
    }, 5000);
}

function showFallbackChat() {
    const fallbackChat = document.getElementById('fallback-chat');
    if (fallbackChat) {
        fallbackChat.style.display = 'block';
        
        const toggle = document.getElementById('fallback-chat-toggle');
        const window = document.getElementById('fallback-chat-window');
        const close = document.getElementById('fallback-chat-close');
        
        if (toggle) {
            toggle.addEventListener('click', () => {
                window.classList.toggle('d-none');
            });
        }
        
        if (close) {
            close.addEventListener('click', () => {
                window.classList.add('d-none');
            });
        }
    }
}

// ===== PERFORMANCE MONITORING =====
function monitorPerformance() {
    // Core Web Vitals
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('🎯 LCP:', lastEntry.startTime);
            
            if (lastEntry.startTime < 2500) {
                trackEvent('performance_good', { metric: 'lcp', value: lastEntry.startTime });
            } else {
                trackEvent('performance_needs_improvement', { metric: 'lcp', value: lastEntry.startTime });
            }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                console.log('⚡ FID:', entry.processingStart - entry.startTime);
            });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            console.log('📐 CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log('⏱️ Page Load Time:', loadTime);
        
        trackEvent('page_load_time', { load_time: loadTime });
    });
}

// ===== UTILITY FUNCTIONS =====
function announceToScreenReader(message) {
    const liveRegion = document.querySelector('[aria-live="polite"]');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('🚨 JavaScript Error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('🚨 Unhandled Promise Rejection:', e.reason);
    trackEvent('promise_rejection', {
        reason: e.reason
    });
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

// ===== PWA INSTALL PROMPT =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install prompt
    showInstallPrompt();
});

function showInstallPrompt() {
    const promptHtml = `
        <div class="toast-container position-fixed bottom-0 start-0 p-3" style="z-index: 1055;">
            <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <i class="fas fa-download text-primary me-2"></i>
                    <strong class="me-auto">Install App</strong>
                    <button type="button" class="btn-close" onclick="dismissInstallPrompt()" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <p class="mb-2">Install Sam's Pawn Shop app for quick access!</p>
                    <button type="button" class="btn btn-primary btn-sm" onclick="installApp()">
                        Install
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', promptHtml);
}

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ App installed');
                trackEvent('pwa_installed');
            }
            deferredPrompt = null;
        });
    }
    dismissInstallPrompt();
}

function dismissInstallPrompt() {
    const prompt = document.querySelector('.toast-container');
    if (prompt) {
        prompt.remove();
    }
}

// ===== EXPORT FOR GLOBAL ACCESS =====
window.SamsPawnShop = {
    enableHighContrastMode,
    disableHighContrastMode,
    trackEvent,
    installApp
};

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Add staggered animations for cards
                if (entry.target.classList.contains('row')) {
                    const cards = entry.target.querySelectorAll('.service-card, .testimonial-card, .blog-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-fade-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe sections and cards
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .blog-card');
    
    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));
}

// ===== VIDEO PLAYER =====
function initializeVideoPlayer() {
    const videoContainer = document.querySelector('.video-container');
    if (!videoContainer) return;

    const video = videoContainer.querySelector('.feature-video');
    const playButton = videoContainer.querySelector('.play-button');
    const overlay = videoContainer.querySelector('.video-overlay');

    if (playButton && video) {
        playButton.addEventListener('click', function() {
            video.play();
            overlay.style.display = 'none';
            
            // Track video play event
            trackEvent('video_play', {
                video_title: 'Shop Tour Video',
                video_location: 'Why Choose Us Section'
            });
        });

        video.addEventListener('ended', function() {
            overlay.style.display = 'flex';
        });

        video.addEventListener('pause', function() {
            overlay.style.display = 'flex';
        });
    }
}

// ===== ENHANCED HOVER EFFECTS =====
function initializeEnhancedHoverEffects() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .blog-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Enhanced navigation hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

console.log('🎉 Sam\'s Pawn Shop JavaScript initialized successfully!'); 