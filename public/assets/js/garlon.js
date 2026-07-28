(function ($) {
  "use strict";

  // Constants and reusable selectors
  const DOMSelectors = {
    checkoutPaymentTitle: ".checkout-page__payment__title",
    checkoutPaymentItem: ".checkout-page__payment__item",
    checkoutPaymentContent: ".checkout-page__payment__content",
    checkoutPaymentItemActive: ".checkout-page__payment__item--active",
    dynamicYear: ".dynamic-year",
    datepicker: ".garlon-datepicker",
    countBar: ".count-bar",
    countBox: ".count-box",
    customCursor: ".custom-cursor",
    contactForm: ".contact-form-validated",
    mcForm: ".mc-form",
    videoPopup: ".video-popup",
    imgPopup: ".img-popup",
    mainMenuList: ".main-menu__list",
    serviceSidebarNav: ".service-sidebar__nav",
    mobileNavContainer: ".mobile-nav__container",
    stickyHeader: ".sticky-header",
    mobileNavToggler: ".mobile-nav__toggler",
    searchToggler: ".search-toggler",
    deskNavToggler: ".desk-nav__toggler",
    headerRightSidebarToggler: ".header-right-sidebar__toggler",
    miniCartToggler: ".mini-cart__toggler",
    odometer: ".odometer",
    donateAmount: "#donate-amount",
    donateAmountPredefined: "#donate-amount__predefined",
    accordion: ".garlon-accrodion",
    tabsBox: ".tabs-box",
    rangeSliderPrice: ".range-slider-price",
    rangeInput: "#rangeInput",
    sliderThumb: "#sliderThumb",
    garlonOwlCarousel: ".garlon-owl__carousel",
    garlonOwlCarouselNav: ".garlon-owl__carousel--custom-nav",
    garlonOwlCarouselFilter: ".garlon-owl__carousel--filter",
    garlonSlickCarousel: ".garlon-slick__carousel",
    garlonSlickCarouselCounter: ".garlon-slick__custome-counter",
    galleryCompareDivisor: "#gallery-one__compare__divisor",
    galleryCompareHandle: "#gallery-one__compare__handle",
    galleryCompareSlider: "#gallery-one__compare__slider",
    garlonTiltElm: ".garlon-tilt",
    scrollToTop: ".scroll-to-top",
    preloader: ".preloader",
    circleProgress: ".circle-progress",
    masonryLayout: ".masonry-layout",
    fitRowLayout: ".fitRow-layout",
    postFilter: ".post-filter",
    priceRanger: ".price-ranger",
    teamCardBtn: ".team-card__btn, .team-three-card__btn",
    teamCardTwo: ".team-card-two"
  };

  // Configuration
  const Config = {
    appearOffset: { accY: -50 },
    scrollThrottleDelay: 100,
    headerScrollPos: 130,
    maxProductQuantity: 999
  };

  // State management
  const AppState = {
    lastScrollTop: 0,
    eventListeners: new Map(),
    isScrolling: false
  };

  // Utility functions
  const Utils = {
    escapeHtml: function(unsafe) {
      if (typeof unsafe !== 'string') return unsafe;
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },

    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    throttle: function(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    elementExists: function(selector, context = document) {
      return context.querySelectorAll(selector).length > 0;
    },

    safeQuery: function(selector, context = document) {
      try {
        return $(selector, context);
      } catch (error) {
        console.warn(`Error querying selector: ${selector}`, error);
        return $();
      }
    },

    addEventListenerWithCleanup: function(element, event, handler, options = {}) {
      if (!element || !handler) return null;
      
      const eventId = `${event}-${Date.now()}-${Math.random()}`;
      element.addEventListener(event, handler, options);
      
      AppState.eventListeners.set(eventId, {
        element,
        event,
        handler,
        options
      });
      
      return () => {
        const listener = AppState.eventListeners.get(eventId);
        if (listener) {
          listener.element.removeEventListener(listener.event, listener.handler, listener.options);
          AppState.eventListeners.delete(eventId);
        }
      };
    },

    cleanupEventListeners: function() {
      AppState.eventListeners.forEach((listener, key) => {
        listener.element.removeEventListener(listener.event, listener.handler, listener.options);
      });
      AppState.eventListeners.clear();
    },

    validateEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  };

  // Main application
  class GarlonApp {
    constructor() {
      this.initialize();
    }

    initialize() {
      try {
        this.setupCheckoutAccordion();
        this.setupDynamicYear();
        this.setupDatePicker();
        this.setupProgressBars();
        this.setupFactCounter();
        this.setupCustomCursor();
        this.setupContactForm();
        this.setupMailchimpForm();
        this.setupPopupHandlers();
        this.setupNavigation();
        this.setupMobileNavigation();
        this.setupMegaMenu();
        this.setupInteractiveElements();
        this.setupAccordions();
        this.setupQuantityControls();
        this.setupTabs();
        this.setupRangeSliders();
        this.setupSliders();
        this.setupComparisonSlider();
        this.setupTiltEffect();
        this.setupScrollHandlers();
        this.setupStretchElements();
        this.setupCurvedCircle();
        this.setupPriceFilter();
        this.setupServiceHover();
        this.setupTeamCardInteractions();
        this.bindWindowEvents();
      } catch (error) {
        console.error('Failed to initialize application:', error);
      }
    }

    setupCheckoutAccordion() {
      const titleEl = Utils.safeQuery(DOMSelectors.checkoutPaymentTitle);
      if (!titleEl.length) return;

      // Hide all content initially
      Utils.safeQuery(DOMSelectors.checkoutPaymentContent).hide();
      
      // Show active item
      Utils.safeQuery(DOMSelectors.checkoutPaymentItemActive)
        .find(DOMSelectors.checkoutPaymentContent)
        .show();

      titleEl.on("click", (e) => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const $parentPayment = $this.parents(".checkout-page__payment");

        $parentPayment
          .find(DOMSelectors.checkoutPaymentItem)
          .removeClass("checkout-page__payment__item--active");

        $parentPayment
          .find(DOMSelectors.checkoutPaymentContent)
          .slideUp();

        $this.parent()
          .addClass("checkout-page__payment__item--active")
          .find(DOMSelectors.checkoutPaymentContent)
          .slideDown();
      });
    }

    setupDynamicYear() {
      const yearEl = Utils.safeQuery(DOMSelectors.dynamicYear);
      if (yearEl.length) {
        const currentYear = new Date().getFullYear();
        yearEl.text(currentYear);
      }
    }

    setupDatePicker() {
      Utils.safeQuery(DOMSelectors.datepicker).each(function() {
        $(this).datepicker();
      });
    }

    setupProgressBars() {
      if (!Utils.elementExists(DOMSelectors.countBar)) return;

      $(DOMSelectors.countBar).appear(
        function() {
          const $el = $(this);
          const percent = $el.data("percent");
          $el.css("width", percent).addClass("counted");
        },
        Config.appearOffset
      );
    }

    setupFactCounter() {
      if (!Utils.elementExists(DOMSelectors.countBox)) return;

      $(DOMSelectors.countBox).appear(
        function() {
          const $t = $(this);
          const stopValue = $t.find(".count-text").data("stop");
          const speed = parseInt($t.find(".count-text").data("speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: parseInt($t.find(".count-text").text()) || 0
            }).animate({
              countNum: stopValue
            }, {
              duration: speed,
              easing: "linear",
              step: function() {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function() {
                $t.find(".count-text").text(this.countNum);
              }
            });
          }
        },
        { accY: 0 }
      );
    }

    setupCustomCursor() {
      if (!Utils.elementExists(DOMSelectors.customCursor)) return;

      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      const links = document.querySelectorAll("a");

      // Mousemove handlers
      const moveCursor = (e) => {
        if (cursor) {
          cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        }
      };

      const moveCursorInner = (e) => {
        if (cursorInner) {
          cursorInner.style.left = `${e.clientX}px`;
          cursorInner.style.top = `${e.clientY}px`;
        }
      };

      // Event listeners with cleanup
      Utils.addEventListenerWithCleanup(document, "mousemove", moveCursor);
      Utils.addEventListenerWithCleanup(document, "mousemove", moveCursorInner);

      Utils.addEventListenerWithCleanup(document, "mousedown", () => {
        if (cursor) cursor.classList.add("click");
        if (cursorInner) cursorInner.classList.add("custom-cursor__innerhover");
      });

      Utils.addEventListenerWithCleanup(document, "mouseup", () => {
        if (cursor) cursor.classList.remove("click");
        if (cursorInner) cursorInner.classList.remove("custom-cursor__innerhover");
      });

      // Link hover effects
      links.forEach((link) => {
        Utils.addEventListenerWithCleanup(link, "mouseover", () => {
          if (cursor) cursor.classList.add("custom-cursor__hover");
        });

        Utils.addEventListenerWithCleanup(link, "mouseleave", () => {
          if (cursor) cursor.classList.remove("custom-cursor__hover");
        });
      });
    }

    setupContactForm() {
      Utils.safeQuery(DOMSelectors.contactForm).each(function() {
        const $form = $(this);
        
        $form.validate({
          rules: {
            name: { required: true },
            email: { 
              required: true,
              email: true 
            },
            message: { required: true },
            subject: { required: true }
          },
          messages: {
            name: "Please enter your name",
            email: {
              required: "Please enter your email",
              email: "Please enter a valid email address"
            },
            message: "Please enter your message",
            subject: "Please enter a subject"
          },
          submitHandler: (form) => {
            this.handleFormSubmission(form);
          }
        });
      });
    }

    handleFormSubmission(form) {
      try {
        const $form = $(form);
        const formData = $form.serialize();
        const url = $form.attr("action");

        // Client-side validation
        if (!this.validateFormData($form)) {
          return false;
        }

        // In a real application, you would send this to a server
        // For now, we'll simulate a successful submission
        setTimeout(() => {
          $form.parent().find(".result").html(
            '<div class="alert alert-success">Thank you! Your message has been sent successfully.</div>'
          );
          
          // Clear form
          $form.find('input[type="text"], input[type="email"], textarea').val("");
          
          // Remove success message after 5 seconds
          setTimeout(() => {
            $form.parent().find(".result").empty();
          }, 5000);
        }, 1000);

        return false;
      } catch (error) {
        console.error('Form submission error:', error);
        return false;
      }
    }

    validateFormData($form) {
      const email = $form.find('input[type="email"]').val();
      if (!Utils.validateEmail(email)) {
        $form.parent().find(".result").html(
          '<div class="alert alert-danger">Please enter a valid email address.</div>'
        );
        return false;
      }
      return true;
    }

    setupMailchimpForm() {
      Utils.safeQuery(DOMSelectors.mcForm).each(function() {
        const $self = $(this);
        const mcURL = $self.data("url");
        const mcResp = $self.parent().find(".mc-form__response");

        if (!mcURL) {
          console.warn('Mailchimp URL not provided');
          return;
        }

        $self.ajaxChimp({
          url: mcURL,
          callback: (resp) => {
            const message = Utils.escapeHtml(resp.msg);
            mcResp.html(`<p class="mc-message">${message}</p>`);

            if (resp.result === "success") {
              $self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              $self.find("input").val("");
            } else if (resp.result === "error") {
              $self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
            }

            mcResp.find("p").fadeOut(10000);
          }
        });
      });
    }

    setupPopupHandlers() {
      // Video popup
      if (Utils.elementExists(DOMSelectors.videoPopup)) {
        $(DOMSelectors.videoPopup).magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false
        });
      }

      // Image popup
      if (Utils.elementExists(DOMSelectors.imgPopup)) {
        const groups = {};
        
        $(DOMSelectors.imgPopup).each(function() {
          const id = parseInt($(this).data("group"), 10);
          if (!groups[id]) groups[id] = [];
          groups[id].push(this);
        });

        Object.values(groups).forEach((group) => {
          $(group).magnificPopup({
            type: "image",
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled: true }
          });
        });
      }
    }

    setupNavigation() {
      // Dynamic current menu class
      if (Utils.elementExists(DOMSelectors.mainMenuList)) {
        this.dynamicCurrentMenuClass($(DOMSelectors.mainMenuList));
      }

      if (Utils.elementExists(DOMSelectors.serviceSidebarNav)) {
        this.dynamicCurrentMenuClass($(DOMSelectors.serviceSidebarNav));
      }

      // Sticky header clone
      if (Utils.elementExists(DOMSelectors.stickyHeader)) {
        $(DOMSelectors.stickyHeader)
          .clone()
          .insertAfter(DOMSelectors.stickyHeader)
          .addClass("sticky-header--cloned");
      }
    }

    dynamicCurrentMenuClass(selector) {
      try {
        const fileName = window.location.href.split("/").pop() || "";
        
        selector.find("li").each(function() {
          const $li = $(this);
          const $anchor = $li.find("a");
          const href = $anchor.attr("href");
          
          if (href && href === fileName) {
            $li.addClass("current");
          }
        });

        // If any li has .current element, add class to parent
        selector.children("li").each(function() {
          if ($(this).find(".current").length) {
            $(this).addClass("current");
          }
        });

        // If no filename, select first item
        if (!fileName) {
          selector.find("li").first().addClass("current");
        }
      } catch (error) {
        console.error('Error in dynamicCurrentMenuClass:', error);
      }
    }

    setupMobileNavigation() {
      // Copy main menu to mobile
      if (Utils.elementExists(".main-menu") && Utils.elementExists(DOMSelectors.mobileNavContainer)) {
        const navContent = document.querySelector(".main-menu")?.innerHTML;
        if (navContent) {
          document.querySelector(DOMSelectors.mobileNavContainer).innerHTML = navContent;
        }
      }

      // Mobile dropdown togglers
      if (Utils.elementExists(`${DOMSelectors.mobileNavContainer} .main-menu__list`)) {
        $(`${DOMSelectors.mobileNavContainer} .main-menu__list .dropdown > a`).each(function() {
          const $self = $(this);
          const toggleBtn = $('<button aria-label="dropdown toggler"><i class="fa fa-angle-down"></i></button>');
          
          $self.append(toggleBtn);
          
          toggleBtn.on("click", (e) => {
            e.preventDefault();
            toggleBtn.toggleClass("expanded");
            $self.parent().toggleClass("expanded");
            $self.parent().find("> ul").slideToggle();
          });
        });
      }
    }

    setupMegaMenu() {
      // Mega menu popup
      $(document).on("click", ".megamenu-clickable--toggler > a", (e) => {
        e.preventDefault();
        $("body").toggleClass("megamenu-popup-active");
        $(e.currentTarget).parent().find("ul").toggleClass("megamenu-clickable--active");
      });

      $(document).on("click", ".megamenu-clickable--close", (e) => {
        e.preventDefault();
        $("body").removeClass("megamenu-popup-active");
        $(".megamenu-clickable--active").removeClass("megamenu-clickable--active");
      });
    }

    setupInteractiveElements() {
      // Mobile nav toggler
      Utils.safeQuery(DOMSelectors.mobileNavToggler).on("click", (e) => {
        e.preventDefault();
        $(".mobile-nav__wrapper").toggleClass("expanded");
        $("body").toggleClass("locked");
      });

      // Search toggler
      Utils.safeQuery(DOMSelectors.searchToggler).on("click", (e) => {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
      });

      // Desktop nav toggler
      Utils.safeQuery(DOMSelectors.deskNavToggler).on("click", (e) => {
        e.preventDefault();
        $(".header-right-sidebar").addClass("isActive");
        $("body").addClass("locked");
      });

      // Header right sidebar toggler
      Utils.safeQuery(DOMSelectors.headerRightSidebarToggler).on("click", (e) => {
        e.preventDefault();
        $(".header-right-sidebar").removeClass("isActive");
        $("body").removeClass("locked");
      });

      // Mini cart toggler
      Utils.safeQuery(DOMSelectors.miniCartToggler).on("click", (e) => {
        e.preventDefault();
        $(".mini-cart").toggleClass("expanded");
        $(".mobile-nav__wrapper").removeClass("expanded");
        $("body").toggleClass("locked");
      });

      // Odometer
      if (Utils.elementExists(DOMSelectors.odometer)) {
        $(DOMSelectors.odometer).appear(function() {
          const $odo = $(this);
          const countNumber = $odo.data("count");
          $odo.html(countNumber);
        });
      }

      // WOW.js initialization
      if (typeof WOW !== 'undefined' && Utils.elementExists(".wow")) {
        new WOW({
          boxClass: "wow",
          animateClass: "animated",
          mobile: true,
          live: true
        }).init();
      }

      // Donate amount
      if (Utils.elementExists(DOMSelectors.donateAmountPredefined)) {
        const donateInput = $(DOMSelectors.donateAmount);
        
        $(DOMSelectors.donateAmountPredefined).find("li").on("click", (e) => {
          e.preventDefault();
          const amount = $(e.currentTarget).find("a").text();
          donateInput.val(amount);
          
          $(DOMSelectors.donateAmountPredefined)
            .find("li")
            .removeClass("active");
          
          $(e.currentTarget).addClass("active");
        });
      }
    }

    setupAccordions() {
      if (!Utils.elementExists(DOMSelectors.accordion)) return;

      $(DOMSelectors.accordion).each(function() {
        const $self = $(this);
        const accrodionName = $self.data("grp-name");
        const $accordions = $self.find(".accrodion");

        $self.addClass(accrodionName);
        $self.find(".accrodion .accrodion-content").hide();
        $self.find(".accrodion.active").find(".accrodion-content").show();

        $accordions.each(function() {
          $(this).find(".accrodion-title").on("click", () => {
            const $current = $(this);
            
            if (!$current.hasClass("active")) {
              $(`.garlon-accrodion.${accrodionName}`)
                .find(".accrodion")
                .removeClass("active");
                
              $(`.garlon-accrodion.${accrodionName}`)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
                
              $current.addClass("active");
              $current.find(".accrodion-content").slideDown();
            }
          });
        });
      });
    }

    setupQuantityControls() {
      $(".add").on("click", function(e) {
        e.preventDefault();
        const $input = $(this).prev();
        let value = parseInt($input.val()) || 0;
        
        if (value < Config.maxProductQuantity) {
          $input.val(value + 1);
        }
      });

      $(".sub").on("click", function(e) {
        e.preventDefault();
        const $input = $(this).next();
        let value = parseInt($input.val()) || 0;
        
        if (value > 0) {
          $input.val(value - 1);
        }
      });
    }

    setupTabs() {
      if (!Utils.elementExists(DOMSelectors.tabsBox)) return;

      $(document).on("click", ".tabs-box .tab-buttons .tab-btn", function(e) {
        e.preventDefault();
        const $this = $(this);
        const targetSelector = $this.data("tab");
        const $target = $(targetSelector);
        const $tabsBox = $this.closest(".tabs-box");

        if ($target.is(":visible")) return false;

        $tabsBox.find(".tab-buttons .tab-btn").removeClass("active-btn");
        $this.addClass("active-btn");

        $tabsBox.find(".tabs-content .tab").fadeOut(0).removeClass("active-tab");
        $target.fadeIn(300).addClass("active-tab");
      });
    }

    setupRangeSliders() {
      // Price range slider
      if (Utils.elementExists(DOMSelectors.rangeSliderPrice)) {
        try {
          const priceRange = document.getElementById("range-slider-price");
          
          if (priceRange && typeof noUiSlider !== 'undefined') {
            noUiSlider.create(priceRange, {
              start: [30, 150],
              limit: 200,
              behaviour: "drag",
              connect: true,
              range: {
                min: 10,
                max: 200
              }
            });

            const minValue = document.getElementById("min-value-rangeslider");
            const maxValue = document.getElementById("max-value-rangeslider");

            priceRange.noUiSlider.on("update", (values, handle) => {
              const element = handle ? $(maxValue) : $(minValue);
              element.text(values[handle]);
            });
          }
        } catch (error) {
          console.error('Error initializing range slider:', error);
        }
      }

      // Custom range slider
      if (Utils.elementExists(DOMSelectors.rangeInput)) {
        const $range = $(DOMSelectors.rangeInput);
        const $thumb = $(DOMSelectors.sliderThumb);

        const updateThumbPosition = () => {
          const rangeWidth = $range.outerWidth();
          const max = parseInt($range.attr("max")) || 100;
          const val = parseInt($range.val()) || 0;
          const percent = val / max;
          const position = percent * rangeWidth;

          $thumb.css("left", `${position}px`);
        };

        $range.on("input", updateThumbPosition);
        updateThumbPosition();
      }
    }

    setupSliders() {
      this.setupOwlCarousel();
      this.setupSlickCarousel();
    }

    setupOwlCarousel() {
      if (!Utils.elementExists(DOMSelectors.garlonOwlCarousel)) return;

      // Regular owl carousel
      $(DOMSelectors.garlonOwlCarousel).each(function() {
        try {
          const $elm = $(this);
          const options = $elm.data("owl-options");
          
          if (typeof $.fn.owlCarousel === 'function') {
            const owlOptions = typeof options === "object" ? options : JSON.parse(options);
            $elm.owlCarousel(owlOptions);
            
            $elm.find("button").each(function() {
              $(this).attr("aria-label", "carousel button");
            });
          }
        } catch (error) {
          console.error('Error initializing owl carousel:', error);
        }
      });

      // Owl carousel with custom navigation
      if (Utils.elementExists(DOMSelectors.garlonOwlCarouselNav)) {
        $(DOMSelectors.garlonOwlCarouselNav).each(function() {
          const $elm = $(this);
          const owlNavPrev = $elm.data("owl-nav-prev");
          const owlNavNext = $elm.data("owl-nav-next");

          $(owlNavPrev).on("click", (e) => {
            e.preventDefault();
            $elm.trigger("prev.owl.carousel");
          });

          $(owlNavNext).on("click", (e) => {
            e.preventDefault();
            $elm.trigger("next.owl.carousel");
          });
        });
      }

      // Owl carousel with filter
      if (Utils.elementExists(DOMSelectors.garlonOwlCarouselFilter)) {
        $(DOMSelectors.garlonOwlCarouselFilter).each(function() {
          try {
            const $elm = $(this);
            const options = $elm.data("owl-options");
            
            if (typeof $.fn.owlCarousel === 'function') {
              const owlOptions = typeof options === "object" ? options : JSON.parse(options);
              const thmOwlCarousel = $elm.owlCarousel(owlOptions);

              $elm.find("button").each(function() {
                $(this).attr("aria-label", "carousel button");
              });

              // Custom filter method
              $.fn.owlcarousel2_filter = function(filter) {
                this.trigger('refresh.owl.carousel')
                  .find('.owl-item')
                  .show()
                  .filter(function() {
                    const category = $(this).find('.item').data('owl-filter');
                    return filter !== '*' && category !== filter;
                  })
                  .hide();
                this.trigger('refresh.owl.carousel');
              };

              const filtersDiv = $elm.data("owl-filters-div");
              
              $(filtersDiv).on('click', '.item', function(e) {
                e.preventDefault();
                const $item = $(this);
                $(filtersDiv).find(".item").removeClass("active");
                $item.addClass("active");
                
                const filter = $item.data('owl-filter');
                thmOwlCarousel.owlcarousel2_filter(filter);
              });
            }
          } catch (error) {
            console.error('Error initializing filtered owl carousel:', error);
          }
        });
      }
    }

    setupSlickCarousel() {
      if (!Utils.elementExists(DOMSelectors.garlonSlickCarousel)) return;

      // Regular slick carousel
      $(DOMSelectors.garlonSlickCarousel).each(function() {
        try {
          const $elm = $(this);
          const options = $elm.data("slick-options");
          
          if (typeof $.fn.slick === 'function') {
            const slickOptions = typeof options === "object" ? options : JSON.parse(options);
            $elm.slick(slickOptions);
          }
        } catch (error) {
          console.error('Error initializing slick carousel:', error);
        }
      });

      // Slick carousel with counter
      if (Utils.elementExists(DOMSelectors.garlonSlickCarouselCounter)) {
        $(DOMSelectors.garlonSlickCarouselCounter).each(function() {
          try {
            const $elm = $(this);
            const options = $elm.data("slick-options");
            
            if (typeof $.fn.slick === 'function') {
              const sliderCounter = $('<div class="garlon-slick__counter"></div>');
              let currentSlide, slidesCount;

              const updateSliderCounter = (slick) => {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                sliderCounter.html(
                  `<span class="garlon-slick__counter__active">${currentSlide}</span>` +
                  `<span>${slidesCount}</span>`
                );
              };

              $elm.on('init', (event, slick) => {
                $elm.append(sliderCounter);
                updateSliderCounter(slick);
              });

              $elm.on('afterChange', (event, slick) => {
                updateSliderCounter(slick);
              });

              const slickOptions = typeof options === "object" ? options : JSON.parse(options);
              $elm.slick(slickOptions);
            }
          } catch (error) {
            console.error('Error initializing slick carousel with counter:', error);
          }
        });
      }
    }

    setupComparisonSlider() {
      const $divisor = $(DOMSelectors.galleryCompareDivisor);
      const $handle = $(DOMSelectors.galleryCompareHandle);
      const $slider = $(DOMSelectors.galleryCompareSlider);

      // If elements don't exist, exit early
      if (!$divisor.length || !$handle.length || !$slider.length) return;

      // Define checkDivisorWidth BEFORE using it
      const checkDivisorWidth = ($divisorElement) => {
        const containerWidth = $divisorElement.parent().width();
        const divisorWidth = $divisorElement.width();
        const widthPercentage = (divisorWidth / containerWidth) * 100;

        $('.gallery-one__compare__text')
          .toggleClass('af_hide', widthPercentage < 7)
          .toggleClass('bf_hide', widthPercentage > 93);
      };

      const moveDivisor = () => {
        const sliderValue = $slider.val();
        $handle.css('left', `${sliderValue}%`);
        $divisor.css('width', `${sliderValue}%`);
        checkDivisorWidth($divisor); // Now safe to call
      };

      // Initial position
      moveDivisor();

      // Bind slider input
      $slider.on('input', moveDivisor);

      // Optional: Also update on touchmove for mobile
      $slider.on('touchmove', moveDivisor);
    }

    setupTiltEffect() {
      if (!Utils.elementExists(DOMSelectors.garlonTiltElm)) return;

      $(DOMSelectors.garlonTiltElm).each(function() {
        try {
          const $self = $(this);
          const options = $self.data('tilt-options');
          
          if (typeof $.fn.tilt === 'function') {
            const tiltOptions = typeof options === "object" ? options : JSON.parse(options);
            $self.tilt(tiltOptions);
          }
        } catch (error) {
          console.error('Error initializing tilt effect:', error);
        }
      });
    }

    setupScrollHandlers() {
      this.setupSmoothMenuScroll();
      this.setupStickyHeader();
      this.setupScrollToTop();
    }

    setupSmoothMenuScroll() {
      const anchor = $(".scrollToLink");
      if (!anchor.length) return;

      anchor.children("a").on("click", (e) => {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const href = $target.attr("href");
        
        if (!href || href.charAt(0) !== '#') return;

        const headerHeight = $(window).scrollTop() > 10 ? 0 : 0;
        const targetPosition = $(href).offset()?.top - headerHeight;

        if (targetPosition !== undefined) {
          $("html, body").animate({
            scrollTop: targetPosition
          }, 900, "easeInOutExpo");
        }

        anchor.removeClass("current current-menu-ancestor current_page_item current-menu-parent");
        $target.parent().addClass("current");
      });
    }

    setupStickyHeader() {
      const $stickyHeaderOnePage = $(".sticky-header--one-page");
      const $stickyHeaderNormal = $(".sticky-header--normal");

      if ($stickyHeaderOnePage.length) {
        $(window).on("scroll", Utils.throttle(() => {
          if ($(window).scrollTop() > Config.headerScrollPos) {
            $stickyHeaderOnePage.addClass("active");
          } else {
            $stickyHeaderOnePage.removeClass("active");
          }
        }, Config.scrollThrottleDelay));
      }

      if ($stickyHeaderNormal.length) {
        $(window).on("scroll", Utils.throttle(() => {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          
          if (st > 500) {
            if (st > AppState.lastScrollTop) {
              $stickyHeaderNormal.removeClass("active");
            } else {
              $stickyHeaderNormal.addClass("active");
            }
          } else {
            $stickyHeaderNormal.removeClass("active");
          }
          
          AppState.lastScrollTop = st;
        }, Config.scrollThrottleDelay));
      }
    }

    setupScrollToTop() {
      const scrollToTopBtn = $(DOMSelectors.scrollToTop);
      if (!scrollToTopBtn.length) return;

      const handleScrollbar = Utils.throttle(() => {
        const bodyHeight = $("body").height();
        const scrollPos = $(window).innerHeight() + $(window).scrollTop();
        let percentage = (scrollPos / bodyHeight) * 100;
        percentage = Math.min(percentage, 100);
        
        scrollToTopBtn.find(".scroll-to-top__inner").css("width", `${percentage}%`);
      }, Config.scrollThrottleDelay);

      $(window).on("scroll", handleScrollbar);

      // Scroll to top functionality
      scrollToTopBtn.on("click", (e) => {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
      });

      // Show/hide button
      $(window).on("scroll", Utils.throttle(() => {
        if ($(window).scrollTop() > 500) {
          scrollToTopBtn.addClass("show");
        } else {
          scrollToTopBtn.removeClass("show");
        }
      }, Config.scrollThrottleDelay));
    }

    setupStretchElements() {
      const garlonStretch = Utils.throttle(() => {
        $(".row .garlon-stretch-element-inside-column").each(function() {
          const $this = $(this);
          const $row = $this.closest(".row");
          const $cols = $this.closest('[class^="col-"]');
          
          if (!$row.length || !$cols.length) return;

          const rowRect = $row[0].getBoundingClientRect();
          const colRect = $cols[0].getBoundingClientRect();
          const thisRect = this.getBoundingClientRect();
          
          const windowWidth = $(window).width();
          const rowPaddingLeft = parseFloat($row.css("padding-left")) || 0;
          const rowPaddingRight = parseFloat($row.css("padding-right")) || 0;
          
          const styles = {
            "margin-left": 0,
            "margin-right": 0
          };

          // Check left alignment
          if (Math.round(rowRect.left + rowPaddingLeft) === Math.round(colRect.left)) {
            const marginLeft = parseFloat($this.css("margin-left")) || 0;
            styles["margin-left"] = marginLeft - thisRect.left;
          }

          // Check right alignment
          if (Math.round(windowWidth - rowRect.right + rowPaddingRight) === Math.round(windowWidth - colRect.right)) {
            const marginRight = parseFloat($this.css("margin-right")) || 0;
            styles["margin-right"] = marginRight - (windowWidth - thisRect.right);
          }

          $this.css(styles);
        });
      }, Config.scrollThrottleDelay);

      garlonStretch();
      $(window).on("resize", garlonStretch);
    }

    setupCurvedCircle() {
      if (!Utils.elementExists(".curved-circle--item")) return;

      $(".curved-circle--item").each(function() {
        try {
          const $elm = $(this);
          const options = $elm.data("circle-text-options");
          
          if (typeof $.fn.circleType === 'function') {
            const circleOptions = typeof options === "object" ? options : JSON.parse(options);
            $elm.circleType(circleOptions);
          }
        } catch (error) {
          console.error('Error initializing curved circle:', error);
        }
      });
    }

    setupPriceFilter() {
      if (!Utils.elementExists(DOMSelectors.priceRanger)) return;

      try {
        const $slider = $(".price-ranger #slider-range");
        
        if (typeof $.fn.slider === 'function') {
          $slider.slider({
            range: true,
            min: 50,
            max: 1000,
            values: [11, 500],
            slide: (event, ui) => {
              $(".price-ranger .ranger-min-max-block .min").val(`$${ui.values[0]}`);
              $(".price-ranger .ranger-min-max-block .max").val(`$${ui.values[1]}`);
            }
          });

          $(".price-ranger .ranger-min-max-block .min").val(
            `$${$slider.slider("values", 0)}`
          );
          $(".price-ranger .ranger-min-max-block .max").val(
            `$${$slider.slider("values", 1)}`
          );
        }
      } catch (error) {
        console.error('Error initializing price filter:', error);
      }
    }

    setupServiceHover() {
      const links = document.querySelectorAll('.service-three__item');
      const hoverReveals = document.querySelectorAll('.service-three__item__box');
      const linkImages = document.querySelectorAll('.service-three__item__box__img');

      if (!links.length || !hoverReveals.length || !linkImages.length) return;

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const hoverReveal = hoverReveals[i];
        const linkImage = linkImages[i];

        Utils.addEventListenerWithCleanup(link, 'mousemove', (e) => {
          hoverReveal.style.opacity = '1';
          hoverReveal.style.transform = 'translate(-100%, -50%) rotate(14deg)';
          linkImage.style.transform = 'scale(1, 1)';
          hoverReveal.style.left = `${e.clientX}px`;
        });

        Utils.addEventListenerWithCleanup(link, 'mouseleave', () => {
          hoverReveal.style.opacity = '0';
          hoverReveal.style.transform = 'translate(-50%, -50%) rotate(-14deg)';
          linkImage.style.transform = 'scale(0.8, 0.8)';
        });
      }
    }

    setupTeamCardInteractions() {
      // Team card buttons
      $(document).on("click", DOMSelectors.teamCardBtn, function(e) {
        e.preventDefault();
        const $social = $(this).closest('.team-card, .team-three-card')
          .find('.team-card__social, .team-three-card__social');

        if ($social.css('opacity') === '0' || $social.css('visibility') === 'hidden') {
          $social.css({
            'opacity': '1',
            'visibility': 'visible',
            'transform': 'translateX(-50%) rotateY(0deg)'
          });
        } else {
          $social.css({
            'opacity': '0',
            'visibility': 'hidden',
            'transform': 'translateX(-50%) rotateY(90deg)'
          });
        }
      });

      // Team card two
      $(document).on("click", DOMSelectors.teamCardTwo, function(e) {
        e.preventDefault();
        const $social = $(this).find('.team-card-two__hover__social');

        if ($social.css('opacity') === '0' || $social.css('visibility') === 'hidden') {
          $social.css({
            'opacity': '1',
            'visibility': 'visible'
          });
        } else {
          $social.css({
            'opacity': '0',
            'visibility': 'hidden'
          });
        }
      });
    }

    bindWindowEvents() {
      // Window load event
      $(window).on("load", () => {
        this.handleWindowLoad();
      });

      // Window resize event
      $(window).on("resize", Utils.throttle(() => {
        // Recalculate stretch elements on resize
        $(".row .garlon-stretch-element-inside-column").each(function() {
          const $this = $(this);
          $this.css({ "margin-left": 0, "margin-right": 0 });
        });
        setTimeout(() => {
          this.setupStretchElements();
        }, 100);
      }, 250));

      // Window unload event for cleanup
      $(window).on("beforeunload", () => {
        Utils.cleanupEventListeners();
      });
    }

    handleWindowLoad() {
      // Hide preloader
      Utils.safeQuery(DOMSelectors.preloader).fadeOut();

      // Initialize sliders
      this.setupSliders();

      // Initialize price filter
      this.setupPriceFilter();

      // Circle progress
      if (Utils.elementExists(DOMSelectors.circleProgress)) {
        $(DOMSelectors.circleProgress).appear(() => {
          $(DOMSelectors.circleProgress).each(function() {
            try {
              const $progress = $(this);
              const options = $progress.data("options");
              
              if (typeof $.fn.circleProgress === 'function') {
                $progress.circleProgress(options);
              }
            } catch (error) {
              console.error('Error initializing circle progress:', error);
            }
          });
        });
      }

      // Masonry layouts
      this.setupMasonryLayouts();

      // Post filters
      this.setupPostFilters();

      // Curved circle
      this.setupCurvedCircle();
    }

    setupMasonryLayouts() {
      // Masonry layout
      if (Utils.elementExists(DOMSelectors.masonryLayout)) {
        $(DOMSelectors.masonryLayout).imagesLoaded(() => {
          if (typeof $.fn.isotope === 'function') {
            $(DOMSelectors.masonryLayout).isotope({
              layoutMode: "masonry"
            });
          }
        });
      }

      // FitRow layout
      if (Utils.elementExists(DOMSelectors.fitRowLayout)) {
        $(DOMSelectors.fitRowLayout).imagesLoaded(() => {
          if (typeof $.fn.isotope === 'function') {
            $(DOMSelectors.fitRowLayout).isotope({
              layoutMode: "fitRows"
            });
          }
        });
      }
    }

    setupPostFilters() {
      if (!Utils.elementExists(DOMSelectors.postFilter)) return;

      const postFilterList = $(`${DOMSelectors.postFilter} li`);
      const $filterLayout = $(".filter-layout");

      if (!$filterLayout.length) return;

      // Initial isotope setup
      if (typeof $.fn.isotope === 'function') {
        $filterLayout.isotope({
          filter: ".filter-item",
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
      }

      // Filter click handler
      postFilterList.on("click", function(e) {
        e.preventDefault();
        const $self = $(this);
        const selector = $self.data("filter");

        postFilterList.removeClass("active");
        $self.addClass("active");

        if (typeof $.fn.isotope === 'function') {
          $filterLayout.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
        }
      });

      // Dynamic filter counter
      if ($(DOMSelectors.postFilter).hasClass("has-dynamic-filter-counter")) {
        postFilterList.each(function() {
          const $self = $(this);
          const filterElement = $self.data("filter");
          const count = $filterLayout.find(filterElement).length;
          $self.append(`<sup>[${count}]</sup>`);
        });
      }
    }
  }

  // Initialize the application when DOM is ready
  $(document).ready(() => {
    new GarlonApp();
  });

})(jQuery);