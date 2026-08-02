<article class="o-post-overview__item is-kal-end" data-kal="slide-up">
    <a class="o-post-overview__link" href="{{ route('blog.show', $post) }}">
        <figure class="o-poster-overview__figure">
            <img class="u-clip-path" alt="{{ $post->title }}" src="storage/{{ $post->thumbnail }}">
        </figure>
        <div class="o-poster-overview__content">
            <h2 class="c-poster__title">{{ $post->title }}</h2>
            <div class="u-color-secondary--400 u-spacing-mb2">
                <img class="o-poster-overview__date-icon" alt="calendar icon"
                     src="/img/calendar.svg" width="16" height="16">
                {{ $post->getFormattedDate() }}
            </div>
            <div class="o-poster-overview__teaser u-spacing-mt2 u-spacing-mb2">
                {{ $post->shortBody() }}
            </div>

            <div class="u-spacing-mt4">
                <button class="c-button">
                    <span class="c-button__text">Read More</span>
                </button>
            </div>
        </div>
    </a>
</article>
