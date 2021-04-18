import { styled } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const StyledDataGrid = styled(DataGrid)({
  width: '80%',
  maxHeight: 160,
  '& .MuiDataGrid-footer': {
    // display: 'none',
  },
  '& .MuiDataGrid-cell': {
    border: '2px solid black',
  },
  '& .MuiDataGrid-colCell': {
    border: '2px solid black',
  },
  '& svg': {
    display: 'none',
  },
});

export default StyledDataGrid;
