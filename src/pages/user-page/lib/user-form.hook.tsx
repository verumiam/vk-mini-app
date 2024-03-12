import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { fetchUser } from '@/features/fetch-user';

import { userSchema } from './user-form.schema';

interface IFormInputs {
  name: string;
}

const useUserForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm<IFormInputs>({
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  const queryClient = useQueryClient();
  const name = watch('name');

  const { data, isFetching, isRefetching } = useQuery({
    queryKey: ['name', name],
    queryFn: () => fetchUser(name),
    enabled: false,
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const cachedData = queryClient.getQueryData(['name', data.name]);

    if (isFetching || isRefetching) {
      await queryClient.cancelQueries({ queryKey: ['name'], exact: true });
    }

    if (!cachedData) {
      await queryClient.prefetchQuery({
        queryKey: ['name', data.name],
      });
    }
  };

  return { control, handleSubmit, onSubmit, errors, data, isFetching };
};

export default useUserForm;
