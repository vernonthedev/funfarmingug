<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ $metaTitle ?: 'Fun Farming | Uganda' }}</title>
        <meta name="title" content="{{ $metaTitle ?: '' }}">
        <!-- favicons Icons -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/logo.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/logo.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/logo.png">
        <link rel="manifest" href="">
        <link rel="canonical" href="https://funfarminguganda.com">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Fun Farming Uganda">
        <meta name="keywords" content="Fun Farming, Uganda, organic farming, agriculture, sustainable farming, agro tourism in uganda, tourism, goat breeding">
        
        <meta name="description" content="{{ $metaDescription ?: 'Fun farming Uganda is organic farm engaging in diverse agricultural activities like goat breeding,poultry farming,banana plantation also serves as a youth agro project educating and involving young individuals in sustainable farming practices, contributing to Uganda\'s agricultural sector' }}">
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="">
        <meta property="og:title" content="{{ $metaTitle ?: '' }}">
        <meta property="og:description" content="">
        <meta property="og:image" content="img/logo.png">
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="">
        <meta name="twitter:title" content="{{ $metaTitle ?: '' }}">
        <meta name="twitter:description" content="">
        <meta name="twitter:image" content="img/logo.png">
        <!-- Custom Scroll Bar Configurations-->
        <style>
    html {
        scroll-behavior: smooth;
      }
    body::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      body::-webkit-scrollbar-track {
        background: yellow;        /* color of the tracking area */
      }
      body::-webkit-scrollbar-thumb {
        background-color: green;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid yellow;  /* creates padding around scroll thumb */
      }

      {{--  back to top button  --}}
        #backToTopBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: green;
            color: yellow;
            border: none;
            border-radius: 10%;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
        }

        #backToTopBtn:hover {
            background-color: yellow;
            color: green;
        }
        /* Loading animation styles */
        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        #loader div {
            box-sizing: border-box;
            width: 40px;
            height: 40px;
            border: 4px solid green;
            border-top: 4px solid yellow;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
</style>


    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NFNWLK7');
    </script>


     <!-- Canonical URL -->
     <link rel="canonical" href="https://funfarminguganda.com">

      <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" href="{{ asset('img/favicons/logo.png') }}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicons/logo.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicons/logo.png') }}">
    <link rel="manifest" href="{{ asset('img/favicons/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('img/favicons/safari-pinned-tab.svg') }}" color="#1f292d">
    <meta name="msapplication-TileColor" content="#1f292d">
    <meta name="theme-color" content="#1f292d">
    <meta name="csrf-token" content="ywyyWicCYhMSkL6bzifkywtvrNWXbbmmXb5yZhRY">
    <meta name="format-detection" content="telephone=no">

    <link href="{{ asset('css/stylee46a.css?id=b4a9499b271a1c9ec5bcc59c3123663b') }}" rel="stylesheet">

    <link rel="apple-touch-icon" href="{{ asset('img/favicons/logo.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicons/logo.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicons/logo.png') }}">
    <link rel="manifest" href="img/favicons/site.webmanifest">
    <link rel="mask-icon" href="{{ asset('img/favicons/logo.png') }}" color="#1f292d">
    <meta name="msapplication-TileColor" content="#1f292d">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&amp;family=Archivo:wght@400;600;700&amp;family=Open+Sans:wght@400;600;700;800&amp;display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    </head>
     

<!-- main header -->
<!-- Loading animation -->
<div id="loader">
    <div><img src="img/logo.png" alt="Fun Farming Logo" width="100%"></div>
</div>


