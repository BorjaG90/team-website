import { LitElement, html, css } from 'lit';

import './views/home-view.js';

export class TeamWeb extends LitElement {
  static get styles() {
    return [
      css`
        #root {
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  render() {
    return html` <div id="root"><home-view></home-view></div> `;
  }
}
