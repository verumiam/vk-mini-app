import { PanelHeader, PanelHeaderContent, Title } from '@vkontakte/vkui';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <PanelHeader>
      <PanelHeaderContent>
        <Title>Задания на Frontend-разработчика</Title>
      </PanelHeaderContent>
    </PanelHeader>
  );
};

export default Header;
