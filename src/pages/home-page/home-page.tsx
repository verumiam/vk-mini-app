import { Button, Group, Header, Panel, SimpleCell } from '@vkontakte/vkui';
import { FC } from 'react';

interface HomePageProps {
  id: string;
  onRoute: (route: string) => void;
}

const HomePage: FC<HomePageProps> = ({ id, onRoute }) => {
  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Задания</Header>}>
        <SimpleCell>
          <Button onClick={() => onRoute('fact')}>Факт о ниндзя коте</Button>
        </SimpleCell>
        <SimpleCell>
          <Button onClick={() => onRoute('user')}>Информация о пользователе</Button>
        </SimpleCell>
      </Group>
    </Panel>
  );
};

export default HomePage;
