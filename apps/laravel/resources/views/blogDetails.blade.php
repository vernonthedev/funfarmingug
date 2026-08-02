<x-app-layout :meta-title="$post->meta_title ?: $post->title" :meta-description="$post->meta_description ?: ''">
<div class="l-main c-post">

        <div class="c-post__title-row  u-bg-neutral--100">
            <div class="l-contain">

                <div class="c-post__back">
                    <a class="c-text-button  c-text-button--icon c-text-button--is-reversed    " href="{{ route('blog')}}">
                        <span class="c-text-button__text">More Blogs</span>
                        <i class="c-text-button__icon">
                            <svg width="7" height="10">
                                <use href="{{ asset('img/icon-arrowLeft.svg#arrowLeft')}}"></use>
                            </svg>
                        </i>
                    </a>
                </div>

                <h1 class="c-post__title is-kal-end" data-kal="slide-up">{{ $post->title }}<
                </h1>

                <div class="c-post__date is-kal-end" data-kal="slide-up">
                    <strong>Date:</strong>
                    <time datetime="2023-11-30 11:32:12">{{ $post->getFormattedDate() }}</time>
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
                width="100%"
                    srcset="storage/{{ $post->thumbnail }}">
                <img src="storage/{{ $post->thumbnail }}"
                width="100%"
                    alt="{{ $post->title }}"
            </picture>
        </div>

        <div class="c-post__components is-kal-end" data-kal="slide-up">
            <div id="component-item-1" data-type="text" class="u-mb-neg-slant-height
      ">
                <div class="o-component-area__component l-contain ">

                    <div class="s-text">
                        <p>{!! $post->body !!} 
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</x-app-layout>