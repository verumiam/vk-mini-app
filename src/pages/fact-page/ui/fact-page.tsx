import {
  Button,
  FormItem,
  FormLayoutGroup,
  Group,
  Header,
  Panel,
  SimpleCell,
  Textarea,
} from '@vkontakte/vkui';
import { FC } from 'react';

import useFactForm from '../lib/fact-form.hook';

interface FactPageProps {
  id: string;
  onRoute: (route: string) => void;
}

const FactPage: FC<FactPageProps> = ({ id, onRoute }) => {
  const { handleClick, handleChange, fact, textareaRef, isRefetching } = useFactForm();

  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Страница с фактом</Header>}>
        <SimpleCell>
          <Button onClick={() => onRoute('home')}>Главное меню</Button>
        </SimpleCell>
        <SimpleCell>
          <Button onClick={() => onRoute('user')}>Информация о человеке</Button>
        </SimpleCell>
        <FormLayoutGroup>
          <FormItem>
            <Textarea
              placeholder="Тут должен появиться интересный факт, выполни запрос"
              value={fact}
              getRef={textareaRef}
              onChange={(e) => handleChange(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button loading={isRefetching} onClick={handleClick}>
              Выполнить запрос
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </Group>
    </Panel>
  );
};

export default FactPage;
