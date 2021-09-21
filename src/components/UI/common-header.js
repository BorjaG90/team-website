import { LitElement, html } from 'lit';

class CommonHeader extends LitElement {
  render() {
    return html` <header>Logo</header> `;
  }
}

customElements.define('common-header', CommonHeader);
