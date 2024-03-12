import * as yup from 'yup';

export const userSchema = yup
  .object({
    name: yup
      .string()
      .required('Данное поле является обязательным')
      .matches(/^[а-яА-Яa-zA-Z\s]+$/, 'Используйте только буквы'),
  })
  .required('Заполнение имени обязательно');
