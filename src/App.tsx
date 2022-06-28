import React, { useState } from 'react';
import CompositeImage from './components/composite-image';
import TextField from './components/text-field';

function App() {
  const URL = process.env.REACT_APP_IMAGE_BASE_URL
    ? process.env.REACT_APP_IMAGE_BASE_URL
    : '';

  const [text, setText] = useState<string>('Hello World');

  function updateText(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  return (
    <main>
      <TextField
        labelContent="Enter your message here:"
        id="composite-image"
        onChange={updateText}
      />
      <CompositeImage baseURL={URL} text={text} />
    </main>
  );
}

export default App;
