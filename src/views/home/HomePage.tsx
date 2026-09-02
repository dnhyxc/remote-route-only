import { FlaskConical, ChevronRight, Zap, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/router/NavigationContext';

export default function HomePage() {
	const { navigate } = useNavigation();

	return (
		<div className="flex h-full min-h-0 flex-col items-start justify-center gap-4 bg-theme-background p-8 text-textcolor">
			<div className="flex items-center gap-2 text-teal-500">
				<FlaskConical className="size-6" />
				<span className="text-sm font-medium">
					remote-route-only
				</span>
			</div>
			<h1 className="text-2xl font-semibold">
				仅路由挂载 · React + shadcn
			</h1>
			<p className="max-w-xl text-sm text-muted-foreground">
				独立预览端口
				<code className="text-teal-500">9011</code>
				。嵌入 Host 时 expose
				<code className="text-teal-500">./App</code>
				（
				<code className="text-teal-500">React Component</code>
				+
				<code className="text-teal-500">injectRoute · 无 menu</code>
				）。
			</p>

			<div className="mt-2 flex flex-wrap gap-3">
				<Button
					onClick={() => navigate('/info')}
					className="bg-teal-500 text-white hover:bg-teal-600"
				>
					<Zap className="size-4" />
					打开说明页
				</Button>
				<Button
					variant="outline"
					onClick={() => navigate('/plugin')}
				>
					<Puzzle className="size-4" />
					打开插件页
					<ChevronRight className="size-4" />
				</Button>
				<Button
					variant="outline"
					onClick={() => navigate('/plugin/detail')}
				>
					<ChevronRight className="size-4" />
					插件详情页
				</Button>
			</div>
		</div>
	);
}