<svg width="0" height="0">
    <defs>
        <clipPath id="clip-path-image-1" transform="scale(0.0041666666666667, 0.0056179775280899)" clipPathUnits="objectBoundingBox">
            <path d="M221 169.7L239 9a8 8 0 00-7.1-8.9 7.6 7.6 0 00-1.4 0L7.5 13a8 8 0 00-7.5 8l.1 131a8 8 0 007.4 8l204.9 17a8 8 0 008.6-7.2z"/>
        </clipPath>
        <clipPath id="clip-path-image-2" transform="scale(0.0035211267605634, 0.0054644808743169)" clipPathUnits="objectBoundingBox">
            <path d="M28.4 1.5L249 0a25 25 0 0114.8 4.5 20.8 20.8 0 018.7 15c2 17 11 116 11 116s5.6 30.6-21 33c-5.5.5-238 14-238 14s-20.2.4-24-17.2A25 25 0 010 159L6.3 26.5A30 30 0 019.6 14c3-5.6 8.5-11.6 18.8-12.4z"/>
        </clipPath>
        <clipPath id="clip-path-image-3" transform="scale(0.0020876826722338, 0.0028409090909091)" clipPathUnits="objectBoundingBox">
            <path d="M37.8526 344.755L0.0509148 8.89477C-0.44325 4.50421 2.7154 0.544369 7.10596 0.0501979C7.5547 -0.0003087 8.00692 -0.0127294 8.45776 0.013058L471.44 26.5065C475.677 26.749 478.987 30.2577 478.983 34.5015L478.705 308.847C478.701 313.008 475.509 316.47 471.362 316.812L46.4595 351.833C42.1488 352.189 38.3364 349.053 37.8526 344.755Z"/>
        </clipPath>
    </defs>
</svg>
<div class="c-sub-header">
    <div class="c-sub-header__main">
        <nav class="c-sub-header__nav" role="navigation">
            <ul class="c-sub-header__nav-list">
                <li class="c-sub-header__nav-item  ">
                    <a class="c-sub-header__link" href="{{ route('about')}}">
                        Who are we
                    </a>
                </li>
                <li class="c-sub-header__nav-item  ">
                    <a class="c-sub-header__link" href="{{ route('faq')}}">
                        Frequently Asked Questions
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<header class="o-header  ">
    <div class="o-header__main  js-header-main">
        <a class="o-header__logo" href="{{ route('home')}}">
            <img
                width="50"
                height="50"
                alt="Fun Farming Uganda Logo"
                src="{{ asset('img/logo.png')}}"
            >
        </a>
        <div class="o-header__nav">
            <nav class="c-nav" role="navigation">
                <ul class="c-nav__list">
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('home')}}" tabindex="-1">
                            Home
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('about')}}" tabindex="-1">
                            About Us
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('activities')}}" tabindex="-1">
                            Activities
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('lounge')}}" tabindex="-1">
                            Farm Lounge
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('blog')}}" tabindex="-1">
                            Blog
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('gallery')}}" tabindex="-1">
                            Gallery
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('farmfood')}}" tabindex="-1">
                            FarmFood
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('contact')}}" tabindex="-1">
                            Contact
                        </a>
                    </li>
                    <li class="c-nav__item  c-nav__item--cart">
                        <a class="c-cart-button  " href="{{ route('shop')}}" data-item="0">
                            <i class="c-cart-button__icon">
                                <span class="c-cart-button__icon-placeholder">
                                    <span class="c-cart-button__speed-icons">
                                        <span class="c-cart-button__speed-icon"></span>
                                        <span class="c-cart-button__speed-icon"></span>
                                    </span>
                                    <svg width="32" height="32">
                                        <use href="{{ asset('img/icon-cart.svg#cart')}}"></use>
                                    </svg>
                                </span>
                            </i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <li class="c-nav__item  c-nav__item--cart c-nav__item--cart-mobile">
            <a class="c-cart-button  " href="{{ route('shop')}}" data-item="0">
                <i class="c-cart-button__icon">
                    <span class="c-cart-button__icon-placeholder">
                        <span class="c-cart-button__speed-icons">
                            <span class="c-cart-button__speed-icon"></span>
                            <span class="c-cart-button__speed-icon"></span>
                        </span>
                        <svg width="32" height="32">
                            <use href="{{ asset('img/icon-cart.svg#cart')}}"></use>
                        </svg>
                    </span>
                </i>
            </a>
        </li>
        <div class="o-header__toggle  js-nav-trigger">
            <button class="c-hamburger js-overlay-menu-trigger" aria-expanded="false" aria-controls="overlay-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>
