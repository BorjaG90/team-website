import { LitElement, html } from 'lit';

import { navList } from '../../../utils/constants.js';

class NavbarHome extends LitElement {
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
