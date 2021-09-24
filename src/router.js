import { Router } from '@vaadin/router';

import './views/home-view.js';
import './views/roster-view.js';
import './views/farm-view.js';

export const router = outlet => {
  const routing = new Router(outlet);

  const routes = [
    { path: '/', component: 'home-view' },
    { path: '/roster', component: 'roster-view' },
    { path: '/farm', component: 'farm-view' },
    { path: '(.*)', component: 'home-view' },
  ];

  routing.setRoutes(routes);
};
