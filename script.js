// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const toastContainer = document.getElementById('toastContainer');

// ===== THEME MANAGEMENT =====
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
        this.showToast('Theme changed to ' + this.currentTheme + ' mode', 'success');
    }

    updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    setupEventListeners() {
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupSmoothScrolling();
    }

    setupMobileMenu() {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            // Header scroll effect
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Back to top button
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== ANIMATIONS =====
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.loading').forEach(el => {
            observer.observe(el);
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe sections for scroll animations
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
}

// ===== FORM VALIDATION =====
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
        this.init();
    }

    init() {
        this.setupValidation();
        this.setupFormSubmission();
    }

    setupValidation() {
        // Real-time validation
        this.form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearFieldError(field));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = this.getErrorMessage(fieldName, 'required');
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = this.getErrorMessage(fieldName, 'email');
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = this.getErrorMessage(fieldName, 'phone');
            }
        }

        // Update field state
        this.updateFieldState(field, isValid, errorMessage);
        return isValid;
    }

    getErrorMessage(fieldName, type) {
        const messages = {
            name: {
                required: 'Please enter your full name'
            },
            phone: {
                required: 'Please enter a valid phone number',
                phone: 'Please enter a valid phone number'
            },
            email: {
                email: 'Please enter a valid email address'
            },
            itemType: {
                required: 'Please select an item type'
            },
            description: {
                required: 'Please describe your item'
            }
        };

        return messages[fieldName]?.[type] || 'This field is invalid';
    }

    updateFieldState(field, isValid, errorMessage) {
        const errorElement = document.getElementById(field.name + 'Error');
        
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('success');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
            }
        }
    }

    clearFieldError(field) {
        field.classList.remove('error', 'success');
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    validateForm() {
        let isValid = true;
        this.errors = {};

        this.form.querySelectorAll('input, select, textarea').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
                this.errors[field.name] = true;
            }
        });

        return isValid;
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.handleFormSubmission();
            } else {
                this.scrollToFirstError();
                ToastManager.show('Please fix the errors in the form', 'error');
            }
        });
    }

    scrollToFirstError() {
        const firstError = this.form.querySelector('.error');
        if (firstError) {
            const headerHeight = header.offsetHeight;
            const targetPosition = firstError.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            firstError.focus();
        }
    }

    async handleFormSubmission() {
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            ToastManager.show('Thank you! We\'ll contact you within 24 hours with a quote.', 'success');
            this.form.reset();
            
            // Clear all field states
            this.form.querySelectorAll('input, select, textarea').forEach(field => {
                field.classList.remove('error', 'success');
            });
            
        } catch (error) {
            ToastManager.show('Something went wrong. Please try again.', 'error');
        } finally {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }
}

// ===== TOAST NOTIFICATIONS =====
class ToastManager {
    static show(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = this.getIcon(type);
        
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;

        toastContainer.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);

        // Auto remove
        const timeout = setTimeout(() => this.removeToast(toast), duration);

        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            clearTimeout(timeout);
            this.removeToast(toast);
        });
    }

    static getIcon(type) {
        const icons = {
            success: '<i class="fas fa-check-circle"></i>',
            error: '<i class="fas fa-exclamation-circle"></i>',
            warning: '<i class="fas fa-exclamation-triangle"></i>',
            info: '<i class="fas fa-info-circle"></i>'
        };
        return icons[type] || icons.info;
    }

    static removeToast(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupImageOptimization();
        this.setupResourcePreloading();
    }

    setupLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    setupImageOptimization() {
        // Add responsive image support
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    setupResourcePreloading() {
        // Preload critical resources
        const criticalResources = [
            'hero-storefront.webp',
            'styles.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            if (resource.includes('webp')) {
                link.as = 'image';
            } else {
                link.as = 'style';
            }
            document.head.appendChild(link);
        });
    }
}

// ===== ACCESSIBILITY =====
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIALabels();
    }

    setupKeyboardNavigation() {
        // Handle keyboard navigation for mobile menu
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });

        // Handle keyboard navigation for theme toggle
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                themeToggle.click();
            }
        });
    }

    setupFocusManagement() {
        // Trap focus in mobile menu when open
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.click();
                hamburger.focus();
            }
        });
    }

    setupARIALabels() {
        // Add ARIA labels to interactive elements
        const elements = [
            { selector: '.btn', attribute: 'role', value: 'button' },
            { selector: '.service-card', attribute: 'role', value: 'article' },
            { selector: '.testimonial-card', attribute: 'role', value: 'article' }
        ];

        elements.forEach(({ selector, attribute, value }) => {
            document.querySelectorAll(selector).forEach(el => {
                el.setAttribute(attribute, value);
            });
        });
    }
}

// ===== ANALYTICS & TRACKING =====
class AnalyticsManager {
    constructor() {
        this.init();
    }

    init() {
        this.trackUserInteractions();
        this.trackFormSubmissions();
        this.trackScrollDepth();
    }

    trackUserInteractions() {
        // Track CTA clicks
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('CTA Click', btn.textContent.trim());
            });
        });

        // Track service card interactions
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const serviceName = card.querySelector('h3').textContent;
                this.trackEvent('Service Card Click', serviceName);
            });
        });
    }

    trackFormSubmissions() {
        contactForm.addEventListener('submit', () => {
            this.trackEvent('Form Submission', 'Contact Form');
        });
    }

    trackScrollDepth() {
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                    this.trackEvent('Scroll Depth', `${maxScroll}%`);
                }
            }
        });
    }

    trackEvent(action, label) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'User Interaction',
                event_label: label
            });
        }

        // Console log for development
        console.log(`Analytics: ${action} - ${label}`);
    }
}

// ===== UTILITY FUNCTIONS =====
class Utils {
    static debounce(func, wait) {
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

    static throttle(func, limit) {
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

    static formatPhoneNumber(phone) {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phone;
    }

    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new Navigation();
    new AnimationManager();
    new FormValidator(contactForm);
    new PerformanceOptimizer();
    new AccessibilityManager();
    new AnalyticsManager();

    // Show welcome toast
    setTimeout(() => {
        ToastManager.show('Welcome to Sam\'s Pawn Shop! How can we help you today?', 'info', 3000);
    }, 1000);

    console.log('Sam\'s Pawn Shop website initialized successfully!');
});

// ===== SERVICE WORKER REGISTRATION (for PWA features) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service here
}); 