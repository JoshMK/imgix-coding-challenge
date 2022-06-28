/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ColorField from '../color-field';
import CompositeImage from '../composite-image';
import Heading from '../heading';
import TextField from '../text-field';
import styles from './index.module.css';

function Layout() {
  const URL = process.env.REACT_APP_IMAGE_BASE_URL
    ? process.env.REACT_APP_IMAGE_BASE_URL
    : '';

  const [text, setText] = useState<string>('Hello&nbsp;World');
  const [color, setColor] = useState<string>('ffffff');

  function updateText(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
    setColor(event.target.value.replace('#', '').toUpperCase());
  }

  return (
    <main>
      <Heading>Customize your image!</Heading>
      <div className={styles.container}>
        <TextField
          labelContent="Enter your message here:"
          id="composite-image-text"
          onChange={updateText}
        />
        <ColorField color={color} onChange={updateColor} />
      </div>
      <CompositeImage baseURL={URL} text={text} color={color} />
    </main>
  );
}

export default Layout;
