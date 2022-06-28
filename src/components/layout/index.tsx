/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ColorField from '../color-field';
import CompositeImage from '../composite-image';
import Heading from '../heading';
import TextField from '../text-field';
import styles from './index.module.css';

function Layout() {
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('ffffff');

  function updateText(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
    setColor(event.target.value);
  }

  return (
    <main>
      <Heading>Customize your image!</Heading>
      <div className={styles.container}>
        <TextField
          labelContent="Enter your image's message:"
          id="composite-image-text"
          onChange={updateText}
        />
        <ColorField
          color={color}
          id="color-field-text"
          onChange={updateColor}
        />
      </div>
      <Heading size={2}>Your Result:</Heading>
      <CompositeImage text={text} color={color} />
    </main>
  );
}

export default Layout;
