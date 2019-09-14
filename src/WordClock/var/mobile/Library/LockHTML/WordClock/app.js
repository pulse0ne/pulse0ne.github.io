// uncomment for testing off-platform
// window.onColor = '#ff7844';
// window.offColor = '#e0e0e0';
// window.glowEffect = false;
// window.scale = 8;

const opts = {
    onColor: window.onColor || '#1e90ff',
    offColor: window.offColor || '#d3d3d3',
    glowEffect: window.glowEffect === undefined ? true : window.glowEffect,
    blurRadius: window.blurRadius || 8
};

const glyph = {
    props: ['on'],
    template: `<div class="glyph" :style="glyphStyle"><slot></slot></div>`,
    computed: {
        glyphStyle() {
            return {
                color: this.on ? opts.onColor : opts.offColor,
                textShadow: this.on && opts.glowEffect ? `0 0 ${opts.blurRadius}px ${opts.onColor}` : null
            };
        }
    }
};

const gridTmpl = `
<div class="col">
    <div class="row">
        <v-glyph :on="true">I</v-glyph>
        <v-glyph :on="true">T</v-glyph>
        <v-glyph :on="false">E</v-glyph>
        <v-glyph :on="true">I</v-glyph>
        <v-glyph :on="true">S</v-glyph>
        <v-glyph :on="false">F</v-glyph>
        <v-glyph :on="false">T</v-glyph>
        <v-glyph :on="false">L</v-glyph>
        <v-glyph :on="false">V</v-glyph>
        <v-glyph :on="false">N</v-glyph>
        <v-glyph :on="false">E</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="false">J</v-glyph>
        <v-glyph :on="quarter">Q</v-glyph>
        <v-glyph :on="quarter">U</v-glyph>
        <v-glyph :on="quarter">A</v-glyph>
        <v-glyph :on="quarter">R</v-glyph>
        <v-glyph :on="quarter">T</v-glyph>
        <v-glyph :on="quarter">E</v-glyph>
        <v-glyph :on="quarter">R</v-glyph>
        <v-glyph :on="false">C</v-glyph>
        <v-glyph :on="false">K</v-glyph>
        <v-glyph :on="false">O</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="twenty">T</v-glyph>
        <v-glyph :on="twenty">W</v-glyph>
        <v-glyph :on="twenty">E</v-glyph>
        <v-glyph :on="twenty">N</v-glyph>
        <v-glyph :on="twenty">T</v-glyph>
        <v-glyph :on="twenty">Y</v-glyph>
        <v-glyph :on="false">X</v-glyph>
        <v-glyph :on="fivePrefix">F</v-glyph>
        <v-glyph :on="fivePrefix">I</v-glyph>
        <v-glyph :on="fivePrefix">V</v-glyph>
        <v-glyph :on="fivePrefix">E</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="half">H</v-glyph>
        <v-glyph :on="half">A</v-glyph>
        <v-glyph :on="half">L</v-glyph>
        <v-glyph :on="half">F</v-glyph>
        <v-glyph :on="false">C</v-glyph>
        <v-glyph :on="tenPrefix">T</v-glyph>
        <v-glyph :on="tenPrefix">E</v-glyph>
        <v-glyph :on="tenPrefix">N</v-glyph>
        <v-glyph :on="false">E</v-glyph>
        <v-glyph :on="to">T</v-glyph>
        <v-glyph :on="to">O</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="past">P</v-glyph>
        <v-glyph :on="past">A</v-glyph>
        <v-glyph :on="past">S</v-glyph>
        <v-glyph :on="past">T</v-glyph>
        <v-glyph :on="false">B</v-glyph>
        <v-glyph :on="seven">S</v-glyph>
        <v-glyph :on="seven">E</v-glyph>
        <v-glyph :on="seven">V</v-glyph>
        <v-glyph :on="seven">E</v-glyph>
        <v-glyph :on="seven">N</v-glyph>
        <v-glyph :on="false">L</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="one">O</v-glyph>
        <v-glyph :on="one">N</v-glyph>
        <v-glyph :on="one">E</v-glyph>
        <v-glyph :on="two">T</v-glyph>
        <v-glyph :on="two">W</v-glyph>
        <v-glyph :on="two">O</v-glyph>
        <v-glyph :on="three">T</v-glyph>
        <v-glyph :on="three">H</v-glyph>
        <v-glyph :on="three">R</v-glyph>
        <v-glyph :on="three">E</v-glyph>
        <v-glyph :on="three">E</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="four">F</v-glyph>
        <v-glyph :on="four">O</v-glyph>
        <v-glyph :on="four">U</v-glyph>
        <v-glyph :on="four">R</v-glyph>
        <v-glyph :on="fiveSuffix">F</v-glyph>
        <v-glyph :on="fiveSuffix">I</v-glyph>
        <v-glyph :on="fiveSuffix">V</v-glyph>
        <v-glyph :on="fiveSuffix">E</v-glyph>
        <v-glyph :on="six">S</v-glyph>
        <v-glyph :on="six">I</v-glyph>
        <v-glyph :on="six">X</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="nine">N</v-glyph>
        <v-glyph :on="nine">I</v-glyph>
        <v-glyph :on="nine">N</v-glyph>
        <v-glyph :on="nine">E</v-glyph>
        <v-glyph :on="false">K</v-glyph>
        <v-glyph :on="twelve">T</v-glyph>
        <v-glyph :on="twelve">W</v-glyph>
        <v-glyph :on="twelve">E</v-glyph>
        <v-glyph :on="twelve">L</v-glyph>
        <v-glyph :on="twelve">V</v-glyph>
        <v-glyph :on="twelve">E</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="eight">E</v-glyph>
        <v-glyph :on="eight">I</v-glyph>
        <v-glyph :on="eight">G</v-glyph>
        <v-glyph :on="eight">H</v-glyph>
        <v-glyph :on="eight">T</v-glyph>
        <v-glyph :on="eleven">E</v-glyph>
        <v-glyph :on="eleven">L</v-glyph>
        <v-glyph :on="eleven">E</v-glyph>
        <v-glyph :on="eleven">V</v-glyph>
        <v-glyph :on="eleven">E</v-glyph>
        <v-glyph :on="eleven">N</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="tenSuffix">T</v-glyph>
        <v-glyph :on="tenSuffix">E</v-glyph>
        <v-glyph :on="tenSuffix">N</v-glyph>
        <v-glyph :on="false">P</v-glyph>
        <v-glyph :on="false">Y</v-glyph>
        <v-glyph :on="oclock">O</v-glyph>
        <v-glyph :on="oclock">C</v-glyph>
        <v-glyph :on="oclock">L</v-glyph>
        <v-glyph :on="oclock">O</v-glyph>
        <v-glyph :on="oclock">C</v-glyph>
        <v-glyph :on="oclock">K</v-glyph>
    </div>
    <div class="row">
        <v-glyph :on="false">E</v-glyph>
        <v-glyph :on="false">N</v-glyph>
        <v-glyph :on="false">V</v-glyph>
        <v-glyph :on="false">J</v-glyph>
        <v-glyph :on="false">X</v-glyph>
        <v-glyph :on="false">L</v-glyph>
        <v-glyph :on="false">K</v-glyph>
        <v-glyph :on="false">W</v-glyph>
        <v-glyph :on="false">T</v-glyph>
        <v-glyph :on="false">F</v-glyph>
        <v-glyph :on="false">R</v-glyph>
    </div>
</div>`;

