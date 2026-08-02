<x-app-layout meta-title="" meta-description="">
    <div class="l-main c-post">

        <div class="c-post__title-row  u-bg-neutral--100">
            <div class="l-contain">

                <div class="c-post__back">
                    <a class="c-text-button  c-text-button--icon c-text-button--is-reversed    " href="{{ route('gallery')}}">
                        <span class="c-text-button__text">More Images</span>
                        <i class="c-text-button__icon">
                            <svg width="7" height="10">
                                <use href="{{ asset('img/icon-arrowLeft.svg#arrowLeft')}}"></use>
                            </svg>
                        </i>
                    </a>
                </div>

                <h1 class="c-post__title is-kal-end" data-kal="slide-up">Our Lounge Facilities
                </h1>

                <div class="c-post__date is-kal-end" data-kal="slide-up">
                    <strong>Five Star</strong>
                    <time datetime="2023-11-30 11:32:12">Housing</time>
                </div>

            </div>
        </div>

        <div class="u-bg-neutral--100  u-color-neutral--0  u-overflow-hidden">
            <svg class="u-slant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
                <polygon points="-1 1 1440 96 1440 106 -1 106 -1 96" style="fill:currentColor"></polygon>
            </svg>
        </div>

        <div class="c-post__image l-contain is-kal-end" data-kal="slide-up">
            <picture class="u-clip-path" data-id="clip-path-image-1">
                <source media="(min-width: 425px)"
                    srcset="img/gallery/funfarm_n26.png">
                <img src="img/gallery/funfarm_n26.png"
                    alt="Teambuilding budget over?">
            </picture>
        </div>

        <div class="c-post__components is-kal-end" data-kal="slide-up">
            <div id="component-item-1" data-type="text" class="u-mb-neg-slant-height
      ">
                <div class="o-component-area__component l-contain ">

                    <div class="s-text   ">
                        <p>Nestled amidst picturesque hills, our farm lounge offers weary travelers a sanctuary of relaxation and rejuvenation. Imagine sipping on a freshly brewed cup of coffee or indulging in a refreshing glass of lemonade, all while soaking in panoramic views of the rolling countryside from our cozy veranda. Our lounge is more than just a place to rest; it's a haven where visitors can unwind, recharge, and connect with nature. With comfortable seating areas, ambient lighting, and a welcoming atmosphere, it's no wonder that our farm lounge has earned a reputation as the ultimate destination for those seeking solace after a long journey. Whether you're admiring the sunset over the horizon or simply basking in the tranquility of rural life, our farm lounge promises an experience that soothes the soul and leaves you feeling refreshed and invigorated. So, why settle for ordinary when you can elevate your travel experience with a visit to our idyllic oasis in the hills?</p>
                    </div>

                </div>
            </div>
        </div>
        
        <div class="o-availability__food-hint">
            <span>Make your bookings today</span>
        </div>




    </div>
</x-app-layout>