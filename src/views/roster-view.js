import { LitElement, html, css } from 'lit';

import '../components/UI/common-header.js';

class RosterView extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <header><common-header></common-header> Blue Wyverns - Plantilla</header>
      <main><h1>Content</h1></main>
    `;
  }
}

customElements.define('roster-view', RosterView);
