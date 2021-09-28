import { LitElement, html } from 'lit';

import { mainStyles } from '../utils/main-styles.js';

import '../components/UI/common-header.js';
import '../components/roster/roster-list.js';

class RosterView extends LitElement {
  static get styles() {
    return [mainStyles];
  }

  render() {
    const header = {
      number: '#',
      age: 'Pos.',
      firstname: 'Jugador',
      lastname: '',
      country: 'País',
    };
    return html`
      <header>
        <common-header></common-header>
        <h2>Plantilla</h2>
      </header>
      <main>
        <section class="container">
          <roster-list
            .header="${header}"
            url="http://localhost:3000/players"
          ></roster-list>
        </section>
      </main>
    `;
  }
}

customElements.define('roster-view', RosterView);
