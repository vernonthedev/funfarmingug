<x-app-layout meta-title="" meta-description="">
<div class="l-main">
        <div class="o-component-area">

            <div class="o-hero  o-hero--main">


                <div class="o-hero__main">
                    <div class="o-hero__video">
                        <div class="c-video">
                            <div class="c-video__placeholder">
                                <div class="c-video__iframe  js-youtube-player" {{--  loading="lazy"
                                        data-youtube-link=""
                                        data-auto-play="1"
                                        data-disable-kb="1"
                                        data-controls="0"
                                        data-loop="1"
                                        id="home-hero-video"  --}}>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="o-hero__title-area" data-kal="slide-up">
                        <h1 class="o-hero__title">
                            Welcome to Fun Farming Uganda
                            <br>
                            Where Agriculture Meets Adventure!
                            <br>
                        </h1>
                        <a class="c-button     " href="{{ route('activities') }}">
                            <span class="c-button__text">View Activities</span>
                        </a>
                        <div class="o-hero__rating">
                            <a class="c-rating  c-rating--boxed" target="_blank" href="#">
                                <div class="c-rating__stars">
                                    <span class="c-star  c-star--full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewbox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="full-star" fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="half-star" fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="c-star  c-star--full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewbox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="full-star" fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="half-star" fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="c-star  c-star--full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewbox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="full-star" fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="half-star" fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="c-star  c-star--full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewbox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="full-star" fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="half-star" fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="c-star  c-star--half">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewbox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path fill="#e9ebf5"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="full-star" fill="currentColor"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97l3.669-3.178a1 1 0 0 0-.57-1.752l-4.829-.41-1.89-4.458a1 1 0 0 0-1.84 0L9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                                <path class="half-star" fill="none"
                                                    d="M12 18.27l4.151 2.505a1 1 0 0 0 1.49-1.083L16.54 14.97 9.19 9.63l-4.828.41a1 1 0 0 0-.57 1.752L7.46 14.97l-1.102 4.722a1 1 0 0 0 1.491 1.083L12 18.27z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <span class="c-rating__score">
                                    <span class="c-rating__points">9.4</span>
                                    <span class="c-rating__max">/ 10</span>
                                </span>
                                <span class="c-rating__reviews">195 reviews</span>
                                <span class="c-rating__platform">via Google</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

<style>
    /* For mobile devices */
@media only screen and (max-width: 600px) {
    .o-certainties__badge img {
        max-width: 100%;
        height: auto;
    }
}

