<template>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h2>Request Date</h2>
                <hr />
                <form class="main" novalidate>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="John Doe" v-model="fields.name">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="john@johndoe.com" v-model="fields.email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label">Phone</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="555-555-5555" v-model="fields.phone">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <label class="label">Date</label>
                            <date-picker v-model="fields.date"></date-picker>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Location</label>
                        <div class="control">
                            <input type="text" class="input" v-model="fields.location">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Package</label>
                        <div class="flat-select">
                            <a :class="{ 'is-selected': fields.package == 'Basic' }" @click.prevent="selectPackage('Basic')">Basic</a>
                            <a :class="{ 'is-selected': fields.package == 'Silver' }" @click.prevent="selectPackage('Silver')">Silver</a>
                            <a :class="{ 'is-selected': fields.package == 'Gold' }" @click.prevent="selectPackage('Gold')">Gold</a>
                            <a :class="{ 'is-selected': fields.package == 'Platinum' }" @click.prevent="selectPackage('Platinum')">Platinum</a>
                        </div>
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
import axios from 'axios';
import DatePicker from '../forms/date-picker.vue';

export default {
    props: ['defaultPackage'],
    components: { DatePicker },
    data() {
        return {
            isActive: true,
            fields: {
                name: '',
                email: '',
                phone: '',
                date: '',
                location: '',
                package: this.defaultPackage
            }
        };
    },
    methods: {
        selectPackage(selected) {
            this.fields.package = selected;
        },
        onClose() {
            this.isActive = false;   
            setTimeout(() => this.$destroy(), 2000);
        },
        onSubmit(evt) {            
            axios
                .post('https://api.darkstone.io/emails', { fields: this.fields, formId: 'daa39044-f212-4921-b449-35edef571752' })
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
