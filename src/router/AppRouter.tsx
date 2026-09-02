import { useNavigation } from './NavigationContext';
import HomePage from '@/views/home/HomePage';
import InfoPage from '@/views/info';
import DetailPage from '@/views/detail/DetailPage';
import PluginPage from '@/views/plugin/PluginPage';
import PluginDetailPage from '@/views/plugin/PluginDetailPage';
import type { HostBridgeProps } from '@/types/host';

interface AppRouterProps {
	bridge?: HostBridgeProps;
}

export function AppRouter({ bridge }: AppRouterProps) {
	const { path } = useNavigation();

	switch (path) {
		case '/info':
			return <InfoPage bridge={bridge} />;
		case '/detail':
			return <DetailPage />;
		case '/plugin':
			return <PluginPage />;
		case '/plugin/detail':
			return <PluginDetailPage />;
		case '/home':
		default:
			return <HomePage />;
	}
}
