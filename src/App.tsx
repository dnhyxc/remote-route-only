import { NavigationProvider } from '@/router/NavigationContext';
import { AppRouter } from '@/router/AppRouter';
import type { HostBridgeProps } from '@/types/host';
import '@/styles.css';

type AppProps = Partial<Pick<HostBridgeProps, 'api' | 'plugin'>>;

/**
 * 仅路由子应用壳：与 remote-react-shadcn 相同内部多页导航。
 * 嵌入 Host 时进 /info；独立预览进 /home。
 */
function App(props: AppProps = {}) {
	const hasBridge = !!(props.api && props.plugin);
	const initialPath = hasBridge ? '/info' : '/home';

	return (
		<NavigationProvider initialPath={initialPath}>
			<AppRouter bridge={hasBridge ? (props as HostBridgeProps) : undefined} />
		</NavigationProvider>
	);
}

type HostApi = HostBridgeProps['api'];

let offLocale: (() => void) | undefined;

App.activate = async (api: HostApi) => {
	const onLocale = (data?: unknown) => {
		console.info('[routeOnlyDemo] locale', data);
	};
	api.event.on('locale', onLocale);
	offLocale = () => api.event.off('locale', onLocale);
	console.log('[routeOnlyDemo] activate', {
		locale: api.locale,
		theme: api.theme,
	});
	api.ui?.showToast?.({
		message: 'Route-only demo activated',
		type: 'info',
		title: 'routeOnlyDemo',
	});
};

App.deactivate = () => {
	offLocale?.();
	offLocale = undefined;
	console.log('[routeOnlyDemo] deactivate');
};

export default App;
