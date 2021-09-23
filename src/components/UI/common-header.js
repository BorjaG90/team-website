import { LitElement, html, css } from 'lit';

import './team-logo.js';
import './navigation/navbar-home.js';

class CommonHeader extends LitElement {
  static get styles() {
    return css`
      .nav {
        display: flex;
        justify-content: space-between;
        background-color: #343a40;
        color: #7d848c !important;
      }
    `;
  }

  render() {
    return html`
      <div class="nav"><team-logo></team-logo><navbar-home></navbar-home></div>
    `;
  }
}

customElements.define('common-header', CommonHeader);
