import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import {
  App,
  Buttons,
  Home,
  AllCampuses,
  AllStudents,
  SingleCampus,
  SingleStudent,
} from '../components';

import '../../../.storybook/storybook.css';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('Home', () => <Home />)

storiesOf('AppContainer', module)
  .add('App', () => <App />)

storiesOf('Campuses', module)
  .add('AllCampuses', () => <AllCampuses />)
  .add('SingleCampus', () => <SingleCampus />)


storiesOf('Students', module)
  .add('AllStudents', () => <AllStudents />)
  .add('SingleStudent', () => <SingleStudent />)

storiesOf('Button', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with add action', () => <Buttons />)
