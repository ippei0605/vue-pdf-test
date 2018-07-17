import Vue from 'vue';
import Router from 'vue-router';
import PdfViewer from '@/components/PdfViewer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PdfViewer',
      component: PdfViewer
    }
  ]
});