<header class="o-header   is-sticky js-sticky-header " hidden>
    <div class="o-header__main  js-header-main">
        <a
            class="o-header__logo"
            href="{{ route('home')}}"
            tabindex="-1"
            aria-label="Home"
        >
            <img
                width="50"
                height="50"
                alt="Fun Farming Uganda Logo"
                src="{{ asset('img/logo.png')}}"
            >
        </a>
        <div class="o-header__nav">
            <nav class="c-nav" role="navigation">
                <ul class="c-nav__list">
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('home')}}" tabindex="-1">
                            Home
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('about')}}" tabindex="-1">
                            About Us
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('activities')}}" tabindex="-1">
                            Activities
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('lounge')}}" tabindex="-1">
                            Farm Lounge
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('blog')}}" tabindex="-1">
                            Blog
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('gallery')}}" tabindex="-1">
                            Gallery
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('farmfood')}}" tabindex="-1">
                            FarmFood
                        </a>
                    </li>
                    <li class="c-nav__item ">
                        <a class="c-nav__link" href="{{ route('contact')}}" tabindex="-1">
                            Contact
                        </a>
                    </li>
                    <li class="c-nav__item  c-nav__item--cart">
                        <a class="c-cart-button  " href="{{ route('shop')}}" data-item="0">
                            <i class="c-cart-button__icon">
                                <span class="c-cart-button__icon-placeholder">
                                    <span class="c-cart-button__speed-icons">
                                        <span class="c-cart-button__speed-icon"></span>
                                        <span class="c-cart-button__speed-icon"></span>
                                    </span>
                                    <svg width="32" height="32">
                                        <use href="{{ asset('img/icon-cart.svg#cart')}}"></use>
                                    </svg>
                                </span>
                            </i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <li class="c-nav__item  c-nav__item--cart c-nav__item--cart-mobile">
            <a class="c-cart-button  " href="{{ route('shop')}}" data-item="0">
                <i class="c-cart-button__icon">
                    <span class="c-cart-button__icon-placeholder">
                        <span class="c-cart-button__speed-icons">
                            <span class="c-cart-button__speed-icon"></span>
                            <span class="c-cart-button__speed-icon"></span>
                        </span>
                        <svg width="32" height="32">
                            <use href="{{ asset('img/icon-cart.svg#cart')}}"></use>
                        </svg>
                    </span>
                </i>
            </a>
        </li>
        <div class="o-header__toggle  js-nav-trigger">
            <button
                class="c-hamburger js-overlay-menu-trigger"
                aria-expanded="false"
                aria-controls="overlay-menu"
                tabindex="-1"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>


<!-- overlay -->

<div class="o-overlay-menu  js-overlay-menu" id="overlay-menu" hidden>
    <div class="o-overlay-menu__bar">
        <a class="o-overlay-menu__logo" href="{{ route('home')}}" tabindex="-99">
            <img
                width="50"
                height="50"
                alt="Fun Farming Uganda Logo"
                src="{{ asset('img/favicons/logo.png')}}"
            >
        </a>
        <div class="o-overlay-menu__toggle">
            <button
                class="c-close  js-overlay-menu-trigger"
                aria-expanded="true"
                aria-controls="overlay-menu"
                tabindex="-1"
            ></button>
        </div>
    </div>
    <nav class="o-overlay-menu__nav" role="navigation">
        <div class="o-overlay-menu__cart">
            <a class="c-cart-button   c-cart-button--animate" href="{{ route('shop')}}" data-item="0">
                <i class="c-cart-button__icon">
                    <span class="c-cart-button__icon-placeholder">
                        <span class="c-cart-button__speed-icons">
                            <span class="c-cart-button__speed-icon"></span>
                            <span class="c-cart-button__speed-icon"></span>
                        </span>
                        <svg width="32" height="32">
                            <use href="{{ asset('img/icon-cart.svg#cart')}}"></use>
                        </svg>
                    </span>
                </i>
            </a>
        </div>
        <ul class="o-overlay-menu__list">
            <li class="o-overlay-menu__item  is-active ">
                <a class="o-overlay-menu__link" href="{{ route('home')}}">
                    Home
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('activities')}}">
                    Activities
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('farmfood')}}">
                    FarmFood
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('lounge')}}">
                    Farm Lounge
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('gallery')}}">
                    Gallery
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('blog')}}">
                    Blog
                </a>
            </li>
            <li class="o-overlay-menu__item ">
                <a class="o-overlay-menu__link" href="{{ route('contact')}}">
                    Contact
                </a>
            </li>
        </ul>
        <ul class="o-overlay-menu__sublist">
            <li class="o-overlay-menu__subitem ">
                <a class="o-overlay-menu__sublink" href="{{ route('shop')}}">
                    FarmShop
                </a>
            </li>
            <li class="o-overlay-menu__subitem ">
                <a class="o-overlay-menu__sublink" href="{{ route('about')}}">
                    About Us
                </a>
            </li>
            <li class="o-overlay-menu__subitem ">
                <a class="o-overlay-menu__sublink" href="{{ route('about')}}">
                    Frequently Asked Questions
                </a>
            </li>
            <li class="o-overlay-menu__subitem ">
                <a class="o-overlay-menu__sublink" href="{{ route('references')}}">
                    Our Customer Reviews
                </a>
            </li>

        </ul>
    </nav>

