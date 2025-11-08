import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, type = 'button', ...args }: ButtonProps) => {
  return (
    <button type="button" {...args}>
      {children}
    </button>
  );
};

export default Button;
