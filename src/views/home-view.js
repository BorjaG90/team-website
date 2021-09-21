import { LitElement, html } from 'lit';

class HomeView extends LitElement {
  render() {
    return html`
      <header>Team Web</header>
      <main>Content</main>
    `;
  }
}

customElements.define('home-view', HomeView);