const toClear = [
    'one',
    'two',
    'three',
    'four',
    'fivePrefix',
    'fiveSuffix',
    'six',
    'seven',
    'eight',
    'nine',
    'tenPrefix',
    'tenSuffix',
    'eleven',
    'twelve',
    'twenty',
    'quarter',
    'half',
    'past',
    'to',
    'oclock'
];

const grid = {
    template: gridTmpl,
    props: ['time'],
    components: {'v-glyph': glyph},
    data() {
        return {
            lastMinutes: -1,
            lastHours: -1,
            one: false,
            two: false,
            three: false,
            four: false,
            fivePrefix: false,
            fiveSuffix: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            tenPrefix: false,
            tenSuffix: false,
            eleven: false,
            twelve: false,
            twenty: false,
            quarter: false,
            half: false,
            past: false,
            to: false,
            oclock: false
        };
    },
    mounted () {
        this.updateValues();
    },
    computed: {
        h() {
            return this.time.getHours();
        },
        m() {
            return this.time.getMinutes();
        }
    },
    updated() {
        console.log('updated');
    },
    methods: {
        clearValues() {
            toClear.forEach(k => this.$data[k] = false);
        },
        updateValues() {
            let [h, m] = [this.h, this.m];
            if (this.lastHours === h && this.lastMinutes === m) {
                return;
            }
            this.lastMinutes = m;
            this.lastHours = h;
            this.clearValues();

            if (m < 5) {
                this.oclock = true;
            } else if (m < 35) {
                this.past = true;
                if (m >= 30) {
                    this.half = true;
                } else if (m >= 15 && m < 20) {
                    this.quarter = true;
                } else {
                    if (m >= 20) {
                        this.twenty = true;
                        if (m >= 25) {
                            this.five = true;
                        }
                    } else if (m >= 10) {
                        this.tenPrefix = true;
                    } else {
                        this.fivePrefix = true;
                    }
                }
            } else {
                h += 1;
                this.to = true;
                if (m >= 45 && m < 50) {
                    this.quarter = true;
                } else {
                    if (m < 45) {
                        this.twenty = true;
                        if (m < 40) {
                            this.fivePrefix = true;
                        }
                    } else if (m < 55) {
                        this.tenPrefix = true;
                    } else {
                        this.fivePrefix = true;
                    }
                }
            }

            if (h >= 12) {
                h -= 12;
                if (h === 12) {
                    h -= 12;
                }
            }
            switch (h) {
                case 0: this.twelve = true; break;
                case 1: this.one = true; break;
                case 2: this.two = true; break;
                case 3: this.three = true; break;
                case 4: this.four = true; break;
                case 5: this.fiveSuffix = true; break;
                case 6: this.six = true; break;
                case 7: this.seven = true; break;
                case 8: this.eight = true; break;
                case 9: this.nine = true; break;
                case 10: this.tenSuffix = true; break;
                case 11: this.eleven = true; break;
            }
        }
    },
    watch: {
        time() {
            this.updateValues();
        }
    }
};

const app = {
    template: `<div class="w100 col align-center"><grid :time="time"></grid></div>`,
    components: { 'grid': grid },
    data () {
        return {
            time: new Date(),
            timerId: null
        };
    },
    created () {
        const self = this;
        this.timerId = setInterval(() => self.time = new Date(), 1000);
    },
    beforeDestroy() {
        clearInterval(this.timerId);
        this.timerId = null;
    }
};

new Vue({ render: h => h(app) }).$mount('#app');