import React from 'react'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import Signs from './Signs'
import Image from './Image'


storiesOf('Zodiac Signs (all)', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add("Zodiac Signs", () => (
    <Signs />
  ))
  .add("Zodiac Pic", () => (
    <Image />
  ))