import { LitElement, html, css } from 'lit';

import '../components/UI/common-header.js';
import '../components/roster/roster-list.js';

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
      <header>
        <common-header></common-header>
        <h2>Plantilla</h2>
      </header>
      <main><roster-list></roster-list></main>
    `;
  }
}

customElements.define('roster-view', RosterView);
