import { LitElement, html, css } from 'lit';

class TeamLogo extends LitElement {
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
    return html` <header><a href="/">Logo</a></header> `;
  }
}

customElements.define('team-logo', TeamLogo);
