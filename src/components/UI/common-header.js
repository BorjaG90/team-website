import { LitElement, html, css } from 'lit';

class CommonHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  render() {
    return html` <header>Logo</header> `;
  }
}

customElements.define('common-header', CommonHeader);
