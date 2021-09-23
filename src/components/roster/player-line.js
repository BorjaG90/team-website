import { LitElement, html, css } from 'lit';

const positions = {
  1: 'B',
  2: 'E',
  3: 'A',
  4: 'AP',
  5: 'P',
};

class PlayerLine extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .player {
        width: 90%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 1px;
      }
      .number_container {
        display: flex;
        flex-wrap: nowrap;
        margin-left: 16px;
      }
      .circle {
        width: 30px;
        height: 24px;
        background: #2c792c;
        -moz-border-radius: 100px 0 0 100px;
        -webkit-border-radius: 100px 0 0 100px;
        border-radius: 100px 0 0 100px;
        z-index: 2;
      }
      .number {
        position: relative;
        width: 20px;
        z-index: 2;
        left: -20px;
      }
      .tail {
        position: relative;
        width: 16px;
        height: 24px;
        background: #2c792c;
        z-index: 1;
        transform: skewX(-20deg);
        left: -32px;
      }
      .position_container {
        width: 40px;
        background: #e4580d;
        transform: skewX(-20deg);
        left: -32px;
        position: relative;
      }
      .content {
        transform: skewX(20deg);
      }
      .name_container {
        background: #0e44ba;
        flex-grow: 2;
        padding: 0 5px 0 5px;
        transform: skewX(-20deg);
        left: -32px;
        position: relative;
      }
      .country_container {
        width: 50px;
        background: #e0e40d;
        color: black;
        transform: skewX(-20deg);
        left: -32px;
        position: relative;
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
    return html`<div class="content">
      ${this.player.position === this.player.secondary
        ? html`${positions[this.player.position]}`
        : html`${positions[this.player.position]}/${positions[
            this.player.secondary
          ]}`}
    </div>`;
  }

  renderNumber() {
    return html` <div class="number_container">
      <div class="circle"></div>
      <div class="number">${this.player.number}</div>
      <div class="tail"></div>
    </div>`;
  }

  render() {
    return html`<div class="player">
      ${this.renderNumber()}
      <div class="position_container">${this.renderPosition()}</div>
      <div class="name_container">
        <div class="content">
          ${this.player.firstname} ${this.player.lastname}
        </div>
      </div>
      <div class="country_container">
        <div class="content">
          ${this.player.country.slice(0, 3).toUpperCase()}
        </div>
      </div>
    </div> `;
  }
}

customElements.define('player-line', PlayerLine);
