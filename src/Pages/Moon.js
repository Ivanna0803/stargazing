import React from 'react';
import '../styles/Moon.css';
import InteractiveMoonPhase from '../components/InteractiveMoonPhase';
import MoonInfo from '../components/MoonInfo';

function Moon() {
  return (
    <div>Hello World
      <InteractiveMoonPhase />
      <MoonInfo />
    </div>
  );
}

export default Moon;