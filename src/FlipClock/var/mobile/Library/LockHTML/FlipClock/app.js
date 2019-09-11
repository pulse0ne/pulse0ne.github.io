const animatedCard = {
    props: ['animation', 'digit', 'colorMode'],
    template: /*html*/`<div class="flip-card" :class="animation" :style="bgStyle"><span :style="fgStyle">{{ digit }}</span></div>`,
    computed: {
        fgStyle() {
            return {
                color: this.colorMode === 'dark' ? '#fefefe' : '#333333'
            };
        },
        bgStyle() {
            return {
                background: this.colorMode === 'dark' ? '#333333' : '#fefefe'
            };
        }
    }
};

const staticCard = {
    props: ['position', 'digit', 'colorMode'],
    template: /*html*/`<div :class="position" :style="bgStyle"><span :style="fgStyle">{{ digit }}</span></div>`,
    computed: {
        fgStyle() {
            return {
                color: this.colorMode === 'dark' ? '#fefefe' : '#333333'
            };
        },
        bgStyle() {
            return {
                background: this.colorMode === 'dark' ? '#333333' : '#fefefe'
            };
        }
    }
};

const combinedCard = {
    props: ['digit', 'shuffle', 'unit', 'colorMode'],
    components: {
        'animated-card': animatedCard,
        'static-card': staticCard
    },
    template: /*html*/`
    <div class="combined-card">
        <static-card position="upper-card" :digit="current" :color-mode="colorMode"></static-card>
        <static-card position="lower-card" :digit="previous" :color-mode="colorMode"></static-card>
        <animated-card :animation="animation1" :digit="digit1" :color-mode="colorMode"></animated-card>
        <animated-card :animation="animation2" :digit="digit2" :color-mode="colorMode"></animated-card>
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
    <combined-card unit="hours" :digit="hours" :shuffle="hoursShuffle" :color-mode="colorMode" :style="cardStyle('hours')"></combined-card>
    <combined-card unit="minutes" :digit="minutes" :shuffle="minutesShuffle" :color-mode="colorMode" :style="cardStyle('minutes')"></combined-card>
    <combined-card unit="seconds" :digit="seconds" :shuffle="secondsShuffle" :color-mode="colorMode" v-if="includeSeconds"></combined-card>
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
            timerId: null,
            colorMode: window.colorMode || 'dark',
            twelveHour: window.twelveHour === undefined ? false : window.twelveHour,
            includeSeconds: window.includeSeconds === undefined ? true : window.includeSeconds,
            gutterWidth: window.gutterWidth === undefined ? 24 : window.gutterWidth
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
            let hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            if (this.twelveHour && hours > 12) {
                hours -= 12;
            }
            if (hours !== this.hours) {
                this.hours = hours;
                this.hoursShuffle = !this.hoursShuffle;
            }
            if (minutes !== this.minutes) {
                this.minutes = minutes;
                this.minutesShuffle = !this.minutesShuffle;
            }
            if (seconds !== this.seconds) {
                this.seconds = seconds;
                this.secondsShuffle = !this.secondsShuffle;
            }
        },
        cardStyle(unit) {
            return {
                'margin-right': unit !== 'minutes' || this.includeSeconds ? `${this.gutterWidth}px` : 0 
            };
        }
    }
};

/* uncomment for testing off-platform */
// window.includeSeconds = false;
// window.colorMode = 'light';
// window.twelveHour = true;
// window.gutterWidth = 12;
// window.scale = 5;

new Vue({ render: h => h(app) }).$mount('#app');
