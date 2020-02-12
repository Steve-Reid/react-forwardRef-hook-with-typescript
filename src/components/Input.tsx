import * as React from 'react';

interface InputProps {
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = (
  { handleKeyDown, placeholder, style }: InputProps,
  ref: React.MutableRefObject<null>
) => {
  return (
    <input
      ref={ref}
      onKeyDown={handleKeyDown}
      type="text"
      placeholder={placeholder}
      style={style}
    />
  );
};

export const ForwardedInput = React.forwardRef(Input);
