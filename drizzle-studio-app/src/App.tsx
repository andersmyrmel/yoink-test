import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { DataGridComponent } from './components/DataGrid';
import './App.css';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Data grid */}
        <div className="flex-1 overflow-hidden">
          <DataGridComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
