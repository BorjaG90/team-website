import { html } from 'lit';
import '../src/team-web.js';

export default {
  title: 'TeamWeb',
  component: 'team-web',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <team-web
      style="--team-web-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </team-web>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
