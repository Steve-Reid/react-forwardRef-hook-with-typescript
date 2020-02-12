/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import './App.css';

import { ForwardedInput } from './components/Input';

const inputStyle = {
  width: '400px',
  height: '40px',
  fontSize: '30px',
  marginBottom: '10px',
};

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    firstNameRef.current!.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      lastNameRef.current!.focus();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <ForwardedInput
          ref={firstNameRef}
          placeholder="type first name here"
          style={inputStyle}
          handleKeyDown={handleKeyDown}
        />
        <ForwardedInput
          ref={lastNameRef}
          placeholder="type last name here"
          style={inputStyle}
        />
      </header>
    </div>
  );
};
