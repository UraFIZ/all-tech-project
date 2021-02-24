// Core
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
};

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : null;
  const [counter, setCounter] = useState(1);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter.toFixed()}</h3>
      <button type="button" onClick={increase}>Increase</button>
      <button type="button" onClick={decrease}>Decrease</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello',
};