</style>

            <div class="u-slant-top u-mb-neg-slant-height u-bg-primary--500">
                <div class="l-contain  o-component-area__component">
                    <div class="o-certainties" data-kal="slide-up">
                        <figure class="o-certainties__badge">
                            <img src="img/logo.png" alt="Fun Farming Uganda" style="width: 100%;"  width="400px" height="400px">
                        </figure>
                        <div>
                            <h2 class="o-certainties__heading">
                                "Discover the joy of team events at our farm oasis!
                            </h2>
                            <ul class="u-list--clean">
                                <li class="o-certainties__list-item">Everyone's invited to a day of laughter and connection.
                                </li>
                                <li class="o-certainties__list-item">Unleash the fun with well-organized activities that
                                    guarantee maximum enjoyment.</li>
                                <li class="o-certainties__list-item">Connect, learn, and share unforgettable moments with a
                                    community of enthusiasts.</li>
                                <li class="o-certainties__list-item">Our exciting activities are led by passionate staff,
                                    making every moment a memorable experience.</li>
                                <li class="o-certainties__list-item">Expect the unexpected - we always go the extra mile to
                                    make your day extraordinary.</li>
                                <li class="o-certainties__list-item">Any hiccups along the way? We've got you covered –
                                    we're here to fix them!</li>
                                <li class="o-certainties__list-item">Delight in the flavors of local Ugandan farm cuisine,
                                    a culinary adventure for your taste buds.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div class="u-slant-top-reversed u-mt-neg-slant-height   u-bg-neutral--0"></div>
            <div id="component-item-2" data-type="videoText"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
                <div class="o-component-area__component l-contain  l-contain--wide " style="margin-bottom: 30px;">
                    <div class="o-vt__main  ">
                        <div class="o-vt__video">
                            <div class="c-video">
                                <div class="c-video__placeholder">
                                    <div>
                                        <img src="img/home/team-building2.jpg"
                                            alt="Fun farm games being played at Fun Farming Uganda"
                                            style="border-radius:20px;"
                                            class="u-clip-path" loading="lazy" data-id="clip-path-image-3"
                                             />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="o-vt__content  s-text">

                            <h2>Thrilling Activities Await!</h2>
                            <p>
                                Embark on a journey of excitement with our diverse range of activities.
                                <br>
                                <br>
                                Whether it's picking fresh produce, joining workshops, or participating in seasonal events,
                                there's always something for everyone at Fun Farming Uganda.
                            </p>


                            <a class="c-button  c-button--big    " href="{{ route('activities') }}">
                                <span class="c-button__text">View More!</span>
                                <i class="c-button__icon">
                                    <svg width="7" height="10">
                                        <use href="img/icon-arrowRight.svg#arrowRight"></use>
                                    </svg>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>






            <div id="component-item-5" data-type="textImage"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
                <div class="o-component-area__component l-contain  l-contain--wide ">
                    <div class="l-double  l-double--wide  l-double--reversed   u-spacing-pt6">
                        <div class="l-double__left">
                            <img class=" u-clip-path" loading="lazy" data-id="clip-path-image-1" width="50%" data-kal="slide-left"
                                src="img/webimgs/david-holding-goat.jpg" alt="Farmer David holding a farm goat"
                                style="border-radius: 20px;">
                        </div>
                        <div class="l-double__right s-text" data-kal="slide-up">
                            <h2>Moo towards us for customized advice</h2>
                            <p>Gathering the horns? Our cow-league David is ready to advise you so that you'll reap applause
                                for this team-building.</p>
                            <p>
                                <strong>Easily schedule a conversation</strong> and feel the Cowzy Farm Vibes roaring
                                through your herd.
                            </p>
                            <a class="c-button c-button--big"
                                href="https://www.calendly.com/farmfun/kennismakingsgesprek-teambuilding-farmfun?back=1&amp;month=2023-02">
                                <span class="c-button__text">Schedule Conversation</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div id="component-item-6" data-type="testimonialLogos"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
                <div class="o-component-area__component l-contain" height="200px;">
                    <div class="o-testimonial">
                        <div class="c-customer-logo-slider c-logos js-customer-logo-slider" data-has-swipe-events="true">
                            <div class="c-customer-logo-slider__container  js-customer-logo-slide-container">
                                <div class="c-customer-logo-slider__item   c-customer-logo-slider__item--position-1   js-customer-logo-slide"
                                    data-slide-id="0" data-logo-id="1033">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/fao-logo.svg');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   c-customer-logo-slider__item--position-2   js-customer-logo-slide"
                                    data-slide-id="1" data-logo-id="1034">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/unfe.png');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   c-customer-logo-slider__item--position-3   js-customer-logo-slide"
                                    data-slide-id="2" data-logo-id="1035">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/unyfa.png');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   c-customer-logo-slider__item--position-4   js-customer-logo-slide"
                                    data-slide-id="3" data-logo-id="1036">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/fao-logo.svg');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   c-customer-logo-slider__item--position-5   js-customer-logo-slide"
                                    data-slide-id="4" data-logo-id="1037">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/unfe.png');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   is-hidden   js-customer-logo-slide"
                                    data-slide-id="5" data-logo-id="1038">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/fao-logo.svg');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   is-hidden   js-customer-logo-slide"
                                    data-slide-id="6" data-logo-id="1039">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/fao-logo.svg');"></div>
                                </div>
                                <div class="c-customer-logo-slider__item   is-hidden   js-customer-logo-slide"
                                    data-slide-id="7" data-logo-id="1040">
                                    <div class="c-customer-logo-slider__logo"
                                        style="background-image: url('img/partners/unfe.png');"></div>
                                </div>


                                <div class="c-customer-logo-slider__placeholder"></div>
                            </div>
                            <button class="c-customer-logo-slider__button  previous  js-slider-button" title="Previous">
                                <svg width="7" height="10">
                                    <use href="img/icon-arrowLeft.svg#arrowLeft"></use>
                                </svg>
                            </button>
                            <button class="c-customer-logo-slider__button  next  js-slider-button" title="Next">
                                <svg width="7" height="10">
                                    <use href="img/icon-arrowRight.svg#arrowRight"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="component-item-7" data-type="topReviews"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
        
            </div>
            <div id="component-item-8" data-type="button"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
                <div class="o-component-area__component l-contain">
                    <div class="o-button-component o-button-component--align-center">
                        <h2 class="u-spacing-mb2">Create your ideal team-building event</h2>
                        <div class="u-spacing-mb2">
                            <p>Choose your ideal activity, add catering, check availability, instantly generate your quote,
                                or book online. We'll get the exact number of participants later.</p>
                        </div>
                        <a class="c-button u-spacing-mb8" href="{{ route('activities') }}">
                            <span class="c-button__text">View Our Activities</span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="component-item-9" data-type="locations"
                class="
          u-mb-neg-slant-height
          u-slant-top                             ">
                <div class="o-component-area__component">
                    <div class="o-locations js-locations  o-locations--slant ">
                        <div class="o-locations__intro">
                            <div class="s-text u-spacing-pt8" data-kal="slide-up">
                                <h2 class="">There's always a FarmFun near you</h2>
                                <p>
                                    Fun Farm is located in Uganda and deeply rooted in the Butalangu province, Nakaseke
                                    District, who rules the roost at each of the farms? Our dairy cows! While they watch the
                                    hilarious antics of you and your cow-leagues or friends, our Chief Executive Farmers and
                                    game leaders provide you with a farmtastic day.
                                </p>
                                <h3>our location</h3>
                                <ul class="o-locations__list">
                                    <li class="o-locations__list-item">
                                        <button data-location-id="1"
                                            class="o-locations__list-item-button js-locations-list-item">
                                            FunFarm Nakaseke (UG)
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class=" u-spacing-mt8" data-kal="slide-up">
                                <div class="c-map">
                                    <img class="c-map__background" loading="lazy"
                                        src="img/locations/Nakaseke_District_in_Uganda.svg.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="o-locations__cards js-locations-cards" data-kal="slide-up">
                            <div hidden class="o-locations__card hidden js-locations-card" data-location-id="1">
                                <img class="o-locations__card-image u-clip-path" loading="lazy"
                                    data-id="clip-path-image-3" src="img/webimgs/fun-farm-image.jpg" alt="">
                                <div class="o-locations__card-content">
                                    <div class="o-locations__card-left">
                                        <h3 class="o-locations__card-title">Fun Farming Buffet</h3>
                                        <p class="s-text s-text--on-dark">
                                            For fantastic team-building events, bachelor/bachelorette parties, and Ugandan
                                            hospitality, you're at the right place on the farm of Fun Farm Uganda
                                        </p>
                                        <a class="c-button u-spacing-mt3" href="{{route('contact')}}">
                                            <span class="c-button__text">Discover this location</span>
                                        </a>
                                    </div>
                                    <div class="o-locations__card-right s-text s-text--on-dark">
                                        <strong class="">Activities offered:</strong>
                                        <ul>
                                            <li>Team Building</li>
                                            <li>Farm Activities</li>
                                            <li>Farm Visits</li>
                                            <li>Farm Kitchen</li>
                                            <li>Kids' Parties</li>
                                            <li>Farm Camps</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="component-item-10" data-type="button"
                class="u-mb-neg-slant-height

          u-slant-top

          ">
                <div class="o-component-area__component l-contain ">
                    <div class="o-button-component o-button-component--align-center">
                        <h2 class="u-spacing-mb2">Take the bull by the horns!</h2>
                        <a class="c-button   u-spacing-mb8  " href="{{route('activities')}}">
                            <span class="c-button__text">To all activities</span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="component-item-11" data-type="usps"
                class="u-mb-neg-slant-height

          u-slant-top
          u-bg-primary--500
          ">
                <div class="o-component-area__component l-contain ">
                    <div class="o-usp-row " data-kal="slide-up">
                        <ul class="o-usp-row__list">
                            <li class="o-usp-row__item">
                                <i class="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="img/usp/marker.svg#marker"></use>
                                    </svg>
                                </i>
                                <p class="o-usp-row__label">
                                    Have Fun
                                    <br>
                                    <strong>always close by</strong>
                                </p>
                            </li>
                            <li class="o-usp-row__item">
                                <i class="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="img/usp/calendar.svg#calendar"></use>
                                    </svg>
                                </i>
                                <p class="o-usp-row__label">
                                    Imagine Yourself
                                    <strong>
                                        ideal
                                        <br>
                                        event
                                    </strong>
                                    together
                                </p>
                            </li>
                            <li class="o-usp-row__item">
                                <i class="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="img/usp/trees.svg#trees"></use>
                                    </svg>
                                </i>
                                <p class="o-usp-row__label">
                                    Minimum
                                    <br>
                                    <strong>mid</strong>
                                    impact
                                </p>

                            </li>
                            <li class="o-usp-row__item">
                                <i class="o-usp-row__icon">
                                    <svg width="56" height="56">
                                        <use href="img/usp/people.svg#people"></use>
                                    </svg>
                                </i>
                                <p class="o-usp-row__label">
                                    For thinkers and doers,
                                    <br>
                                    <strong>young and less young</strong>
                                </p>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <aside class="o-cookie-bar  is-accepted  js-cookie-bar">
        <div class="l-contain">
            <div class="o-cookie-bar__main">
                <p class="o-cookie-bar__text">This website uses Cookies. <a class="o-cookie-bar__link"
                        href="{{route('privacy')}}">Click HERE</a> for more information.</p>
                <button class="o-cookie-bar__button js-disable-cookie-bar">Close</button>

            </div>
        </div>
    </aside>
</x-app-layout>
