import { LitElement, html, css } from 'lit';

import '../components/UI/common-header.js';

class HomeView extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <header><common-header></common-header> Blue Wyverns</header>
      <main><h1>Content</h1></main>
    `;
  }
}

customElements.define('home-view', HomeView);
