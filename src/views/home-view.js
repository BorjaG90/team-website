import { LitElement, html } from 'lit';

import '../components/UI/common-header.js';
import '../components/UI/navigation/navbar-home.js';

class HomeView extends LitElement {
  render() {
    return html`
      <header>
        <common-header></common-header><navbar-home></navbar-home> Blue Wyverns
      </header>
      <main><h1>Content</h1></main>
    `;
  }
}

customElements.define('home-view', HomeView);
