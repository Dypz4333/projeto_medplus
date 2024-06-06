import { Button, IButtonProps } from 'native-base';
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize = false, color = 'orange.500', ...rest }: ButtonProps){
  return (
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color}
      mt={10}
      borderRadius="lg"
      _text={{ color: 'white' }}
      _pressed={{ bg: color ? 'orange.600' : 'orange.600' }}
      _hover={{ bg: color }}
      {...rest}
    >
      {children}
    </Button>
  );
};
