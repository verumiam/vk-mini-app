import { Button, Group, Header, Panel, SimpleCell } from '@vkontakte/vkui';
import { FC } from 'react';

import UserForm from './user-form';

interface UserPageProps {
  id: string;
  onRoute: (route: string) => void;
}

const UserPage: FC<UserPageProps> = ({ id, onRoute }) => {
  return (
    <Panel id={id}>
      <Group header={<Header mode="tertiary">Страница с пользователем</Header>}>
        <SimpleCell>
          <Button onClick={() => onRoute('home')}>Главное меню</Button>
        </SimpleCell>
        <SimpleCell>
          <Button onClick={() => onRoute('fact')}>Факт о ниндзя коте</Button>
        </SimpleCell>
        <UserForm />
      </Group>
    </Panel>
  );
};

export default UserPage;
