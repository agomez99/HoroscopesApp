import React from 'react'
import { storiesOf } from '@storybook/react'
import Sign from './Sign'
import './Signs.css'

import signInfo from '../../data/horoscope2.json'

let stories = storiesOf('Zodiac Sign (single)', module);

signInfo.forEach((sign) => {
  stories.add(sign.title, () => <Sign sign={sign} />);
});