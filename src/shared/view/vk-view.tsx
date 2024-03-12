import vkBridge from '@vkontakte/vk-bridge';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { FC } from 'react';
import { Spinner, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import { Header } from '@/widgets/header';

const HomePage = lazy(() => import('@/pages/home-page'));
const FactPage = lazy(() => import('@/pages/fact-page'));
const UserPage = lazy(() => import('@/pages/user-page'));

const VKView: FC = () => {
  const [history, setHistory] = useState(['home']);
  const activePanel = history[history.length - 1];
  const isFirst = history.length === 1;

  const onRoute = useCallback(
    (panel: string) => setHistory((prevHistory) => [...prevHistory, panel]),
    []
  );

  const onRouteBack = useCallback(() => setHistory((prevHistory) => prevHistory.slice(0, -1)), []);

  useEffect(() => {
    vkBridge.send('VKWebAppSetSwipeSettings', { history: isFirst });
  }, [isFirst]);

  return (
    <SplitLayout>
      <SplitCol>
        <Header />
        <Suspense
          fallback={
            <Spinner
              style={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }}
              size="large"
            />
          }
        >
          <View history={history} activePanel={activePanel} onSwipeBack={onRouteBack}>
            <HomePage id="home" onRoute={onRoute} />
            <FactPage id="fact" onRoute={onRoute} />
            <UserPage id="user" onRoute={onRoute} />
          </View>
        </Suspense>
      </SplitCol>
    </SplitLayout>
  );
};

export default VKView;
