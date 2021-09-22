import { LitElement, html, css } from 'lit';

const url = 'http://localhost:3000/players';

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
    return fetch(`${url}`, { method: 'GET' })
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
    return html` <section></section> `;
  }
}

customElements.define('roster-list', RosterList);
