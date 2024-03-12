import { Button, FormItem, FormLayoutGroup } from '@vkontakte/vkui';
import { Controller } from 'react-hook-form';

import Input from '@/shared/input';

import useUserForm from '../lib/user-form.hook';

const UserForm = () => {
  const { handleSubmit, onSubmit, control, errors, data, isFetching } = useUserForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayoutGroup>
        <FormItem
          status={errors?.name ? 'error' : 'default'}
          bottom={
            errors?.name
              ? errors?.name?.message
              : 'Поле может содержать только кириллические или латинские буквы'
          }
        >
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormItem>
        <FormItem>
          Имя: {data?.name} <br />
          Возраст: {data?.age}{' '}
        </FormItem>
        <FormItem>
          <Button loading={isFetching} type="submit">
            Выполнить запрос
          </Button>
        </FormItem>
      </FormLayoutGroup>
    </form>
  );
};

UserForm.displayName = 'UserForm';

export default UserForm;
