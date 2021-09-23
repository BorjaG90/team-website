import { LitElement, html, css } from 'lit';

import { navList } from '../../../utils/constants.js';

class NavbarHome extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 90%;
      }
      nav {
        padding: 5px;
      }
      .nav-list {
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
        list-style-type: none;
      }
      .nav-list li a {
        text-decoration: none;
        color: #7d848c !important;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <ul class="nav-list">
          ${navList.map(
            info =>
              html`<li>
                <a href="${info.path}" class="nav-link" tabindex="0"
                  >${info.name}</a
                >
              </li>`
          )}
        </ul>
      </nav>
    `;
  }
}

customElements.define('navbar-home', NavbarHome);
