<template>
    <div class="container">
        <header>
            <img src="/img/logo-300.png">
        </header>
        <form>
            <div class="field" v-if="hasField('name')">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="John Doe" required>
                </div>
            </div>
            <div class="field" v-if="hasField('email')">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="john@johndoe.com" required>
                </div>
            </div>
            <div class="field" v-if="hasField('phone')">
                <label class="label">Phone</label>
                <div class="control">
                    <input class="input" type="text" placeholder="555-555-5555" required>
                </div>
            </div>
            <div class="field" v-if="hasField('date')">
                <label class="label">Date</label>
                <date-picker></date-picker>
            </div>
            <div class="field" v-if="hasField('location')">
                <label class="label">Location</label>
                <div class="control">
                    <input type="text" class="input">
                </div>
            </div>
            <div class="field" v-if="hasField('weddingPackage')">
                <label class="label">Package</label>
                <flat-select :values="weddingPackages" v-model="fields.weddingPackage"></flat-select>
            </div>
            <div class="field" v-if="hasField('sessionType')">
                <label class="label">
                    Session Type
                    <span class="help">- Optional</span>
                </label>
                <flat-select :values="sessionTypes" v-model="fields.sessionType"></flat-select>
            </div>
            <div class="field" v-if="hasField('message')">
                <label class="label">Message</label>
                <textarea id="formMessage" rows="6" class="textarea"></textarea>
            </div>
            <hr class="slim">
            <div class="field controls" v-if="message">
                <div class="notification has-text-centered" :class="messageClass" v-html="message"></div>
            </div>
            <div class="field controls is-grouped" v-else>
                <div class="control">
                    <a class="button" @click.prevent="onSubmit">{{actionTitle}}</a>
                </div>
                <div class="control">
                    <a class="button is-white" @click.prevent="onSubmit">Cancel</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import FlatSelect from '../components/forms/flat-select.vue';
import DatePicker from '../components/forms/date-picker.vue';

export default {
    components: { FlatSelect, DatePicker },
    data() {
        return {
            fields: null,
            title: null,
            actionTitle: 'Send Email',
            sessionTypes: [
                { name: 'General', value: 1 },
                { name: 'Senior', value: 2 },
                { name: 'Newborn', value: 3 },
                { name: 'Mini', value: 4 },
                { name: 'Wedding', value: 5 }
            ],
            weddingPackages: [
                { name: 'Basic', value: 1 },
                { name: 'Silver', value: 2 },
                { name: 'Gold', value: 3 },
                { name: 'Platinum', value: 4 }
            ],
            message: null,
            messageClass: null
        };
    },
    mounted() {
        switch(parseInt(this.$route.params.id))
        {
            case 1:   // general
                this.formId = 'a2cd0b46-b87e-4393-b4f4-7ef84e07112d';
                this.fields = { 'name': null, 'email': null, 'phone': null, 'sessionType': this.sessionTypes[0], 'message': null };
                break;
            case 2:   // wedding
                this.formId = 'daa39044-f212-4921-b449-35edef571752';
                this.fields = { 'name': null, 'email': null, 'phone': null, 'date': null, 'location': null, 'weddingPackage': this.weddingPackages[0] };
                this.title = 'Request Date';
                this.actionTitle = 'Send Request';
                break;            
        }        
    },
    methods: {
        hasField(fieldName) {
            return this.fields.hasOwnProperty(fieldName);
        },
        submit() {
            axios
                .post('https://api.darkstone.io/emails', { fields: this.fields, formId: this.formId })
                .then(res => {
                    this.message = 'Message send successfully!';
                    this.messageClass = 'is-info';

                    //setTimeout(() => this.onClose(), 2000);
                })
                .catch(err => {
                    this.message = 'Something went wrong :(<br>Please email us directly at <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a>';
                    this.messageClass = 'is-danger';
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 500px;
}

header {
    max-height: 50px;
    margin-top: 15px;
    margin-bottom: 20px;

    img {
        display: block;
        height: 100%;
        width: auto;
        margin: 0 auto;
    }
}

form {
    background: #f6f6f6;
    border: 1px solid #eaeaea;
    padding: 20px;

    .field.controls {
        margin-top: 1.2rem;
    }
}
</style>
