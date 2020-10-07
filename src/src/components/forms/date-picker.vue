<template>
    <div>
        <p class="control has-icons-right">
            <input ref="input" class="input" v-model="value" />
            <span class="icon is-small is-right">
                <i class="fas fa-calendar-alt"></i>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    props: ["value"],
    mounted() {
        if (!$.fn.datepicker.language["en"]) {
            $.fn.datepicker.language["en"] = {
                days: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                monthsShort: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                today: "Today",
                clear: "Clear",
                dateFormat: "mm/dd/yyyy",
                timeFormat: "hh:ii aa",
                firstDay: 0,
            };
        }

        var $this = this;

        $(this.$refs.input).datepicker({
            language: "en",
            autoClose: true,
            onSelect: function onSelect(fd, date) {
                $this.$emit("input", fd);
            },
        });
    },
};
</script>

<style></style>
