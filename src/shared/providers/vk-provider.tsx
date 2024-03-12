import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { FC, ReactNode } from 'react';

import { transformVKBridgeAdaptivity } from '@/shared/utils';

interface VKProviderProps {
  children: ReactNode;
}

vkBridge.send('VKWebAppInit');

const VKProvider: FC<VKProviderProps> = ({ children }) => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot safeAreaInsets={vkBridgeInsets}>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default VKProvider;
