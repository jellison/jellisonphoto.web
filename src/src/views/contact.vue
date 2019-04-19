<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/map-portfolio-header.jpg" class="is-hidden-mobile">
            <hr>
            <h2>How to Reach Us</h2>
            <hr>
            <div class="columns">
                <div class="column">
                    <div class="column-content">
                        <p>
                            To email us, fill out the information sheet or email us directly at
                            <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a> and we will get back to you as
                            quickly as possible.
                        </p>
                    </div>
                </div>
            </div>            
            <form class="main">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="John Doe">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="john@johndoe.com">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Phone</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="555-555-5555">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Session Type
                                <span class="help">- Optional</span>
                            </label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>General Sessions</option>
                                        <option>Senior sessions</option>
                                        <option>Newborn Sessions</option>
                                        <option>Mini Sessions</option>
                                        <option>Weddings</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <textarea rows="6" class="textarea"></textarea>
                </div>
                <div class="field">
                    <a class="button" @click.prevent="onSubmit">Submit</a>
                </div>
            </form>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
import axios from 'axios';
import NavBar from "../components/navbar.vue";
import FooterNav from "../components/footer.vue";

export default {
    components: {
        NavBar,
        FooterNav
    },
    methods: {
        onSubmit(evt) {            
            axios
                .post('https://api.darkstone.io/emails', { fields: this.fields, formId: 'a2cd0b46-b87e-4393-b4f4-7ef84e07112d' })
                .then(res => {
                    $(evt.target).replaceWith('<div class="notification is-info">Message sent successfully!</div>');
                })
                .catch(err => {
                    $(evt.target).replaceWith('<div class="notification is-info">Something went wrong :( Please email us directly at <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a></div>');
                });
        }
    }
}
</script>

<style lang="scss">
form.main {
    background: #f5f5f5;
    border: 1px solid #ddd;
    margin-top: 20px;
    padding: 15px;
}
</style>
