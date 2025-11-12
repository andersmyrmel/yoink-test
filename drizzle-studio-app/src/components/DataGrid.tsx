import DataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

interface Row {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
}

const columns = [
  { key: 'id', name: 'ID', width: 32, frozen: true },
  { key: 'col1', name: 'Column 1', width: 200 },
  { key: 'col2', name: 'Column 2', width: 200 },
  { key: 'col3', name: 'Column 3', width: 200 },
  { key: 'col4', name: 'Column 4', width: 200 },
  { key: 'col5', name: 'Column 5', width: 200 },
  { key: 'col6', name: 'Column 6', width: 200 },
  { key: 'col7', name: 'Column 7', width: 200 },
  { key: 'col8', name: 'Column 8', width: 200 },
];

const generateRows = (count: number): Row[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    col1: `Row ${i + 1} - Col 1`,
    col2: `Row ${i + 1} - Col 2`,
    col3: `Row ${i + 1} - Col 3`,
    col4: `Row ${i + 1} - Col 4`,
    col5: `Row ${i + 1} - Col 5`,
    col6: `Row ${i + 1} - Col 6`,
    col7: `Row ${i + 1} - Col 7`,
    col8: `Row ${i + 1} - Col 8`,
  }));
};

const rows = generateRows(50);

export function DataGridComponent() {
  return (
    <div className="flex min-w-[0] flex-1 flex-col overflow-auto">
      <div className="flex min-w-[0] flex-1 flex-col overflow-hidden">
        <div className="flex flex-col border-b bg-background p-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              All statements executed successfully
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <DataGrid
            columns={columns}
            rows={rows}
            className="fill-grid rdg-dark"
            style={{ height: '100%' }}
            rowHeight={32}
          />
        </div>
      </div>
    </div>
  );
}
