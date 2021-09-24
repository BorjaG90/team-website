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
    `;
  }

  static get properties() {
    return {
      list: { type: Array },
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.list = [];
  }

  async firstUpdated() {
    this.getPlayers();
  }

  // eslint-disable-next-line class-methods-use-this
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
          ${this.list.map(
            player => html`<player-line .player="${player}"></player-line>`
          )}
        `
      : nothing;
  }
}

customElements.define('roster-list', RosterList);
