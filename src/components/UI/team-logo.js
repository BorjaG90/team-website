import { LitElement, html, css } from 'lit';

class TeamLogo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo {
        width: 50px;
        /* height: 50px; */
        padding: 5px;
      }
    `;
  }

  render() {
    return html`
      <a href="/"
        ><img class="logo" src="/assets/wyverns-logo.png" alt="Team logo"
      /></a>
    `;
  }
}

customElements.define('team-logo', TeamLogo);
