/**
 * MF expose 入口。
 * - default = App（含 NavigationProvider，才能内部跳转）
 * - activate/deactivate：挂在 App 上再由此导出
 * Host 不跑 main.tsx，须在此引入样式。
 */
import '@/styles.css';
import App from './App';

export default App;
