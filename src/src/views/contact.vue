<template>
    <div ref="container">
        <nav-bar v-if="!formOnly"></nav-bar>

        <div class="container main">
            <div v-if="!formOnly">
                <img
                    src="/img/map-portfolio-header.jpg"
                    class="is-hidden-mobile"
                />
                <hr />
                <h2>How to Reach Us</h2>
                <hr />
                <div class="columns">
                    <div class="column">
                        <div class="column-content">
                            <p>
                                To email us, fill out the information sheet or
                                email us directly at
                                <a href="mailto:info@jellisonphoto.com"
                                    >info@jellisonphoto.com</a
                                >
                                and we will get back to you as quickly as
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="is-flex has-justified-center mt-4 mb-4 center-logo"
            >
                <router-link to="/">
                    <img src="/img/logo-dark.png" />
                </router-link>
            </div>
            <!-- contact form variations -->
            <form class="main" v-if="!mailingList">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="John Doe"
                                    v-model="fields.name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="john@johndoe.com"
                                    v-model="fields.email"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Phone</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="email"
                                    placeholder="555-555-5555"
                                    v-model="fields.phone"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label"
                                >Session Type
                                <span class="help">- Optional</span>
                            </label>
                            <div class="control">
                                <div class="select">
                                    <select v-model="fields.sessionType">
                                        <option
                                            :key="sessionType"
                                            v-for="sessionType of sessionTypes"
                                        >
                                            {{ sessionType }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- wedding-specific fields -->
                <div class="columns" v-if="isWedding">
                    <div class="column">
                        <div class="field">
                            <label class="label"
                                >Package
                                <span class="help">- Optional</span>
                            </label>
                            <flat-select
                                :values="[
                                    'Basic',
                                    'Silver',
                                    'Gold',
                                    'Platinum',
                                ]"
                                v-model="fields.package"
                            ></flat-select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <div class="label">
                                Date
                                <span class="help">- Optional</span>
                            </div>
                            <date-picker v-model="fields.date"></date-picker>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <div class="label">
                                Location
                                <span class="help">- Optional</span>
                            </div>
                            <div class="control">
                                <input
                                    type="text"
                                    class="input"
                                    v-model="fields.location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <textarea
                        rows="6"
                        class="textarea"
                        v-model="fields.message"
                    ></textarea>
                </div>
                <div class="field has-text-right">
                    <a
                        v-if="formOnly"
                        class="button is-outlined"
                        @click.prevent="back"
                        >Back</a
                    >
                    <a class="button" @click.prevent="submitEmail">Submit</a>
                </div>
            </form>
            <!-- end: contact form variations -->

            <!-- mailing list variation -->
            <form class="main" v-else>
                <h2>{{ mailingList.title }}</h2>
                <p class="has-text-centered mb-20">{{ mailingList.intro }}</p>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="John Doe"
                                    v-model="fields.name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="john@johndoe.com"
                                    v-model="fields.email"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field has-text-right">
                    <a
                        v-if="formOnly"
                        class="button is-outlined"
                        @click.prevent="back"
                        >Back</a
                    >
                    <a class="button" @click.prevent="joinList">Submit</a>
                </div>
            </form>
            <!-- end: mailing list variation -->
        </div>

        <footer-nav v-if="!formOnly"></footer-nav>
    </div>
</template>

<script>
import axios from "axios";
import DatePicker from "../components/forms/date-picker.vue";
import NavBar from "../components/navbar.vue";
import FooterNav from "../components/footer.vue";
import FlatSelect from "../components/forms/flat-select.vue";

const mailingLists = {
    // mini: "ea348572-e504-4163-a51a-edf96d9aab5e",
    mini: {
        id: "1ab0727a-4f34-4582-9f54-d123c2cf59f2",
        intro:
            "Mini session slots are always limited and fill up fast. They can fill up within minutes! Don't miss your opportunity to get in on limited edition minis that only happen 3-4 times a year. Join the mailing list to be the first to know about the release dates for minis and other special promotions.",
        title: "Join the Mini Session mailing list!",
    },
};

export default {
    components: {
        DatePicker,
        NavBar,
        FooterNav,
        FlatSelect,
    },
    data() {
        var sessionType = this.$route.query.sessionType;
        var sessionTypes = [
            "Regular Session",
            "Senior Session",
            "Newborn Session",
            "Studio Session",
            "Wedding",
        ];

        if (sessionType && !sessionTypes.includes(sessionType))
            sessionTypes.push(sessionType);

        return {
            sessionTypes,
            formOnly: this.$route.query.formOnly === "true",
            mailingList: mailingLists[this.$route.query.list],
            fields: {
                name: "",
                email: "",
                phone: "",
                message: "",
                sessionType: sessionType || "Regular Sessions",
                date: "",
                location: "",
                package: this.$route.query.package || "",
            },
        };
    },
    methods: {
        selectPackage(selected) {
            this.fields.package = selected;
        },
        submitEmail(evt) {
            axios
                .post("https://api.darkstone.io/emails", {
                    fields: this.fields,
                    formId: "a2cd0b46-b87e-4393-b4f4-7ef84e07112d",
                })
                .then((res) => {
                    $(evt.target).replaceWith(
                        '<div class="notification is-info mt-20 has-text-centered">Message sent successfully!</div>'
                    );
                })
                .catch((err) => {
                    $(evt.target).replaceWith(
                        '<div class="notification is-danger mt-20 has-text-centered">Something went wrong :( Please email us directly at <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a></div>'
                    );
                });
        },
        joinList(evt) {
            axios
                .post(
                    `https://api.darkstone.io/emails/lists/${this.mailingList.id}`,
                    {
                        name: this.fields.name,
                        email: this.fields.email,
                    }
                )
                .then((res) => {
                    $(evt.target).replaceWith(
                        '<div class="notification is-info mt-20 has-text-centered">Thanks for joining the mailing list!</div>'
                    );
                })
                .catch((err) => {
                    $(evt.target).replaceWith(
                        '<div class="notification is-danger mt-20 has-text-centered">Something went wrong :( Please email us directly at <a href="mailto:info@jellisonphoto.com">info@jellisonphoto.com</a></div>'
                    );
                });
        },
        back() {
            this.$router.back();
        },
    },
    computed: {
        isWedding: function () {
            return this.fields.sessionType == "Wedding";
        },
    },
};
</script>

<style lang="scss">
form.main {
    background: #f5f5f5;
    border: 1px solid #ddd;
    margin-top: 20px;
    padding: 15px;
}

.center-logo {
    img {
        max-height: 4em;
    }
}
</style>
