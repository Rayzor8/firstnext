import React from 'react';
import Link from 'next/link';

const Button = ({ buttonFor }) => {
  const checkProps = buttonFor === '/' ? '/' : '/' + buttonFor.toLowerCase();
  return (
    <Link href={checkProps}>
      <a className="button-style">
        {checkProps === '/' ? 'Homepage' : buttonFor}
      </a>
    </Link>
  );
};

export default Button;
