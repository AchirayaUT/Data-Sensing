import React, { useState } from "react";
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styles from './tableUser.style'
import { DialogAction, DialogCreate } from '@/src/components/Components'
import { Toolbar } from "@mui/material";
import { GridToolbarFilterButton, GridToolbarContainer } from '@mui/x-data-grid';



const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'userName',
    headerName: 'User Name',
    width: 200,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 200,
    editable: true,
  },
  {
    field: 'joinedDate',
    headerName: 'Joined Date',
    // type: 'number',
    width: 200,
    editable: true,
  },
  // {
  //     field: 'status',
  //     headerName: 'Status',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, userName: 'Snow001', name: 'Narongchai', email: 'Narongchai@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 2, userName: 'Lannister002', name: 'Kittilit', email: 'Kittilit@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 3, userName: 'Lannister003', name: 'Kayamashi', email: 'Kayamashi@gamil.com', status: 'Active', role: 'FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 4, userName: 'Stark004', name: 'Arya', email: 'Arya@gamil.com', status: 'Active', role: 'Super FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 5, userName: 'Targaryen005', name: 'Daenerys', email: 'Daenerys@gamil.com', status: 'Active', role: 'Super Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 6, userName: 'Melisandre006', name: 'Prajope', email: 'Prajope@gamil.com', status: 'Active', role: 'FA2', joinedDate: 'May 06, 2021 15:00' },
  { id: 7, userName: 'Clifford007', name: 'Narathiwad', email: 'Narathiwad@gamil.com', status: 'Active', role: 'PM Supervisor1', joinedDate: 'May 06, 2021 15:00' },
  { id: 8, userName: 'Frances008', name: 'Rossini', email: 'Rossini@gamil.com', status: 'Deactive', role: 'PM Supervisor1', joinedDate: 'May 06, 2021 15:00' },
  { id: 9, userName: 'Roxie009', name: 'Harvey', email: 'Harvey@gamil.com', status: 'Active', role: 'PM Supervisor2', joinedDate: 'May 06, 2021 15:00' },
  { id: 10, userName: 'Stark010', name: 'Wandee', email: 'Wandee@gamil.com', status: 'Active', role: 'PM Admin1', joinedDate: 'May 06, 2021 15:00' },
  { id: 11, userName: 'Targaryen011', name: 'Nongkran', email: 'Nongkran@gamil.com', status: 'Active', role: 'PM Admin2', joinedDate: 'May 06, 2021 15:00' },
  { id: 12, userName: 'Melisandre012', name: 'Achiraya', email: 'Achiraya@gamil.com', status: 'Active', role: 'Super Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 13, userName: 'Clifford013', name: 'Ferrara', email: 'Ferrara@gamil.com', status: 'Active', role: 'PM Supervisor1', joinedDate: 'May 06, 2021 15:00' },
  { id: 14, userName: 'Frances014', name: 'Mahahing', email: 'Mahahing@gamil.com', status: 'Active', role: 'PM Supervisor2', joinedDate: 'May 06, 2021 15:00' },
  { id: 15, userName: 'Roxie015', name: 'Mahanakhon', email: 'Mahanakhon@gamil.com', status: 'Deactive', role: 'PM Supervisor3', joinedDate: 'May 06, 2021 15:00' },
  { id: 16, userName: 'Snow001', name: 'Narongchai', email: 'Narongchai@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 17, userName: 'Lannister002', name: 'Kittilit', email: 'Kittilit@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 18, userName: 'Lannister003', name: 'Kayamashi', email: 'Kayamashi@gamil.com', status: 'Active', role: 'FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 19, userName: 'Stark004', name: 'Arya', email: 'Arya@gamil.com', status: 'Active', role: 'Super FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 20, userName: 'Targaryen005', name: 'Daenerys', email: 'Daenerys@gamil.com', status: 'Active', role: 'Super Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 21, userName: 'Melisandre006', name: 'Prajope', email: 'Prajope@gamil.com', status: 'Active', role: 'FA2', joinedDate: 'May 06, 2021 15:00' },
  { id: 22, userName: 'Stark010', name: 'Wandee', email: 'Wandee@gamil.com', status: 'Active', role: 'PM Admin1', joinedDate: 'May 06, 2021 15:00' },
  { id: 23, userName: 'Targaryen011', name: 'Nongkran', email: 'Nongkran@gamil.com', status: 'Active', role: 'PM Admin2', joinedDate: 'May 06, 2021 15:00' },
  { id: 24, userName: 'Melisandre012', name: 'Achiraya', email: 'Achiraya@gamil.com', status: 'Active', role: 'Super Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 25, userName: 'Clifford013', name: 'Ferrara', email: 'Ferrara@gamil.com', status: 'Active', role: 'PM Supervisor1', joinedDate: 'May 06, 2021 15:00' },
  { id: 26, userName: 'Frances014', name: 'Mahahing', email: 'Mahahing@gamil.com', status: 'Active', role: 'PM Supervisor2', joinedDate: 'May 06, 2021 15:00' },
  { id: 27, userName: 'Roxie015', name: 'Mahanakhon', email: 'Mahanakhon@gamil.com', status: 'Deactive', role: 'PM Supervisor3', joinedDate: 'May 06, 2021 15:00' },
  { id: 28, userName: 'Snow001', name: 'Narongchai', email: 'Narongchai@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 29, userName: 'Lannister002', name: 'Kittilit', email: 'Kittilit@gamil.com', status: 'Active', role: 'Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 30, userName: 'Lannister003', name: 'Kayamashi', email: 'Kayamashi@gamil.com', status: 'Active', role: 'FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 31, userName: 'Stark004', name: 'Arya', email: 'Arya@gamil.com', status: 'Active', role: 'Super FA1', joinedDate: 'May 06, 2021 15:00' },
  { id: 32, userName: 'Targaryen005', name: 'Daenerys', email: 'Daenerys@gamil.com', status: 'Active', role: 'Super Admin', joinedDate: 'May 06, 2021 15:00' },
  { id: 33, userName: 'Melisandre006', name: 'Prajope', email: 'Prajope@gamil.com', status: 'Active', role: 'FA2', joinedDate: 'May 06, 2021 15:00' },
];

const CustomToolbar = ({ setFilterButtonEl }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Toolbar variant="dense" disableGutters>
        <div style={{ flexGrow: 1 }}></div>
        <GridToolbarContainer sx={{ p: 0 }}>
          <GridToolbarFilterButton ref={setFilterButtonEl} />
        </GridToolbarContainer>
      </Toolbar>
    </div>
  );
}


const TableUserManage = () => {
  const [pageSize, setPageSize] = useState(10)
  const [filterButtonEl, setFilterButtonEl] = useState(null)


  return (

    <ThemeProvider theme={styles}>
      <Box sx={{ display: "flex", justifyContent: 'left', alignItems: "center", width: "100%", }}>
        <Box><DialogCreate /></Box>
        <Box style={{ margin: 10 }}>
          <DialogAction />
        </Box>
      </Box>

      <Grid item>
        <Typography variant="subtitle1" component="div" style={{ fontSize: '14px', fontWeight: 'bolder', textAlign: 'right', color: '#6D6D6D' }}>
          {`(${rows.length} User)`}
        </Typography>
      </Grid>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            // rowsPerPageOptions={[10, 20, 50]}
            pageSize={pageSize}
            pagination
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            autoHeight
            checkboxSelection
            components={{
              Toolbar: CustomToolbar,
            }}
            componentsProps={{
              panel: {
                anchorEl: filterButtonEl,
                placement: "bottom-end",
              },
              toolbar: {
                setFilterButtonEl,
              },
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default TableUserManage