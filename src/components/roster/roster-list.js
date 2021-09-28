/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { LitElement, html, css, nothing } from 'lit';

import './player-line.js';
import '@borjag90dev/lit-modal';

const errorHandler = response => {
  if (!response.ok) {
    return { error: response.statusText, errorCode: response.status };
  }
  return response.json();
};

const drawModalContent = player => {
  let content = '';
  for (const property in player) {
    content += `<span>
      <b class="first-lvl"> ${property}: </b>`;
    if (property === '_highlightResult') {
      const highlight = player[property];
      // content += '<br />';
      for (const attribute in highlight) {
        content += `<br /><b class="second-lvl"><i>${attribute}: </i></b>`;
        for (const attrProp in highlight[attribute]) {
          content += `<br /><b class="third-lvl">${attrProp}: </b>${highlight[attribute][attrProp]}`;
        }
      }
    } else {
      content += `${player[property]}`;
    }
    content += `</span><br/>`;
  }
  return content;
};

class RosterList extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }
      .header {
        --pl-primary-color: var(--tw-secondary-color, #c2c5cd);
        --pl-primary-text-color: var(--tw-secondary-text-color, black);
        --pl-secondary-color: var(--tw-primary-color, #1418a0);
        --pl-secondary-text-color: var(--tw-primary-text-color, white);
        --pl-third-color: var(--tw-primary-color, white);
        --pl-third-text-color: var(--tw-primary-text-color, black);
      }

      .player {
        --pl-primary-color: var(--tw-primary-color, #1418a0);
        --pl-primary-text-color: var(--tw--primary-text-color, white);
        --pl-secondary-color: var(--tw--secondary-color, #c2c5cd);
        --pl-secondary-text-color: var(--tw-secondary-text-color, black);
        --pl-third-color: var(--tw-third-color, black);
        --pl-third-text-color: var(--tw-third-text-color, white);
      }
    `;
  }

  static get properties() {
    return {
      list: { type: Array },
      url: { type: String },
      header: { type: Object },
    };
  }

  constructor() {
    super();
    this.list = [];
    this.header = {};
  }

  async firstUpdated() {
    this.getPlayers();
  }

  async getDataFromAPI() {
    return fetch(`${this.url}`, { method: 'GET' })
      .then(errorHandler)
      .then(response => response)
      .catch(error => ({ error }));
  }

  async getPlayers() {
    const data = await this.getDataFromAPI();
    if (!data.error) {
      this.list = data;
    }
  }

  /** Muestra la ventana modal con los datos completos de la fila */
  openModal(playerInfo) {
    const modal = this.shadowRoot.querySelector('lit-modal');
    modal.innerHTML = `<style>
    .btn-close {
      color: var(--lit-modal-btn-color, #999);
      padding: 1rem;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .btn-close:hover,
    .btn-close:focus {
      color: var(--lit-modal-text-color, #000);
      text-decoration: none;
      cursor: pointer;
    }
  </style>
  <span slot="modal-close" class="btn-close">&times;</span>`;
    modal.innerHTML += drawModalContent(playerInfo);
    modal.setModalShow(true);
  }

  render() {
    return this.list.length > 0
      ? html`
          <lit-modal close-backdrop id="player-modal"></lit-modal>
          <player-line class="header" .player=${this.header}></player-line>
          ${this.list.map(
            player =>
              html`<player-line
                class="player"
                .player="${player}"
                @click="${() => this.openModal(player)}"
              ></player-line>`
          )}
        `
      : nothing;
  }
}

customElements.define('roster-list', RosterList);
