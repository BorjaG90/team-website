import { Router } from '@vaadin/router';

import './views/home-view.js';

export const router = outlet => {
  const routing = new Router(outlet);

  const routes = [
    { path: '/', component: 'home-view' },
    { path: '(.*)', component: 'home-view' },
  ];

  routing.setRoutes(routes);
};
