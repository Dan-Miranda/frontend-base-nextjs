import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = (props) => {
  const { children } = { ...props };
  return (
    <main>
      { children }
    </main>
  );
};

export default Theme;