</div>
 <!-- end overlay -->
<!-- /.main-header -->


    {{ $slot }}

<!-- main footer -->
<footer class="o-footer ">
    <div class="o-footer__main">
        <div class="o-footer__body">
            <a class="o-footer__logo" href="">
                <img
                    width="70%"
                    height="100%"
                    alt="Fun Farming Uganda Logo"
                    src="{{ asset('img/logo.png')}}"
                >
            </a>
            <div class="o-footer__locations">
                <h4 class="o-footer__label" style="display: block" href="">Our location</h4>
                <ul class="o-footer__list">
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="https://maps.app.goo.gl/jLuhVcs7ArMqH7Lv5">Nakaseke (Uganda, Kampala)</a>
                    </li>
                    <li class="o-footer__item" style="padding: 4px 0;">&nbsp;</li>
                    <h4 class="o-footer__label" style="display: block" href="">Website Routes</h4>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('home')}}">Home</a>
                    </li>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('activities')}}">Activities</a>
                    </li>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('about')}}">About Us</a>
                    </li>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('lounge')}}">Farm Lounge</a>
                    </li>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('blog')}}">Blog</a>
                    </li>
                    <li class="o-footer__item">
                        <a class="o-footer__link" href="{{route('gallery')}}">Gallery</a>
                    </li>
                </ul>
            </div>
            <div class="o-footer__info">
                <div class="o-footer__contact">
                    <ul class="o-footer__list">
                        <li class="o-footer__item">
                            <a class="o-footer__link" href="tel:+256772826680">
                                <i>
                                    <svg width="15" height="15">
                                        <use href="{{ asset('img/icon-phone.svg#phone')}}"></use>
                                    </svg>
                                </i>
                                <span>+256 772 826 680</span>
                            </a>
                        </li>
                        <li class="o-footer__item">
                            <a class="o-footer__link" href="mailto:meddy@funfarminguganda.com">
                                <i>
                                    <svg width="18" height="17">
                                        <use href="{{ asset('img/icon-message.svg#message')}}"></use>
                                    </svg>
                                </i>
                                <span>meddy@funfarminguganda.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="o-footer__social">
                    <li class="o-footer__channel  linkedin">
                        <a
                            class="o-footer__icon"
                            target="_blank"
                            title="Linkedin"
                            href="#"
                        >
                            <svg width="22" height="22">
                                <use href="{{ asset('img/social/linkedin.svg#linkedin')}}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="o-footer__channel  facebook">
                        <a
                            class="o-footer__icon"
                            target="_blank"
                            title="Facebook"
                            href="#"
                        >
                            <svg width="22" height="22">
                                <use href="{{ asset('img/social/facebook.svg#facebook')}}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="o-footer__channel  instagram">
                        <a
                            class="o-footer__icon"
                            target="_blank"
                            title="Instagram"
                            href="#"
                        >
                            <svg width="22" height="22">
                                <use href="{{ asset('img/social/instagram.svg#instagram')}}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="o-footer__channel  youtube">
                        <a
                            class="o-footer__icon"
                            target="_blank"
                            title="Youtube"
                            href="#"
                        >
                            <svg width="22" height="22">
                                <use href="{{ asset('img/social/youtube.svg#youtube')}}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="o-footer__channel  tiktok">
                        <a
                            class="o-footer__icon"
                            target="_blank"
                            title="Tiktok"
                            href="#"
                        >
                            <svg width="22" height="22">
                                <use href="{{ asset('img/social/tiktok.svg#tiktok')}}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="o-footer__menu">
                <h4 class="o-footer__label">Fun Farming Uganda</h4>
                <ul class="o-footer__list">
                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="{{ route('references')}}">
                            Customer Reviews
                        </a>
                    </li>

                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="{{ route('shop')}}">
                            Shop From Our Farm
                        </a>
                    </li>
                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="{{ route('contact')}}">
                            Contact Us
                        </a>
                    </li>
                    <li class="o-footer__item" style="padding: 4px 0;">&nbsp;</li>
                    <h3 class="o-footer__label">Support</h3>
                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="">
                            Frequently Asked Questions
                        </a>
                    </li>
                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="{{route('support')}}">
                            Need Support?
                        </a>
                    </li>
                    <li class="o-footer__item ">
                        <a class="o-footer__link" href="{{route('privacy')}}">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="o-footer__art">
        <div class="o-footer__image"></div>
    </div>
    <div class="o-footer__bottom">
        <div class="o-subfooter">
            <div class="o-subfooter__main">
                <p class="o-subfooter__copyright" id="currentYear">
                    &copy; Fun Farming <span id="year"></span>
                </p>
                
                <script>
                    // Get the current year
                    var currentYear = new Date().getFullYear();
                
                    // Update the year in the HTML
                    document.getElementById("year").innerHTML = currentYear;
                </script>
                <div class="o-subfooter__trademark">
                    <a
                        class="c-trademark"
                        href="https://funfarminguganda.com"
                        target="_blank"
                        aria-label="Looking Forward To Your Visit"
                    >
                        <span class="c-trademark__text">
                            <span>Fun Farming Uganda</span>
                            <span class="c-trademark__love" title="Thanks For Visiting Fun Farming Uganda"></span>

                        </span>

                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- /.main-footer -->

