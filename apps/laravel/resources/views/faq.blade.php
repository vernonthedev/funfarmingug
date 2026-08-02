<x-app-layout meta-title="" meta-description=""">
<div class="l-main  u-bg-neutral--100">

<div class="o-imagebanner">
    <img src="img/gallery/funfarm_n26.png" alt="Farm Lounge Header Image" />
</div>

<div class="o-faq">

    <div class="o-faq__intro">
        <h1 class="o-faq__title">Frequently Asked Questions</h1>
        <div class="o-faq__description  s-text">
            <p>Thanks to our years of experience, we can already estimate which questions you are pondering. There
                is a very good chance that you will find them here...</p>
        </div>
    </div>

    <div class="o-faq__grid  js-faq">
        <div class="o-faq__filters">
            <h3 class="o-faq__subheader">Categories</h3>
            <ul class="c-linklist">
                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle  is-active " data-category="2">Most
                        Asked</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="12">About the Target
                        Audience</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="5">About the
                        Activities</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="3">About
                        Reservations</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="14">About Modifying
                        Reservations</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="11">About Accommodations
                        and Local Operators</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="15">About Payment and
                        Administration</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="4">About Catering and
                        Drinks</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="10">About Practical
                        Matters</button>
                </li>

                <li class="c-linklist__item">
                    <button class="c-linklist__link  js-category-toggle " data-category="13">About Your Questions
                        Afterwards</button>
                </li>

            </ul>
        </div>

        <div class="o-faq__suggest">
            <div class="c-suggest">
                <h3 class="c-suggest__title">Do you have another question?</h3>
                <p class="c-suggest__content">Feel free to contact us.</p>
                <div class="c-suggest__action">
                    <a class="c-text-button     " href="{{route('contact')}}">
                        <span class="c-text-button__text">Contact</span>
                        <i class="c-text-button__icon">
                            <svg width="7" height="10">
                                <use href="img/icon-arrowRight.svg#arrowRight"></use>
                            </svg>
                        </i>
                    </a>
                </div>
            </div>
        </div>

        <div class="o-faq__main">


            <div class="o-questions u-mb-neg-slant-height">
                <div class="o-questions__top  u-overflow-hidden">
                    <svg class="u-slant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
                        <polygon points="-1 1 1440 96 1440 106 -1 106 -1 96" style="fill:currentColor" />
                    </svg>
                </div>
                <div class="o-questions__main">
                    <div class="o-questions__left" width="100%">
                        <div class="c-faq">
                            <h2 class="c-faq__title">
                                <span>
                                    Frequently Asked Questions</span>
                                <span class="c-faq__icon">
                                    <svg width="64" height="45">
                                        <use href="img/icon-cow--question.svg#cow--question"></use>
                                    </svg>
                                </span>
                            </h2>
                            <ul class="c-faq__list  js-toggle">
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">
                                        What clothes should I wear?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>It is best to wear sporty clothes that are comfortable. We're a farm, so
                                            you don't have to dress up. Regular jeans are fine. You might get a
                                            little dirty due to grass or straw, for example. You certainly don't
                                            need to wear boots, sturdy shoes are sufficient to walk around our farm.
                                            High walking shoes are ideal for wet grass. In warm weather, provide
                                            extra dry clothes, because a water feature can be provided. Ultimately,
                                            it will be your cow colleagues who determine whether or not you brought
                                            dry clothes. ;-)</p>
                                      
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">What is the difference between the
                                        Farm Expert Games and Farm Games?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>Both programs are fun-oriented, coordinated by a great game supervisor,
                                            competitive, suitable for a broad target group (age, fitness,
                                            challenge,...) and always last (more than) 3 hours.&nbsp;</p>
                                        <p>The Farm Games include accessible thinking and doing assignments, ideal
                                            for a fun day out.</p>
                                        <p>The Farm Expert Games are more thoughtful, detailed thinking and doing
                                            assignments. You have to communicate and connect with each other a
                                            little more, although 'fun' always comes first. Ideal for companies that
                                            attach importance to a stronger herd feeling.</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">Can everyone participate in the
                                        activities?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>The majority of the activities are suitable for everyone. Less sporty or
                                            less mobile people or pregnant women can also enjoy our activities. You
                                            can still decide at the moment to skip an activity as an individual.</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">Can you also do something for
                                        children?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>At some locations there is an offer for children. No activities are
                                            organized for mixed groups of adults and children. By children we mean
                                            -14 years.</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">How many people do you need to be
                                        at least?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>This depends on the activity. Unfortunately, we do not have activities
                                            for less than 10 people. We do not recommend booking if the herd is
                                            smaller than 10 participants. (For Farm Expert Games it is 12). If you
                                            make a reservation with the minimum number of participants and someone
                                            falls ill, the activity can continue as normal. The stated minimum
                                            number of participants will always be invoiced, even if you come with
                                            fewer.&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">
                                        What time do the activities start?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>The activities at FarmFun do not have a fixed starting time. Everything
                                            depends on your wishes and our availability.</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">Can we bring our own drinks to
                                        FunFarming</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>You are not supposed to bring your own drinks.
                                            <br>The drinks are available on site at reasonable prices and will be
                                            included in the final invoice.
                                        </p>
                                    </div>
                                </li>
                             
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">
                                        What time do we have to register for the activities?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>If you arrive fifteen minutes before the start of your activity, you will
                                            be plenty of time. You will find the booked hour in your confirmation
                                            email. Are any participants late? No problem. We will decide at the
                                            moment and after joint consultation whether we will start already or
                                            wait a little longer. This may affect the end time. Is that an issue?
                                            Report this to the game supervisor on site, so that he can take this
                                            into account as much as possible.</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">
                                        How does the payment work?</h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>After your booking has been processed internally, you will receive within
                                            1 day; An advance invoice will be sent by email within 2 weeks. This
                                            amounts to 50% of the expected invoice amount. The payment term is 14
                                            days after invoice. The advance amount must always be paid before the
                                            event date. You will receive the final invoice after the activity and
                                            you must also pay it within 14 days.</p>
                                        <p>As long as you don't receive an invoice, you don't have to pay anything.
                                        </p>
                                        <p>We currently only work via bank transfer, so no VISA, PayPal,...</p>
                                    </div>
                                </li>
                                <li class="c-faq__item">
                                    <h3 class="c-faq__question  js-toggle-switch">What happens in rain or heat?
                                    </h3>
                                    <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                        <p>What about rain? Especially no worries. Each farm has sufficient indoor
                                            space. Not only for our animals, but also for the stray wildlife in your
                                            group. Our FarmFumbrellas give you sufficient protection when it rains.
                                            <br>
                                            <br>Is it very hot that day? We will also adjust the program then. For
                                            example, you can choose a water feature. Because our FarmFumbrellas may
                                            not provide enough protection here, it is best to bring a change of dry
                                            clothes.&nbsp;
                                        </p>
                                        <p>There is always plenty of drink available!</p>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</x-app-layout>
