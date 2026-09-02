import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	FlaskConical,
	ArrowRight,
	Settings,
	Zap,
	Info,
	ChevronRight,
	Star,
	ExternalLink,
	Shield,
	Download,
	User,
	Bell,
	Calendar,
	Sparkles,
	CheckCircle2,
	Circle,
	Search,
	Filter,
	MoreHorizontal,
} from 'lucide-react';
import { useNavigation } from '@/router/NavigationContext';

interface PluginItem {
	id: string;
	name: string;
	description: string;
	version: string;
	status: 'active' | 'inactive' | 'error';
	author: string;
}

const plugins: PluginItem[] = [
	{
		id: 'analytics',
		name: '数据分析',
		description: '实时数据采集与可视化分析',
		version: '2.1.0',
		status: 'active',
		author: 'Platform Team',
	},
	{
		id: 'notification',
		name: '消息通知',
		description: '多渠道消息推送与通知管理',
		version: '1.5.2',
		status: 'active',
		author: 'Core Team',
	},
	{
		id: 'auth',
		name: '身份认证',
		description: '统一身份认证与权限管理',
		version: '3.0.1',
		status: 'error',
		author: 'Security Team',
	},
	{
		id: 'workflow',
		name: '工作流引擎',
		description: '可视化工作流编排与执行',
		version: '1.2.0',
		status: 'inactive',
		author: 'Dev Team',
	},
	{
		id: 'export',
		name: '数据导出',
		description: '支持多种格式的数据导出',
		version: '1.0.3',
		status: 'active',
		author: 'Platform Team',
	},
	{
		id: 'integration',
		name: '第三方集成',
		description: '主流第三方服务集成',
		version: '2.3.0',
		status: 'active',
		author: 'Integration Team',
	},
];

const statusConfig: Record<PluginItem['status'], { label: string; color: string }> = {
	active: { label: '运行中', color: 'text-emerald-500' },
	inactive: { label: '已停用', color: 'text-muted-foreground' },
	error: { label: '异常', color: 'text-destructive' },
};

