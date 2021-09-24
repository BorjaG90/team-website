import { LitElement, html, css } from 'lit';
import { router } from './router.js';

import './views/home-view.js';

export class TeamWeb extends LitElement {
  static get styles() {
    return [
      css`
        #root {
          width: 100%;
          height: 100%;
          background-color: var(--tw-background-color, black);
          padding-bottom: 1rem;
        }
      `,
    ];
  }

  firstUpdated() {
    router(this.shadowRoot.getElementById('root'));
  }

  render() {
    return html` <div id="root"></div> `;
  }
}
