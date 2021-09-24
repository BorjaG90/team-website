import { LitElement, html } from 'lit';

import { mainStyles } from '../utils/main-styles.js';

import '../components/UI/common-header.js';

class HomeView extends LitElement {
  static get styles() {
    return [mainStyles];
  }

  render() {
    return html`
      <header>
        <common-header></common-header>
        <h1>Blue Wyverns</h1>
      </header>
      <main><h1>Content</h1></main>
    `;
  }
}

customElements.define('home-view', HomeView);
