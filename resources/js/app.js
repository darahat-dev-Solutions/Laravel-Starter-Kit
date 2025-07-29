import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import '../css/app.css';
import './bootstrap';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob([
        './Pages/**/*.vue',
        '../../Modules/**/resources/js/Pages/**/*.vue'
    ], { eager: true });

    if (name.includes('::')) {
        const [moduleAlias, pagePath] = name.split('::');
        const expectedKey = `../../Modules/${moduleAlias}/resources/js/Pages/${pagePath}.vue`;
        return pages[expectedKey];
    } else {
        const expectedKey = `./Pages/${name}.vue`;
        return pages[expectedKey];
    }
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
