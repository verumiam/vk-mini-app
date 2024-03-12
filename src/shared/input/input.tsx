import { Input as VKInput } from '@vkontakte/vkui';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return <VKInput {...props} getRef={ref} />;
});

Input.displayName = 'Input';

export default Input;
