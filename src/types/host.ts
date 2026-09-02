export interface HostBridgeProps {
	api: {
		theme: 'light' | 'dark';
		locale?: 'zh-CN' | 'en-US';
		navigate: (to: string) => void;
		event: {
			on: (event: string, handler: (data?: unknown) => void) => void;
			off: (event: string, handler: (data?: unknown) => void) => void;
			emit: (event: string, data?: unknown) => void;
		};
		storage?: {
			get: (key: string) => Promise<string | null>;
			set: (key: string, value: string) => Promise<void>;
			remove: (key: string) => Promise<void>;
		};
		ui?: {
			showToast?: (config: {
				message: string;
				type?: 'info' | 'success' | 'warning' | 'error';
				title?: string;
			}) => void;
		};
	};
	plugin: {
		id: string;
		name?: string;
		version: string;
		description?: string;
		routePath?: string;
	};
}