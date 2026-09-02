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
	ArrowLeft,
	FlaskConical,
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
} from "lucide-react";
import { useNavigation } from "@/router/NavigationContext";

export default function DetailPage() {
	const { navigate } = useNavigation();
	const [sheetOpen, setSheetOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("option1");
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<TooltipProvider delayDuration={200}>
			<div className="rounded-md flex h-full min-h-0 flex-col bg-theme-background text-textcolor">
				<header className="flex shrink-0 items-start justify-between gap-3 p-5.5 pb-0">
					<div className="flex-1 flex flex-col justify-between border border-theme/10 shadow-sm rounded-md p-4.5 bg-theme-background">
						<div className="mb-1 flex items-center gap-2 text-teal-500">
							<FlaskConical className="size-5" />
							<span className="text-sm font-medium">
								仅路由 · 详情页
							</span>
						</div>
						<h1 className="text-xl font-semibold text-textcolor">
							Detail Page
						</h1>
						<p className="mt-1 text-sm text-textcolor">
							这是从说明页跳转过来的详情页
						</p>
					</div>
				</header>

				<Button
					size="sm"
					onClick={() => navigate("/info")}
					className="shrink-0 mx-5.5 my-4.5 w-fit"
				>
					<ArrowLeft className="size-4" />
					返回说明页
				</Button>

				<ScrollArea className="flex-1 min-h-0">
					<div className="flex flex-col gap-4 p-5.5 pt-0">
						{/* Detail card */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-6 shadow-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="flex size-12 items-center justify-center rounded-lg bg-teal-500/10">
									<FileText className="size-6 text-teal-500" />
								</div>
								<div>
									<h2 className="text-lg font-semibold text-textcolor">
										项目详情
									</h2>
									<p className="text-sm text-textcolor">
										查看项目的详细信息和配置
									</p>
								</div>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-1">
									<span className="text-xs text-textcolor">项目名称</span>
									<p className="text-sm font-medium">remote-route-only</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-textcolor">框架</span>
									<p className="text-sm font-medium">React 19</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-textcolor">UI 库</span>
									<p className="text-sm font-medium">shadcn/ui + Radix UI</p>
								</div>
								<div className="space-y-1">
									<span className="text-xs text-textcolor">路由</span>
									<p className="text-sm font-medium">
										自定义 NavigationProvider
									</p>
								</div>
							</div>
						</section>

						{/* Tooltip examples */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Info className="size-4 text-teal-500" />
								Tooltip 示例
							</h3>
							<div className="flex flex-wrap gap-3">
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="secondary">悬停显示提示</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>这是一个 Tooltip 提示内容</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<span className="inline-flex h-9 items-center rounded-md border border-input bg-background px-3 text-sm">
											悬停文字
										</span>
									</TooltipTrigger>
									<TooltipContent>
										<p>文字也可以触发 Tooltip</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost" size="icon">
											<ExternalLink className="size-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>外部链接</p>
									</TooltipContent>
								</Tooltip>
							</div>
						</section>

						{/* Popover examples */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Sparkles className="size-4 text-teal-500" />
								Popover 示例
							</h3>
							<div className="flex flex-wrap gap-3">
								<Popover>
									<PopoverTrigger asChild>
										<Button variant="secondary">打开信息</Button>
									</PopoverTrigger>
									<PopoverContent>
										<h4 className="font-medium mb-1 text-textcolor">
											项目信息
										</h4>
										<p className="text-sm text-textcolor">
											这是一个 Popover 气泡卡片，展示项目的简要信息。
										</p>
									</PopoverContent>
								</Popover>

								<Popover>
									<PopoverTrigger asChild>
										<Button variant="secondary">配置选项</Button>
									</PopoverTrigger>
									<PopoverContent className="w-64">
										<h4 className="font-medium mb-2 text-textcolor">
											配置选项
										</h4>
										<div className="space-y-2 text-textcolor">
											<div className="flex items-center justify-between">
												<span className="text-sm">自动保存</span>
												<span className="text-xs text-teal-500">开</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-sm">实时预览</span>
												<span className="text-xs text-teal-500">开</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-sm">暗色模式</span>
												<span className="text-xs text-textcolor">关</span>
											</div>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</section>

						{/* Select */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Settings className="size-4 text-teal-500" />
								Select 选择器
							</h3>
							<div className="flex flex-wrap gap-4 items-center">
								<Select
									value={selectedOption}
									onValueChange={setSelectedOption}
								>
									<SelectTrigger className="w-48">
										<SelectValue placeholder="选择选项" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="option1">选项一：基础配置</SelectItem>
										<SelectItem value="option2">选项二：高级配置</SelectItem>
										<SelectItem value="option3">选项三：自定义配置</SelectItem>
									</SelectContent>
								</Select>
								<span className="text-sm text-textcolor">
									已选择:{" "}
									<code className="text-teal-500">{selectedOption}</code>
								</span>
							</div>
						</section>

						{/* Dialog */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Zap className="size-4 text-teal-500" />
								Dialog 弹窗
							</h3>
							<div className="flex flex-wrap gap-3">
								<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
									<DialogTrigger asChild>
										<Button variant="secondary">打开弹窗</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>详情确认</DialogTitle>
											<DialogDescription>
												请确认您已阅读完整的详情内容。
											</DialogDescription>
										</DialogHeader>
										<div className="py-4">
											<p className="text-sm text-textcolor">
												这是一个详细的 Dialog 弹窗，展示详情页的确认信息。
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
												className="bg-teal-500 text-white hover:bg-teal-600"
												onClick={() => setDialogOpen(false)}
											>
												确认
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
						</section>

						{/* Sheet */}
						<section className="rounded-md border border-theme/10 bg-theme-background p-4 shadow-sm">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
								<Shield className="size-4 text-teal-500" />
								Sheet 侧滑
							</h3>
							<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
								<SheetTrigger asChild>
									<Button variant="secondary">打开侧滑面板</Button>
								</SheetTrigger>
								<SheetContent side="left">
									<SheetHeader>
										<SheetTitle>详情设置</SheetTitle>
										<SheetDescription>
											在此处可以查看和调整详情页的各项设置。
										</SheetDescription>
									</SheetHeader>
									<div className="mt-4 space-y-3">
										<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
											<User className="size-4 text-teal-500" />
											<span className="text-sm">个人信息</span>
										</div>
										<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
											<Bell className="size-4 text-teal-500" />
											<span className="text-sm">通知偏好</span>
										</div>
										<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
											<Calendar className="size-4 text-teal-500" />
											<span className="text-sm">时间设置</span>
										</div>
										<div className="flex items-center gap-2 p-2 rounded bg-muted/50">
											<Download className="size-4 text-teal-500" />
											<span className="text-sm">导出数据</span>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</section>

						{/* Navigation hint */}
						<section className="rounded-md border border-dashed border-theme/10 p-4 bg-theme-background shadow-sm">
							<div className="flex items-center gap-2 text-sm text-textcolor">
								<ChevronRight className="size-4 text-teal-500" />
								嵌入主项目时，此详情页通过子应用内部路由跳转到达
							</div>
						</section>
					</div>
				</ScrollArea>
			</div>
		</TooltipProvider>
	);
}
