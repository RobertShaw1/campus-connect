import { configure } from '@storybook/react';

function loadStories() {
  require('../src/client/stories');
}

configure(loadStories, module);
