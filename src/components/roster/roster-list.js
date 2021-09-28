import { LitElement, html, css, nothing } from 'lit';

import './player-line.js';

const errorHandler = response => {
  if (!response.ok) {
    return { error: response.statusText, errorCode: response.status };
  }
  return response.json();
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

  render() {
    return this.list.length > 0
      ? html`
          <player-line class="header" .player=${this.header}></player-line>
          ${this.list.map(
            player =>
              html`<player-line
                class="player"
                .player="${player}"
              ></player-line>`
          )}
        `
      : nothing;
  }
}

customElements.define('roster-list', RosterList);
