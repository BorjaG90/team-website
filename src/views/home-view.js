import { LitElement, html, css } from 'lit';

import '../components/UI/common-header.js';
import '../components/UI/navigation/navbar-home.js';

class HomeView extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
      .nav {
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  render() {
    return html`
      <header>
        <div class="nav">
          <common-header></common-header><navbar-home></navbar-home>
        </div>
        Blue Wyverns
      </header>
      <main><h1>Content</h1></main>
    `;
  }
}

customElements.define('home-view', HomeView);
