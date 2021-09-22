import { LitElement, html, css } from 'lit';

import '../components/UI/common-header.js';

class HomeView extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }

      h1 {
        margin-top: 15px;
        padding-bottom: 15px;
      }
    `;
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
