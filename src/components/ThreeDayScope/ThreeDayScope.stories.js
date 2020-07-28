import React from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import ThreeDayScope from './ThreeDayScope'
import './ThreeDayScope.css'

storiesOf('Horoscope', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/horoscope/:signId']}>{story()}</MemoryRouter>
  ))
  .add('ThreeDayScope', () => (
    <ThreeDayScope />
  ))