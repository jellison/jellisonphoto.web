<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/general/portfolio-header-02.jpg">
            <hr>
            <h2>Frequently Asked Questions</h2>
            <hr>
            <div class="faqs">
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>What should I wear?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>Wear solid colored clothing so that we see all your faces and no one person stands out. If you wear stripes or flowers, you will stand out from the rest of the group.</p>
                        <p>Choose muted tones (no bright colors!) so that you are the main focus of the photos and not your clothes. Also, bright colors project light (especially oranges, reds, and bright yellows) and that can make you appear larger.</p>
                        <p>Choose 1-3 colors for your group that go nicely together. This doesn't mean to pick blue and have everyone wearing a slightly different shade of blue! Pick tones that go together and make sure everyone works within that color palette. For example, white/tan, blue, and mustard yellow, or white/tan, burgundy, and navy, or tan, light olive green, and denims. This idea of limiting colors is why wedding parties look so great together!</p>
                        <p>Choose a top with sleeves at least to the elbow. This is to make your arms not appear large. Because your arms take up more skin area than your face, they will draw attention away from your face and make your arms seem larger than they are.</p>
                        <p>Remember that shoes do matter. Make sure the shoes match the outfit and don't have any random bright colors on them.</p>
                        <p>Wear makeup. Even if you don't normally wear makeup, wear some for pictures. Don't go crazy with it, but wear a little more than you normally do. Remember to blend well with your foundation, though, because the camera will pick up an unblended contouring line!</p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>How do you deliver the photos?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            All sessions are delivered via a downloadable file with a print release except league sport
                            packages.
                        </p>
                    </div>
                </div>                
                <h3>Pricing</h3>                
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>Do you charge a fee if I'm late or don't show up to my session?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            No, I do not charge a fee if you're late. Your session is based on time and starts at the
                            appointment time. If you're 20 minutes late to a session, you'd only end up with 40 minutes of
                            shooting time. This is dangerous when you're booked for a mini session. Sessions are often
                            booked back to back and I can't move another session or start it late, so if you're 10 minutes
                            late for a mini session then you're very limited in your session time. As far as a fee if you do
                            not show up, I do not have one. However, if you do not show up for a session, it is my policy to
                            require a nonrefundable deposit for your next booked session to hold your spot. I understand
                            things happen and do not at all mean to sound harsh.
                        </p>
                    </div>
                </div>                
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>Do you require a deposit for sessions?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            At this time, I only require a nonrefundable deposit on weddings to book. A deposit will be
                            required on the next session for those who have cancelled on the day of a session or with very
                            short notice.
                        </p>
                    </div>
                </div>
                <h3>Sessions</h3>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>How many outfit changes can I do?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            Since my sessions are based on time, I would suggest limiting outfit changes to 2 different
                            outfits for families and 3-4 for single portraits. If you have small children, consider the
                            amount of time it takes to change their clothes and decide how much time you want of your hour
                            to be spent changing clothes. I would suggest layers that can easily be removed to added to for
                            a different look rather than a trip back to the car.
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>How far do you travel?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            The general session fee allows for a 30 minute travel time. I will travel further, but there is a
                            $20 charge for additional travel per 20 minutes of travel time.
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>How many pictures can I expect in my session?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            This varies greatly based on the age of the client, number of clients, and experience of the
                            client. For example, a high school senior that enjoys having pictures taken and is the only one
                            having pictures done can have 70-100 edited images from their session. On the other hand, a 2
                            year old that has never had pictures done and doesn't enjoy pictures may only have 30. I do my
                            very best to make everyone comfortable during sessions and am usually very good with little
                            children, but experience with a photographer does help!
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>Should I do outdoor or indoor pictures, and can you do both?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            First, outdoor or indoor pictures are a personal preference, but I prefer outdoor pictures. You
                            end up with a lot more options, and nature is beautiful! With indoor photography, lighting
                            becomes and issue and indoor flash lights may need to be used. I can do both. I have the
                            equipment for indoor lighting. So whatever you prefer, I can do!
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>What do I need to bring to my session?</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            A positive attitude is the most important thing! Pictures are supposed to be fun. I know that
                            they are stressful for some, especially for families. But it is about capturing a moment, not
                            being perfect. So if you have a very energetic 2 year old, embrace that and let me capture it!
                            Other than that, you are welcome to bring any props that you want that broadcast who you are.
                            Maybe you have a quilt that has been in the family for years. Maybe you're a high school senior
                            with a love for music. Bring that quilt. Bring that guitar. Pictures with personality are the
                            most fun!
                        </p>
                    </div>
                </div>
                <div class="faq">
                    <div class="faq-title" @click.prevent="toggleView">
                        <a>
                            <h4>Do you offer a shorter session than an hour? I just want a few pictures.</h4>
                            <div class="maximizer">
                                <i class="fas fa-plus"></i>
                            </div>
                        </a>
                    </div>
                    <div class="faq-body">
                        <p>
                            I offer mini sessions 4 time a year. Usually once a season. I do Easter, something in the summer,
                            Fall leaves, and Christmas minis. Watch for those on Facebook at J Ellison Photography. Outside
                            of those mini sessions, I do not offer shorter sessions. Mini sessions are scheduled back to
                            back on a given day and location; thus making it cost effective for me to offer the
                            cheaper/shorter sessions. A shorter session outside of mini session day isn't cost effective for
                            me and I end up loosing money after I pay for a babysitter if needed, drive to location, shoot
                            the session, and then spend time editing.
                        </p>
                        <p>
                            If you need a shorter session outside of mini session day, consider finding someone else who
                            needs a shorter session and split the cost of the full session; remember that I do not have a
                            cap on the number of people included in a session so that would be something you could do!
                        </p>
                    </div>
                </div>                
            </div>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import FooterNav from "../components/footer.vue";

export default {
    components: {
        NavBar,
        FooterNav
    },
    methods: {
        toggleView(evt){
            var $this = $(evt.currentTarget);
            var $body = $this.parents('.faq').children('.faq-body');
            var $link = $('.maximizer > *', $this);
            
            if($body.is(':visible'))
            {
                $link.attr('data-icon', 'plus');
                $body.slideUp();
            }
            else
            {
                $link.attr('data-icon', 'minus');
                $body.slideDown();
            }
        }
    }
};
</script>

<style lang="scss">
.faqs h3 {
    font-size: 30px;
}

.faq {
    margin: 20px 0;
}

.faq-title {
    background: #e8e8e8;
}

.faq-title a {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.faq-title h4 {
    color: #333;
    font-size: 20px;
    line-height: 16px;
    margin: 0;
}

.faq-title a {
    color: #333;
}

.faq-body {
    padding: 20px 20px 0 20px;
    display: none;
}

.faq-body p {
    padding: 10px 0;
}

.faq-body p:first-child,
.faq-body p:last-child {
    padding-top: 0;
}
</style>
