import React from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import Signs from './Signs'

storiesOf('Zodiac Signs (all)', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add("Zodiac Signs", () => (
    <Signs />
  ))