import React from 'react'
import { storiesOf } from '@storybook/react'
import SunFacts from './SunFacts'
import './SunFacts.css'

storiesOf('Sun Facts', module)
  .add('SunFacts', () => (
    <SunFacts />
  ))