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

  renderPosition() {
    return this.player.position === this.player.secondary
      ? html`${this.player.position}`
      : html`${this.player.position}/${this.player.secondary}`;
  }

  render() {
    return html`<div class="player">
      #${this.player.number} ${this.renderPosition()} - ${this.player.firstname}
      ${this.player.lastname} : ${this.player.country}
    </div> `;
  }
}

customElements.define('player-line', PlayerLine);
