import { LitElement, html, css } from 'lit';

class PlayerLine extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      player: { type: Object },
    };
  }

  constructor() {
    super();
    this.player = {};
  }

  render() {
    return html`<div class="player">${this.player.firstname}</div> `;
  }
}

customElements.define('player-line', PlayerLine);
