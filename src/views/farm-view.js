import { LitElement, html } from 'lit';

import { mainStyles } from '../utils/main-styles.js';

import '../components/UI/common-header.js';
import '../components/roster/roster-list.js';

class FarmView extends LitElement {
  static get styles() {
    return [mainStyles];
  }

  render() {
    return html`
      <header>
        <common-header></common-header>
        <h2>Cantera</h2>
      </header>
      <main>
        <section class="container">
          <h3>Alevín</h3>
          <roster-list url="http://localhost:3000/alevin"></roster-list>
          <h3>Infantil</h3>
          <roster-list url="http://localhost:3000/infantil"></roster-list>
          <h3>Cadete</h3>
          <roster-list url="http://localhost:3000/cadete"></roster-list>
          <h3>Junior Femenino</h3>
          <roster-list url="http://localhost:3000/junior_fem"></roster-list>
          <h3>Junior Masculino</h3>
          <roster-list url="http://localhost:3000/junior_mas"></roster-list>
        </section>
      </main>
    `;
  }
}

customElements.define('farm-view', FarmView);
