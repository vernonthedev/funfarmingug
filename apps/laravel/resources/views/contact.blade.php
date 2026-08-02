<x-app-layout meta-title="" meta-description="">
    <style>
        /* Styles for the modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
        }
    </style>

    <div class="l-main">

        <!-- Modal to display contact successful message after post request-->
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p id="modalMessage"></p>
            </div>
        </div>

        @if (session()->has('message'))
            <input type="hidden" id="modalTrigger" value="{{ session()->get('message') }}">
        @endif


        <div class="u-cow-spot" data-pos="left right"></div>
        <div class="u-wrapper">
            <div class="l-contain  o-block">
                <div class="l-double">
                    <div class="l-double__left">
                        <img class="o-duplex__image  u-clip-path" data-id="clip-path-image-1"
                            src="img/gallery/funfarm_n27.png" alt="Main Yard Of Fun Farming Uganda">
                    </div>
                    <div class="l-double__right  s-text">
                        <h1>
                            Contact us</h1>
                        <p>Would you like more information about our activities or our approach? Take the bull by the horns
                            and phone call, email us or check the
                            <a href="{{ route('faq') }}">
                                FREQUENTLY ASKED QUESTIONS</a>
                        </p>
                        <h3 class="o-contact__subheader">Fun Farming Uganda</h3>
                        <div class="o-contact__datagrid">
                            <div data-pos="left">
                                <a href="tel:+256772826680" class="o-contact__link  o-contact__phone">+256 772 826 680</a>
                                <a href="mailto:support@funfarminguganda"
                                    class="o-contact__link  o-contact__mail">support@funfarminguganda.com</a>
                                <p class="u-spacing-mt4">
                                    NAKASEKE DISTRICT
                                </p>
                            </div>
                            <div data-pos="right">
                                <p>Follow us here for cool events and news</p>
                                <ul class="o-contact__social">
                                    <li class="o-contact__channel  linkedin">
                                        <a class="o-contact__icon" target="_blank" title="Linkedin"
                                            href="https://www.linkedin.com/company/funfarming/">
                                            <svg width="22" height="22">
                                                <use href="img/social/linkedin.svg#linkedin"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="o-contact__channel  facebook">
                                        <a class="o-contact__icon" target="_blank" title="Facebook"
                                            href="https://www.facebook.com/funfarming">
                                            <svg width="22" height="22">
                                                <use href="img/social/facebook.svg#facebook"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="o-contact__channel  instagram">
                                        <a class="o-contact__icon" target="_blank" title="Instagram"
                                            href="https://www.instagram.com/funfarming/">
                                            <svg width="22" height="22">
                                                <use href="img/social/instagram.svg#instagram"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="o-contact__channel  youtube">
                                        <a class="o-contact__icon" target="_blank" title="Youtube"
                                            href="https://www.youtube.com/channel/#">
                                            <svg width="22" height="22">
                                                <use href="img/social/youtube.svg#youtube"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="o-contact__channel  tiktok">
                                        <a class="o-contact__icon" target="_blank" title="Tiktok"
                                            href="https://www.tiktok.com/funfarming">
                                            <svg width="22" height="22">
                                                <use href="img/social/tiktok.svg#tiktok"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u-color-primary--500  u-bg-neutral--0  u-overflow-hidden">
            <svg class="u-slant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
                <polygon points="-1 1 1440 96 1440 106 -1 106 -1 96" style="fill:currentColor" />
            </svg>
        </div>
        <div class="o-questions u-mb-neg-slant-height">
            <div class="o-questions__top  u-overflow-hidden">
                <svg class="u-slant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
                    <polygon points="-1 1 1440 96 1440 106 -1 106 -1 96" style="fill:currentColor" />
                </svg>
            </div>
            <div class="o-questions__main">
                <div class="o-questions__left">
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
                                    <p>It is best to wear sporty clothes that are comfortable. We're a farm, so you don't
                                        have to dress up. Regular jeans are fine. You might get a little dirty due to grass
                                        or straw, for example. You certainly don't need to wear boots, sturdy shoes are
                                        sufficient to walk around our farm. High walking shoes are ideal for wet grass. In
                                        warm weather, provide extra dry clothes, because a water feature can be provided.
                                        Ultimately, it will be your cow colleagues who determine whether or not you brought
                                        dry clothes. ;-)</p>

                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">What is the difference between the Farm Expert
                                    Games and Farm Games?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>Both programs are fun-oriented, coordinated by a great game supervisor, competitive,
                                        suitable for a broad target group (age, fitness, challenge,...) and always last
                                        (more than) 3 hours.&nbsp;</p>
                                    <p>The Farm Games include accessible thinking and doing assignments, ideal for a fun day
                                        out.</p>
                                    <p>The Farm Expert Games are more thoughtful, detailed thinking and doing assignments.
                                        You have to communicate and connect with each other a little more, although 'fun'
                                        always comes first. Ideal for companies that attach importance to a stronger herd
                                        feeling.</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">Can everyone participate in the activities?
                                </h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>The majority of the activities are suitable for everyone. Less sporty or less mobile
                                        people or pregnant women can also enjoy our activities. You can still decide at the
                                        moment to skip an activity as an individual.</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">Can you also do something for children?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>At some locations there is an offer for children. No activities are organized for
                                        mixed groups of adults and children. By children we mean -14 years.</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">How many people do you need to be at least?
                                </h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>This depends on the activity. Unfortunately, we do not have activities for less than
                                        10 people. We do not recommend booking if the herd is smaller than 10 participants.
                                        (For Farm Expert Games it is 12). If you make a reservation with the minimum number
                                        of participants and someone falls ill, the activity can continue as normal. The
                                        stated minimum number of participants will always be invoiced, even if you come with
                                        fewer.&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">
                                    What time do the activities start?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>The activities at FarmFun do not have a fixed starting time. Everything depends on
                                        your wishes and our availability.</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">Can we bring our own drinks to Fun Farming
                                    Uganda
                                </h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>You are not supposed to bring your own drinks.
                                        <br>The drinks are available on site at reasonable prices and will be included in
                                        the final invoice.
                                    </p>
                                </div>
                            </li>

                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">
                                    What time do we have to register for the activities?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>If you arrive fifteen minutes before the start of your activity, you will be plenty
                                        of time. You will find the booked hour in your confirmation email. Are any
                                        participants late? No problem. We will decide at the moment and after joint
                                        consultation whether we will start already or wait a little longer. This may affect
                                        the end time. Is that an issue? Report this to the game supervisor on site, so that
                                        he can take this into account as much as possible.</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">
                                    How does the payment work?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>After your booking has been processed internally, you will receive within 1 day; An
                                        advance invoice will be sent by email within 2 weeks. This amounts to 50% of the
                                        expected invoice amount. The payment term is 14 days after invoice. The advance
                                        amount must always be paid before the event date. You will receive the final invoice
                                        after the activity and you must also pay it within 14 days.</p>
                                    <p>As long as you don't receive an invoice, you don't have to pay anything.</p>
                                    <p>We currently only work via bank transfer, so no VISA, PayPal,MTN Mobile Money, Airtel
                                        Mobile Money...</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">What happens in rain or heat?</h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>What about rain? Especially no worries. Each farm has sufficient indoor space. Not
                                        only for our animals, but also for the stray wildlife in your group. Our
                                        FarmFumbrellas give you sufficient protection when it rains.
                                        <br>
                                        <br>Is it very hot that day? We will also adjust the program then. For example, you
                                        can choose a water feature. Because our FarmFumbrellas may not provide enough
                                        protection here, it is best to bring a change of dry clothes.&nbsp;
                                    </p>
                                    <p>There is always plenty of drink available!</p>
                                </div>
                            </li>
                            <li class="c-faq__item">
                                <h3 class="c-faq__question  js-toggle-switch">Is FunFarming accessible by public transport?
                                </h3>
                                <div class="c-faq__answer  s-text  js-toggle-content" hidden>
                                    <p>
                                        Rest Assured!, Its located a few kilometers away from Bukalangu Town Centre
                                    </p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="o-questions__right  s-text--on-dark">
                    <form  method="post" action="{{ route('contact.store') }}">
                        @csrf
                       
                        <noscript>
                            Please activate your javascript to fill in this contact form.
                        </noscript>
                        
                        <h3 class="o-form__title">
                            Any questions unanswered?
                            <br>
                            We are happy to answer them.
                        </h3>
                        <ul hidden class="c-form-feedback  js-error-area"
                            data-feedback="We wijzen je graag op het volgende:"></ul>
                        <input type="hidden" name="origin" value="name">
                        <div class="o-form__body">
                            <div class="o-form__row">
                                <div class="o-form__field" data-size="6">
                                    <div class="name c-form-element     js-form-element">
                                        <label class="c-form-element__label" for="name">
                                            Name
                                        </label>
                                        <input class="c-input  c-input--clean  " type="text" id="name"
                                            name="name" dusk="name" placeholder="Enter your name" value="">
                                        <p id="name-error" class="c-form-element__error  js-form-element-error"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="o-form__row">
                                <div class="o-form__field" data-size="6">
                                    <div class="email c-form-element     js-form-element">
                                        <label required class="c-form-element__label" for="email">
                                            E-mail
                                        </label>
                                        <input class="c-input  c-input--clean " type="email" id="email"
                                            name="email" dusk="email" placeholder="Enter your email" value=""
                                            onblur="validateEmail(this);" autocomplete="email">
                                        <script>
                                            function validateEmail(email) {
                                                const emailError = document.querySelector('#email-error');
                                                if (emailError) emailError.parentNode.removeChild(emailError);

                                                if (email.value) {
                                                    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
                                                    if (!regexMatch)
                                                        email.insertAdjacentHTML('afterend',
                                                            '<div id="email-error" class="c-form-element__error">The email address entered is not valid</div>');
                                                }
                                            }
                                        </script>
                                        <p id="email-error" class="c-form-element__error  js-form-element-error"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="o-form__row">
                                <div class="o-form__field" data-size="6">
                                    <div class="phone c-form-element     js-form-element">
                                        <label class="c-form-element__label" for="phone">
                                            Telephone
                                        </label>
                                        <input required class="c-input  c-input--clean  " type="text" id="phone"
                                            name="phoneNumber" dusk="phone" placeholder="Enter phone number"
                                            value="">
                                        <p id="phone-error" class="c-form-element__error  js-form-element-error"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="o-form__row">
                                <div class="o-form__field" data-size="6">
                                    <div class="form_message c-form-element     js-form-element">
                                        <label required class="c-form-element__label" for="form_message">
                                            Message
                                        </label>
                                        <textarea class="c-input  c-input--clean  " id="form_message" name="message" dusk="form_message"
                                            placeholder="Enter your message"></textarea>
                                        <p id="form_message-error" class="c-form-element__error  js-form-element-error">
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <select name="inquireType" hidden>
                                <option value="General Inquiries" selected>General Inquiries</option>
                            </select>
                            <div class="o-form__row ">
                                <div class="subscribe_newsletter_2 c-form-element     js-form-element">
                                    <p class="c-form-element__label">Subscribe to our Newsletter</p>
                                    <label class="c-checkbox" for="subscribe_newsletter_2">
                                        <input class="c-checkbox__input" type="checkbox" id="subscribe_newsletter_2" name="subscribe" value="1">

                                        <span class="c-checkbox__text">Yes, you can keep me informed of nice news. I know
                                            that I can always unsubscribe very easily.</span>
                                    </label>
                                    <p id="subscribe_newsletter_2-error"
                                        class="c-form-element__error  js-form-element-error"></p>
                                </div>
                            </div>
                        </div>

                        <button class="c-button  c-button--big" type="submit">
                                <span class="c-button__text">
                                    Send</span>
                                <i class="c-button__icon">
                                    <svg width="7" height="10">
                                        <use href="img/icon-arrowRight.svg#arrowRight"></use>
                                    </svg>
                                </i>
                            </button>

                    </form>





                </div>
            </div>
        </div>
        <div class=" u-color-neutral--100 u-bg-secondary--900 u-overflow-hidden">
            <svg class="u-slant" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
                <polygon points="-1 1 1440 96 1440 106 -1 106 -1 96" style="fill:currentColor" />
            </svg>
        </div>
        <div class="u-bg-neutral--100 u-mb-neg-slant-height">
            <div class="o-location u-spacing-pb12">
                <div class="o-location__main  u-spacing-mb2">
                    <div class="o-location__map">
                        <div class="c-location-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.569204460351!2d32.2763608!3d0.837297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c89c49c245505%3A0xb0d8551936f00965!2sFun%20Farming%20Uganda!5e0!3m2!1sen!2sug!4v1698927724672!5m2!1sen!2sug"
                                width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                    <li class="o-location__content  s-text">
                        <h2>Our locations</h2>
                        <ul class="o-location__list">
                            <li class="o-location__item">
                                <div class="o-location__icon">
                                    <a href="https://funfarminguganda.com">
                                        <img alt="farm icon" src="img/icon-farm-1.svg">
                                    </a>
                                </div>
                                <div class="o-location__info">
                                    <h3>
                                        <a class="o-location__link" href="https://funfarminguganda.com">Fun Farming
                                            Uganda</a>
                                    </h3>
                                    <p>
                                        <a class="o-location__link" href="https://funfarminguganda.com">Butalangu Town
                                            Council</a>
                                    </p>
                                    <p>
                                        <a class="o-location__link" href="https://funfarminguganda.com">NAKASEKE
                                            DISTRICT</a>
                                    </p>
                                    <div class="o-location__route">
                                        <a class="c-text-button     " href="#">
                                            <span class="c-text-button__text">Plan route</span>
                                            <i class="c-text-button__icon">
                                                <svg width="7" height="10">
                                                    <use href="img/icon-arrowRight.svg#arrowRight"></use>
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
