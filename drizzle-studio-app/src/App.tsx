import { Sidebar } from './components/Sidebar';
import { DataGridComponent } from './components/DataGrid';
import './App.css';

function App() {
  return (
    <div className="grid size-full">
      <div className="grid-area-1-1 flex size-full bg-[rgb(55,53,47)]">
        <div className="relative flex">
          <div className="flex grow transition-width duration-150 ease-in-out">
            <Sidebar />
          </div>
        </div>

        <div className="bg-background relative flex min-w-[0] flex-1">
          <DataGridComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
