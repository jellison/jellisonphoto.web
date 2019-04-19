<template>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <div class="box">
                <form class="main">
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="John Doe" required v-model="fields.name">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="john@johndoe.com" required v-model="fields.email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="555-555-5555" required v-model="fields.phone">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">
                                    Session Type
                                    <span class="help">- Optional</span>
                                </label>
                                <div class="control">
                                    <div class="select">
                                        <select v-model="fields.sessionType">
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
                        <textarea id="formMessage" rows="6" class="textarea" v-model="fields.message"></textarea>
                    </div>
                    <div class="field">
                        <a class="button" @click.prevent="onSubmit">Submit</a>
                    </div>
                </form>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click.prevent="onClose"></button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isActive: true,
            fields: {
                name: '',
                email: '',
                phone: '',
                sessionType: 'General Sessions',
                message: ''
            }
        };
    },
    methods: {
        onClose() {
            this.isActive = false;   
            setTimeout(() => this.$destroy(), 2000);
        },
        onSubmit(evt) {            
            axios
                .post('https://api.darkstone.io/emails', { fields: this.fields, formId: 'a2cd0b46-b87e-4393-b4f4-7ef84e07112d' })
                .then(res => {
                    $(evt.target).replaceWith('<div class="notification is-info">Message sent successfully!</div>');
                    setTimeout(() => this.onClose(), 2000);
                })
                .catch(err => {
                    $(evt.target).replaceWith('<div class="notification is-info">Something went wrong :( Please email us directly at <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a></div>');
                });
        }
    }
};
</script>

<style>
</style>
