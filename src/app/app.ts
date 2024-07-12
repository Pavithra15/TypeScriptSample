import { Grid, Group, Filter, Page, Sort } from '@syncfusion/ej2-grids';
import { data } from './datasource';

Grid.Inject(Group, Filter, Page, Sort);
    
// initialize grid control
let grid: Grid = new Grid({
    dataSource: data,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'EmployeeID', width: 140, headerText: 'Employee ID', textAlign: 'Right', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowGrouping: true,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true
});

// render initialized grid
grid.appendTo('#Grid');