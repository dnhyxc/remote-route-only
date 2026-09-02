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
	ArrowLeft,
	FileText,
	Info,
	ExternalLink,
	Settings,
	User,
	Bell,
	Calendar,
	Sparkles,
	Zap,
	Shield,
	Download,
	Star,
	ChevronRight,
	CheckCircle2,
} from 'lucide-react';
import { useNavigation } from '@/router/NavigationContext';

export default function PluginDetailPage() {
	const { navigate } = useNavigation();
	const [sheetOpen, setSheetOpen] = useState(false);
	const [selectedEnv, setSelectedEnv] = useState('production');
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<TooltipProvider delayDuration={200}>
			<div className="flex h-full min-h-0 flex-col bg-theme-background text-textcolor">
				<header className="flex shrink-0 items-start justify-between gap-3 p-5.5">
					<div>
						<div className="mb-1 flex items-center gap-2 text-teal-500">
							<FlaskConical className="size-5" />
							<span className="text-sm font-medium">
								React + shadcn/ui 插件详情
							</span>
						</div>
						<h1 className="text-xl font-semibold text-textcolor">
							插件详情
						</h1>
						<p className="mt-1 text-sm text-muted-foreground">
							查看插件的详细配置和运行状态
						</p>
					</div>
					<Button
						variant="outline"
						size="sm"
						onClick={() => navigate('/plugin')}
						className="shrink-0"
					>
						<ArrowLeft className="size-4" />
						返回插件列表
					</Button>
				</header>

				<ScrollArea className="flex-1 min-h-0">
					<div className="flex flex-col gap-4 p-5.5 pt-0">
						{/* Plugin info card */}
						<section className="rounded-md border border-theme-border bg-theme-card p-6 shadow-sm">
							<div className="mb-4 flex items-center gap-3">
								<div className="flex size-12 items-center justify-center rounded-lg bg-teal-500/10">
									<FileText className="size-6 text-teal-500" />
								</div>
								<div>
									<h2 className="text-lg font-semibold text-textcolor">
										数据分析插件
									</h2>
									<p className="text-sm text-muted-foreground">
										实时数据采集与可视化分析
									</p>
								</div>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-1">
									<span className="text-xs text-muted-foreground">版本</span>
									<p className="text-sm font-medium text-textcolor">2.1.0</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-muted-foreground">状态</span>
									<p className="flex items-center gap-1 text-sm font-medium text-emerald-500">
										<CheckCircle2 className="size-4" />
										运行中
									</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-muted-foreground">作者</span>
									<p className="text-sm font-medium text-textcolor">Platform Team</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-muted-foreground">最后更新</span>
									<p className="text-sm font-medium text-textcolor">2025-08-08</p>
								</div>
							</div>
						</section>

						{/* Configuration */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Settings className="size-4 text-teal-500" />
								运行环境
							</h3>
							<div className="flex flex-wrap items-center gap-4">
								<Select value={selectedEnv} onValueChange={setSelectedEnv}>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="选择环境" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="production">生产环境</SelectItem>
										<SelectItem value="staging">预发环境</SelectItem>
										<SelectItem value="development">开发环境</SelectItem>
									</SelectContent>
								</Select>
								<span className="text-sm text-muted-foreground">
									当前选择：<code className="text-teal-500">{selectedEnv}</code>
								</span>
							</div>
						</section>

						{/* Tooltip examples */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Info className="size-4 text-teal-500" />
								快速操作
							</h3>
							<div className="flex flex-wrap gap-3">
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="secondary">
											<Zap className="size-4" />
											重启插件
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>重启插件服务</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="secondary">
											<ExternalLink className="size-4" />
											打开控制台
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>在新窗口打开插件控制台</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="destructive">
											<Download className="size-4" />
											下载日志
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>下载插件运行日志</p>
									</TooltipContent>
								</Tooltip>
							</div>
						</section>

						{/* Popover examples */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Sparkles className="size-4 text-teal-500" />
								版本信息
							</h3>
							<div className="flex flex-wrap gap-3">
								<Popover>
									<PopoverTrigger asChild>
										<Button variant="secondary">更新日志</Button>
									</PopoverTrigger>
									<PopoverContent className="w-72">
										<h4 className="mb-2 font-medium text-textcolor">v2.1.0</h4>
										<div className="space-y-2 text-sm text-textcolor">
											<p>• 新增实时数据导出功能</p>
											<p>• 优化大数据量渲染性能</p>
											<p>• 修复内存泄漏问题</p>
										</div>
									</PopoverContent>
								</Popover>

								<Popover>
									<PopoverTrigger asChild>
										<Button variant="secondary">依赖检查</Button>
									</PopoverTrigger>
									<PopoverContent className="w-64">
										<h4 className="mb-2 font-medium text-textcolor">依赖状态</h4>
										<div className="space-y-2 text-sm text-textcolor">
											<div className="flex items-center justify-between">
												<span>react</span>
												<span className="text-emerald-500">✓ 19.1.0</span>
											</div>
											<div className="flex items-center justify-between">
												<span>tailwindcss</span>
												<span className="text-emerald-500">✓ 4.1.18</span>
											</div>
											<div className="flex items-center justify-between">
												<span>radix-ui</span>
												<span className="text-emerald-500">✓ 1.2.0</span>
											</div>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</section>

						{/* Dialog */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Shield className="size-4 text-teal-500" />
								危险操作
							</h3>
							<div className="flex flex-wrap gap-3">
								<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
									<DialogTrigger asChild>
										<Button variant="destructive">卸载插件</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>确认卸载</DialogTitle>
											<DialogDescription>
												卸载后插件的所有数据和配置将被永久删除，此操作不可恢复。
											</DialogDescription>
										</DialogHeader>
										<div className="py-4">
											<p className="text-sm text-muted-foreground">
												请确认您已备份所有重要数据。
											</p>
										</div>
										<DialogFooter>
											<Button
												variant="outline"
												onClick={() => setDialogOpen(false)}
											>
												取消
											</Button>
											<Button
												variant="destructive"
												onClick={() => {
													setDialogOpen(false);
													navigate('/plugin');
												}}
											>
												确认卸载
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
						</section>

						{/* Sheet */}
						<section className="rounded-md border border-theme-border bg-theme-card p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Star className="size-4 text-teal-500" />
								高级配置
							</h3>
							<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
								<SheetTrigger asChild>
									<Button variant="secondary">打开配置面板</Button>
								</SheetTrigger>
								<SheetContent side="left">
									<SheetHeader>
										<SheetTitle>高级配置</SheetTitle>
										<SheetDescription>
											调整插件的高级配置选项
										</SheetDescription>
									</SheetHeader>
									<div className="mt-4 space-y-3">
										<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
											<User className="size-4 text-teal-500" />
											<span className="text-sm">访问权限</span>
										</div>
										<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
											<Bell className="size-4 text-teal-500" />
											<span className="text-sm">告警通知</span>
										</div>
										<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
											<Calendar className="size-4 text-teal-500" />
											<span className="text-sm">定时任务</span>
										</div>
										<div className="flex items-center gap-2 rounded bg-muted/50 p-2">
											<Settings className="size-4 text-teal-500" />
											<span className="text-sm">性能参数</span>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</section>

						{/* Navigation hint */}
						<section className="rounded-md border border-dashed border-theme-border p-4">
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<ChevronRight className="size-4 text-teal-500" />
								这是 <code className="text-teal-500">/plugin/detail</code> 子路由页面，通过 /plugin 页面跳转到达
							</div>
						</section>
					</div>
				</ScrollArea>
			</div>
		</TooltipProvider>
	);
}
