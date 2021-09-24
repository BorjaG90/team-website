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
        max-width: 650px;
        min-width: 300px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
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
        background: var(--tw-primary-color, #2c792c);
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
        color: var(--tw-primary-text-color, white);
      }
      .tail {
        position: relative;
        width: 16px;
        height: 24px;
        background: var(--tw-primary-color, #2c792c);
        left: -32px;
        transform: skewX(-20deg);
        z-index: 1;
      }
      .position_container {
        position: relative;
        min-width: 41px;
        background: var(--tw-secondary-color, #e4580d);
        left: -32px;
        transform: skewX(-20deg);
        color: var(--tw-secondary-text-color, black);
      }

      .name_container {
        position: relative;
        background: var(--tw-primary-color, #0e44ba);
        flex-grow: 12;
        padding: 0 5px 0 5px;
        transform: skewX(-20deg);
        left: -32px;
        color: var(--tw-primary-text-color, white);
      }
      .country_container {
        position: relative;
        width: 50px;
        min-width: 38px;
        background: var(--tw-third-color, #e0e40d);
        left: -32px;
        transform: skewX(-20deg);
        color: var(--tw-third-text-color, black);
      }
      .content {
        transform: skewX(20deg);
        white-space: nowrap; /* forces text to single line */
        overflow: hidden;
        text-overflow: ellipsis;
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
    if (this.player.position) {
      return html`<div class="content">
        ${this.player.position === this.player.secondary
          ? html`${positions[this.player.position]}`
          : html`${positions[this.player.position]}/${positions[
              this.player.secondary
            ]}`}
      </div>`;
    }
    return html`<div class="content">${this.player.age}</div>`;
  }

  renderNumber() {
    return html` <div class="number_container">
      <div class="circle"></div>
      <div class="number">${this.player.number}</div>
      <div class="tail"></div>
    </div>`;
  }

  renderName() {
    let lname = this.player.lastname;
    if (lname.length > 15) {
      lname = `${lname.slice(0, 10)}...`;
    }
    return html`<div class="content">
      ${this.player.firstname.length + lname.length >= 20
        ? html`${this.player.firstname.slice(0, 1)}. ${lname}`
        : html`${this.player.firstname} ${lname}`}
    </div>`;
  }

  render() {
    return html`<div class="player">
      ${this.renderNumber()}
      <div class="position_container">${this.renderPosition()}</div>
      <div class="name_container">${this.renderName()}</div>
      <div class="country_container">
        <div class="content">
          ${this.player.country.slice(0, 3).toUpperCase()}
        </div>
      </div>
    </div> `;
  }
}

customElements.define('player-line', PlayerLine);
