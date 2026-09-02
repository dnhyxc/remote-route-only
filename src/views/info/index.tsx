import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
	FlaskConical,
	Info,
	Layers,
	ArrowRight,
	Sparkles,
	Zap,
	Shield,
	Settings,
	User,
	Bell,
	Calendar,
	Star,
	Heart,
	ThumbsUp,
	MessageSquare,
	Download,
	Upload,
	ExternalLink,
	HelpCircle,
	CheckCircle,
	AlertTriangle,
	FileText,
	Code2,
	Database,
} from "lucide-react";
import { useNavigation } from "@/router/NavigationContext";
import type { HostBridgeProps } from "@/types/host";
import "@/styles.css";

interface InfoPageProps {
	bridge?: HostBridgeProps;
}

function InfoPage({ bridge }: InfoPageProps) {
	const { navigate } = useNavigation();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [sheetOpen, setSheetOpen] = useState(false);
	const [selectedFramework, setSelectedFramework] = useState<string>("react");
	const [selectedTheme, setSelectedTheme] = useState<string>("light");

	const theme = bridge?.api.theme ?? "light";
	const locale = bridge?.api.locale ?? "zh-CN";
	const pluginId = bridge?.plugin.id ?? "routeOnlyDemo";
	const pluginVersion = bridge?.plugin.version ?? "1.0.0";

	function handleDetailNavigate() {
		navigate("/detail");
	}

	function handleHostToast() {
		bridge?.api?.ui?.showToast?.({
			message: "Host Toast from remote-route-only",
			type: "info",
			title: "routeOnlyDemo",
		});
	}

	return (
		<TooltipProvider delayDuration={200}>
			<div
				className="rounded-md box-border flex h-full min-h-0 w-full flex-col bg-theme-background text-textcolor"
				data-theme={theme}
			>
				<header className="flex shrink-0 items-start justify-between gap-3 p-5.5">
					<div className="flex-1 flex justify-between gap-3 border border-theme/10 shadow-sm rounded-md p-4.5">
						<div className="min-w-0">
							<div className="mb-1 flex items-center gap-2 text-teal-500">
								<FlaskConical className="size-5" />
								<span className="text-sm font-medium">
									仅路由 · React + shadcn 说明页
								</span>
							</div>
							<h1 className="text-xl font-semibold text-textcolor">
								悬浮层 / Teleport 隔离验收
							</h1>
							<p className="mt-1 text-sm text-muted-foreground">
								plugin=
								<code className="text-teal-500">{pluginId}</code>· v
								{pluginVersion} · locale={locale} · theme={theme}
							</p>
						</div>
						<Button
							variant="outline"
							size="sm"
							className="lucide-stroke-draw-hover shrink-0"
							onClick={handleHostToast}
						>
							<Info className="size-4" />
							Host Toast
						</Button>
					</div>
				</header>

				<ScrollArea className="flex-1 min-h-0">
					<div className="flex flex-col gap-4 p-5.5">
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h2 className="mb-1 flex items-center gap-2 text-sm font-medium">
								<Layers className="size-4 text-teal-500" />
								验收清单 · 仅路由
							</h2>
							<ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
								<li>
									registry <strong>不写 menu</strong>：侧栏无入口；仅{' '}
									<code>injectRoute</code> 挂载{' '}
									<code>/route-only</code>
								</li>
								<li>
									打开任一弹层后，utility / 背景色仍正常（未被 Host
									盖掉，也不污染 Host）
								</li>
								<li>
									弹层挂在 <code>body</code> 时：应在{' '}
									<code>[data-mf-portal-scope]</code> 内
								</li>
								<li>点击"跳转到详情页"应在子应用内部完成路由跳转</li>
							</ul>
						</section>

						<div className="flex justify-center py-2">
							<Button onClick={handleDetailNavigate}>
								跳转到详情页
								<ArrowRight className="size-4" />
							</Button>
						</div>

						<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{/* Tooltip */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed shadow-sm border-theme/10 bg-theme-background p-4">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Info className="size-4 text-teal-500" />
									Tooltip
								</p>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="secondary" className="w-full">
											悬停看提示
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Tooltip Teleport → body（测 @scope）</p>
									</TooltipContent>
								</Tooltip>
							</div>

							{/* Popover */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed border-theme/10 shadow-sm  bg-theme-background p-4">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Sparkles className="size-4 text-teal-500" />
									Popover
								</p>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant="secondary" className="w-full">
											打开 Popover
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-72">
										<p className="text-sm font-medium text-textcolor">
											Popover 内容区
										</p>
										<p className="mt-1 text-xs text-textcolor">
											应带 popover token 背景；若变透明/无样式即隔离漏了。
										</p>
									</PopoverContent>
								</Popover>
							</div>

							{/* Dialog */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed shadow-sm border-theme/10 bg-theme-background p-4">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Zap className="size-4 text-teal-500" />
									Dialog
								</p>
								<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
									<DialogTrigger asChild>
										<Button variant="secondary" className="w-full">
											打开 Dialog
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>React Dialog</DialogTitle>
											<DialogDescription>
												遮罩与内容应继承 Remote @scope 样式。
											</DialogDescription>
										</DialogHeader>
										<div className="py-4 space-y-2 text-sm text-muted-foreground">
											<p>这是一个 Dialog 弹窗组件示例。</p>
											<p>支持遮罩层、标题、描述和底部操作按钮。</p>
										</div>
										<DialogFooter>
											<Button
												variant="outline"
												onClick={() => setDialogOpen(false)}
											>
												取消
											</Button>
											<Button
												className="bg-teal-500 text-white hover:bg-teal-600"
												onClick={() => setDialogOpen(false)}
											>
												确认
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>

							{/* Select */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed shadow-sm border-theme/10  bg-theme-background p-4">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Settings className="size-4 text-teal-500" />
									Select
								</p>
								<Select
									value={selectedFramework}
									onValueChange={setSelectedFramework}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="选择框架" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="react">React</SelectItem>
										<SelectItem value="vue">Vue</SelectItem>
										<SelectItem value="svelte">Svelte</SelectItem>
										<SelectItem value="angular">Angular</SelectItem>
									</SelectContent>
								</Select>
								<p className="text-xs text-muted-foreground">
									已选择:{" "}
									<code className="text-teal-500">{selectedFramework}</code>
								</p>
							</div>

							{/* Select (主题) */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed  shadow-sm border-theme/10  bg-theme-background p-4">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Shield className="size-4 text-teal-500" />
									Select (主题)
								</p>
								<Select value={selectedTheme} onValueChange={setSelectedTheme}>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="选择主题" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">Light</SelectItem>
										<SelectItem value="dark">Dark</SelectItem>
										<SelectItem value="system">System</SelectItem>
									</SelectContent>
								</Select>
								<p className="text-xs text-muted-foreground">
									已选择: <code className="text-teal-500">{selectedTheme}</code>
								</p>
							</div>

							{/* Sheet */}
							<div className="flex flex-col gap-2 rounded-md border border-dashed  border-theme/10  bg-theme-background p-4 shadow-sm">
								<p className="text-sm font-medium flex items-center gap-1.5">
									<Layers className="size-4 text-teal-500" />
									Sheet
								</p>
								<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
									<SheetTrigger asChild>
										<Button variant="secondary" className="w-full">
											打开 Sheet
										</Button>
									</SheetTrigger>
									<SheetContent side="right">
										<SheetHeader>
											<SheetTitle>侧滑 Sheet</SheetTitle>
											<SheetDescription>
												从边缘滑出的面板同样走 Teleport，用于测遮罩层样式。
											</SheetDescription>
										</SheetHeader>
										<div className="mt-4 space-y-3">
											<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
												<User className="size-4 text-teal-500" />
												<span className="text-sm">用户管理</span>
											</div>
											<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
												<Bell className="size-4 text-teal-500" />
												<span className="text-sm">通知设置</span>
											</div>
											<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
												<Calendar className="size-4 text-teal-500" />
												<span className="text-sm">日历视图</span>
											</div>
										</div>
									</SheetContent>
								</Sheet>
							</div>
						</div>

						{/* Additional interactive elements */}
						<section className="rounded-md border  border-theme/10  bg-theme-background p-4 shadow-sm">
							<h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Sparkles className="size-4 text-teal-500" />
								更多交互组件
							</h2>
							<div className="flex flex-wrap gap-3">
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<Star className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>收藏</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<Heart className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>喜欢</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<ThumbsUp className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>点赞</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<MessageSquare className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>评论</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<Download className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>下载</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<Upload className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>上传</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<ExternalLink className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>外部链接</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<HelpCircle className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>帮助</TooltipContent>
								</Tooltip>
							</div>
						</section>

						{/* Dialog with form */}
						<section className="rounded-md border  border-theme/10  bg-theme-background p-4 shadow-sm">
							<h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<FileText className="size-4 text-teal-500" />
								表单弹窗
							</h2>
							<div className="flex flex-wrap gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="secondary">新建项目</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>新建项目</DialogTitle>
											<DialogDescription>
												填写项目信息以创建新项目。
											</DialogDescription>
										</DialogHeader>
										<div className="py-4 space-y-3">
											<div className="space-y-1">
												<label htmlFor="new-project-name" className="text-sm font-medium">
													项目名称
												</label>
												<input
													id="new-project-name"
													type="text"
													placeholder="请输入项目名称"
													className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
												/>
											</div>
											<div className="space-y-1">
												<label htmlFor="new-project-desc" className="text-sm font-medium">
													项目描述
												</label>
												<textarea
													id="new-project-desc"
													placeholder="请输入项目描述"
													className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
												/>
											</div>
											<div className="space-y-1">
												<label htmlFor="new-project-stack" className="text-sm font-medium">
													技术栈
												</label>
												<Select defaultValue="react">
													<SelectTrigger id="new-project-stack">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="react">React</SelectItem>
														<SelectItem value="vue">Vue</SelectItem>
														<SelectItem value="svelte">Svelte</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
										<DialogFooter>
											<Button variant="outline">取消</Button>
											<Button className="bg-teal-500 text-white hover:bg-teal-600">
												创建
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>

								<Dialog>
									<DialogTrigger asChild>
										<Button variant="secondary">确认删除</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>确认删除</DialogTitle>
											<DialogDescription>
												此操作不可撤销。确定要删除吗？
											</DialogDescription>
										</DialogHeader>
										<DialogFooter>
											<Button variant="outline">取消</Button>
											<Button variant="destructive">删除</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
						</section>

						{/* Code / Data demo */}
						<section className="rounded-md border  border-theme/10  bg-theme-background p-4 shadow-sm">
							<h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Code2 className="size-4 text-teal-500" />
								代码与数据
							</h2>
							<div className="grid gap-3 sm:grid-cols-2">
								<Popover>
									<PopoverTrigger asChild>
										<Button variant="outline" className="w-full justify-start">
											<Code2 className="size-4" />
											查看代码片段
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80">
										<pre className="text-xs text-textcolor bg-theme-background p-2 rounded overflow-auto">
											{`function hello() {
  console.log('Hello World');
}`}
										</pre>
									</PopoverContent>
								</Popover>

								<Popover>
									<PopoverTrigger asChild>
										<Button variant="outline" className="w-full justify-start">
											<Database className="size-4" />
											查看数据结构
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80">
										<pre className="text-xs text-textcolor bg-theme-background p-2 rounded overflow-auto">
											{`{
  "name": "remote-route-only",
  "type": "micro-frontend",
  "framework": "react"
}`}
										</pre>
									</PopoverContent>
								</Popover>
							</div>
						</section>

						{/* Status indicators */}
						<section className="rounded-md border  border-theme/10  bg-theme-background p-4 shadow-sm">
							<h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<CheckCircle className="size-4 text-teal-500" />
								状态指示
							</h2>
							<div className="flex flex-wrap gap-3">
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 text-sm">
											<CheckCircle className="size-4" />
											运行中
										</div>
									</TooltipTrigger>
									<TooltipContent>服务正常运行</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 text-amber-600 text-sm">
											<AlertTriangle className="size-4" />
											警告
										</div>
									</TooltipTrigger>
									<TooltipContent>部分资源使用率偏高</TooltipContent>
								</Tooltip>
							</div>
						</section>
					</div>
				</ScrollArea>
			</div>
		</TooltipProvider>
	);
}

export default InfoPage;
