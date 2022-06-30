/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ColorField from '../color-field';
import CompositeImage from '../composite-image';
import Heading from '../heading';
import TextField from '../text-field';
import styles from './index.module.css';

export default function Layout() {
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#ffffff');

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
        <form>
          <fieldset>
            <TextField
              labelContent="Enter your image's message:"
              id="composite-image-text"
              onChange={updateText}
            />
            <ColorField
              colorValue={color}
              id="color-field-text"
              labelText="Pick an image overlay color:"
              onChange={updateColor}
            />
          </fieldset>
        </form>
      </div>
      <Heading size={2} className="result">
        Your Result:
      </Heading>
      <CompositeImage text={text} color={color} />
    </main>
  );
}