export default function PluginPage() {
	const { navigate } = useNavigation();
	const [filter, setFilter] = useState('all');
	const [sheetOpen, setSheetOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	const filteredPlugins = plugins.filter((p) => {
		if (filter === 'all') return true;
		if (filter === 'active') return p.status === 'active';
		if (filter === 'inactive') return p.status === 'inactive';
		if (filter === 'error') return p.status === 'error';
		return true;
	});

	return (
		<TooltipProvider delayDuration={200}>
			<div className="flex h-full min-h-0 flex-col bg-theme-background text-textcolor">
				<header className="flex shrink-0 items-start justify-between gap-3 p-5.5 pb-0">
					<div>
						<div className="mb-1 flex items-center gap-2 text-teal-500">
							<FlaskConical className="size-5" />
							<span className="text-sm font-medium">
								React + shadcn/ui 插件页
							</span>
						</div>
						<h1 className="text-xl font-semibold text-textcolor">
							插件管理
						</h1>
						<p className="mt-1 text-sm text-muted-foreground">
							浏览、筛选和管理所有已安装的插件
						</p>
					</div>
					<div className="flex items-center gap-2">
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="outline" size="sm">
									<Search className="size-4" />
									搜索
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-64">
								<h4 className="mb-2 font-medium">搜索插件</h4>
								<p className="text-sm text-muted-foreground">
									输入关键词快速查找插件
								</p>
							</PopoverContent>
						</Popover>

						<Button
							size="sm"
							className="bg-teal-500 text-white hover:bg-teal-600"
							onClick={() => navigate('/plugin/detail')}
						>
							<Zap className="size-4" />
							跳转详情
						</Button>
					</div>
				</header>

				{/* Filter bar */}
				<div className="shrink-0 flex items-center gap-2 px-5.5 py-3">
					<span className="text-sm text-muted-foreground flex items-center gap-1">
						<Filter className="size-4" />
						筛选：
					</span>
					<Select value={filter} onValueChange={setFilter}>
						<SelectTrigger className="w-36">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">全部</SelectItem>
							<SelectItem value="active">运行中</SelectItem>
							<SelectItem value="inactive">已停用</SelectItem>
							<SelectItem value="error">异常</SelectItem>
						</SelectContent>
					</Select>
					<span className="text-sm text-muted-foreground">
						共 <code className="text-teal-500">{filteredPlugins.length}</code> 个插件
					</span>
				</div>

				<ScrollArea className="flex-1 min-h-0">
					<div className="flex flex-col gap-4 p-5.5 pt-0">
						{/* Plugin list */}
						<section className="flex flex-col gap-3">
							{filteredPlugins.map((plugin) => {
								const status = statusConfig[plugin.status];
								return (
									<div
										key={plugin.id}
										className="flex items-center gap-4 rounded-md border border-theme-border bg-theme-card p-4 shadow-sm transition-colors hover:border-teal-500/50"
									>
										<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
											<Star className="size-5 text-teal-500" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2">
												<h3 className="text-sm font-semibold text-textcolor">
													{plugin.name}
												</h3>
												<code className="text-xs text-muted-foreground">
													v{plugin.version}
												</code>
											</div>
											<p className="text-sm text-muted-foreground truncate">
												{plugin.description}
											</p>
										</div>
										<div className="flex items-center gap-3">
											<Tooltip>
												<TooltipTrigger asChild>
													<div className={`flex items-center gap-1 text-sm ${status.color}`}>
														{plugin.status === 'active' ? (
															<CheckCircle2 className="size-4" />
														) : (
															<Circle className="size-4" />
														)}
														{status.label}
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p>
														作者：{plugin.author}
													</p>
												</TooltipContent>
											</Tooltip>

											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant="ghost"
														size="icon"
														className="size-8"
													>
														<MoreHorizontal className="size-4" />
													</Button>
												</PopoverTrigger>
												<PopoverContent className="w-40">
													<div className="flex flex-col gap-1">
														<button
															className="flex items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-muted"
															onClick={() => navigate('/plugin/detail')}
														>
															<ExternalLink className="size-4" />
															查看详情
														</button>
														<button className="flex items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-muted">
															<Settings className="size-4" />
															配置
														</button>
													</div>
												</PopoverContent>
											</Popover>

											<Button
												size="sm"
												className="bg-teal-500 text-white hover:bg-teal-600"
												onClick={() => navigate('/plugin/detail')}
											>
												详情
												<ChevronRight className="size-4" />
											</Button>
										</div>
									</div>
								);
							})}
						</section>

						{/* Batch actions */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Sparkles className="size-4 text-teal-500" />
								批量操作
							</h3>
							<div className="flex flex-wrap gap-3">
								<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
									<DialogTrigger asChild>
										<Button variant="secondary">
											<Download className="size-4" />
											导出配置
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>导出插件配置</DialogTitle>
											<DialogDescription>
												即将导出所有插件的当前配置到文件。
											</DialogDescription>
										</DialogHeader>
										<div className="py-4">
											<p className="text-sm text-muted-foreground">
												此操作将生成一个 JSON 配置文件，包含所有已安装插件的完整配置信息。
											</p>
										</div>
										<DialogFooter>
											<Button variant="outline" onClick={() => setDialogOpen(false)}>
												取消
											</Button>
											<Button
												className="bg-teal-500 text-white hover:bg-teal-600"
												onClick={() => setDialogOpen(false)}
											>
												确认导出
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>

								<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
									<SheetTrigger asChild>
										<Button variant="secondary">
											<Shield className="size-4" />
											安全设置
										</Button>
									</SheetTrigger>
									<SheetContent side="right">
										<SheetHeader>
											<SheetTitle>安全设置</SheetTitle>
											<SheetDescription>
												配置插件的安全相关选项
											</SheetDescription>
										</SheetHeader>
										<div className="mt-4 space-y-3">
											<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
												<User className="size-4 text-teal-500" />
												<span className="text-sm">权限管理</span>
											</div>
											<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
												<Bell className="size-4 text-teal-500" />
												<span className="text-sm">安全告警</span>
											</div>
											<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
												<Calendar className="size-4 text-teal-500" />
												<span className="text-sm">审计日志</span>
											</div>
										</div>
									</SheetContent>
								</Sheet>
							</div>
						</section>

						{/* Navigation hint */}
						<section className="rounded-md border border-dashed border-theme-border p-4">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Info className="size-4 text-teal-500" />
								点击插件的"详情"按钮或列表操作中的"查看详情"可跳转到 <code className="text-teal-500">/plugin/detail</code>
							</div>
						</section>
					</div>
				</ScrollArea>
			</div>
		</TooltipProvider>
	);
}
