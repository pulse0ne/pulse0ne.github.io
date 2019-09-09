const animatedCard = {
    props: ['animation', 'digit'],
    template: /*html*/`<div class="flip-card" :class="animation"><span>{{ digit }}</span></div>`
};

const staticCard = {
    props: ['position', 'digit'],
    template: /*html*/`<div :class="position"><span>{{ digit }}</span></div>`
};

const combinedCard = {
    props: ['digit', 'shuffle', 'unit'],
    components: {
        'animated-card': animatedCard,
        'static-card': staticCard
    },
    template: /*html*/`
    <div class="combined-card">
        <static-card position="upper-card" :digit="current"></static-card>
        <static-card position="lower-card" :digit="previous"></static-card>
        <animated-card :animation="animation1" :digit="digit1"></animated-card>
        <animated-card :animation="animation2" :digit="digit2"></animated-card>
    </div>`,
    computed: {
        current() {
            const d = this.digit;
            return d < 10 ? `0${d}` : `${d}`;
        },
        previous() {
            let d = this.digit - 1;
            if (this.unit !== 'hours') {
                d = d < 0 ? 59 : d;
            } else {
                d = d < 0 ? 23 : d;
            }
            return d < 10 ? `0${d}` : `${d}`;
        },
        digit1() {
            return this.shuffle ? this.previous : this.current;
        },
        digit2() {
            return this.shuffle ? this.current : this.previous;
        },
        animation1() {
            return this.shuffle ? 'fold' : 'unfold';
        },
        animation2() {
            return this.shuffle ? 'unfold' : 'fold';
        }
    }
};

const template = /*html*/`
<div class="flip-clock">
    <combined-card unit="hours" :digit="hours" :shuffle="hoursShuffle"></combined-card>
    <combined-card unit="minutes" :digit="minutes" :shuffle="minutesShuffle"></combined-card>
    <combined-card unit="seconds" :digit="seconds" :shuffle="secondsShuffle"></combined-card>
</div>`;

const app = {
    template,
    components: { 'combined-card': combinedCard },
    data() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            hoursShuffle: true,
            minutesShuffle: true,
            secondsShuffle: true,
            timerId: null
        };
    },
    created() {
        this.updateTime();
        this.timerId = setInterval(this.updateTime, 500);
    },
    beforeDestroy() {
        clearInterval(this.timerId);
        this.timerId = null;
    },
    methods: {
        updateTime() {
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            if (hours !== this.hours) {
                this.hours = hours;
                this.hoursShuffle = !this.hoursShuffle;
            }
            if (minutes != this.minutes) {
                this.minutes = minutes;
                this.minutesShuffle = !this.minutesShuffle;
            }
            if (seconds != this.seconds) {
                this.seconds = seconds;
                this.secondsShuffle = !this.secondsShuffle;
            }
        }
    }
};
new Vue({ render: h => h(app) }).$mount('#app');
