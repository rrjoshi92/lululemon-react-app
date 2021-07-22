import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './styles/index.scss';

const yogaPoses = [
  'Tadasana',
  'Vrikshasana',
  'Adho Mukho Svanasana',
  'Trikonasana',
  'Kursiasana',
  'Naukasana',
  'Bhujangasana',
  'Paschimottanasana',
  'Balasana',
  'Sukhasna',
  'Bandha Sarvangasana',
  'Virabhadrasana I',
  'Chaturanga',
  'Utkatasana',
  'Bakasana',
  'Savasana',
];

ReactDOM.render(
  <App data={yogaPoses} />,
  document.getElementById('App'),
);
