const template = `<h1>Hello</h1>`;

const app = {
    template,
};
new Vue({ render: h => h(app) }).$mount('#app');
