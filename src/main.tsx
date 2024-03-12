import ReactDOM from 'react-dom/client';
import App from '@/app/app';
import vkBridge from '@vkontakte/vk-bridge';
import { ReactQueryProvider, VKProvider } from '@/shared/providers';

vkBridge.send('VKWebAppInit');

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <ReactQueryProvider>
    <VKProvider>
      <App />
    </VKProvider>
  </ReactQueryProvider>
);

if (import.meta.env.MODE === 'development') {
  import('./eruda.ts');
}