<!-- Back to Top Button -->
<button id="backToTopBtn" onclick="scrollToTop()">
    &uarr;
</button>

<script>
     // Hide the loader when the page has finished loading
     window.onload = function () {
        document.getElementById("loader").style.display = "none";
    };

    // Function to scroll to the top of the page
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Show/hide the back to top button based on scroll position
    window.onscroll = function() {
        showBackToTopButton();
    };

    function showBackToTopButton() {
        var btn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
</script>




    <script defer type="text/javascript" src="{{ asset('js/manifest8fec.js?id=59cad3ae328f232cc6381495a8d66768')}}"></script>
    <script defer type="text/javascript" src="{{ asset('js/vendore724.js?id=4c2ae8725a39b063a58520c8ff7e244a')}}"></script>
    <script defer type="text/javascript" src="{{ asset('js/site/app4233.js?id=49bdb89e1c686c465fb7327dd0a6b90b')}}"></script>
    <script>
var lastCheck = new Date();
var caffeineSendDrip = function () {
    var ajax = window.XMLHttpRequest
        ? new XMLHttpRequest
        : new ActiveXObject('Microsoft.XMLHTTP');

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 204) {
            lastCheck = new Date();
        }
    };

    ajax.open('GET.html', '/genealabs/laravel-caffeine/drip');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send();
};

setInterval(function () {
    caffeineSendDrip();
}, 300000);

if (2000 > 0) {
    setInterval(function () {
        if (new Date() - lastCheck >= 7082000) {
            location.reload(true);
        }
    }, 2000);
}
    </script>
    <script>
var lastCheck = new Date();
var caffeineSendDrip = function () {
    var ajax = window.XMLHttpRequest
        ? new XMLHttpRequest
        : new ActiveXObject('Microsoft.XMLHTTP');

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 204) {
            lastCheck = new Date();
        }
    };

    ajax.open('GET.html', '/genealabs/laravel-caffeine/drip');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send();
};

setInterval(function () {
    caffeineSendDrip();
}, 300000);

if (2000 > 0) {
    setInterval(function () {
        if (new Date() - lastCheck >= 7082000) {
            location.reload(true);
        }
    }, 2000);
}
    </script>

</script>


<script>
        // Create a new link element
    var link = document.createElement('link');

    // Set attributes for the link element
    link.rel = 'stylesheet';
    link.href = "{{ asset('css/stylee46a.css?id=b4a9499b271a1c9ec5bcc59c3123663b') }}";
    link.type = 'text/css';

    // Append the link element to the head of the document
    document.head.appendChild(link);

</script>
<!-- webscripts -->

