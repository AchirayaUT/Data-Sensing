import React, { useState } from "react";
import { Box, Grid, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useRouter } from "next/router";
import { DataGrid } from '@mui/x-data-grid';
import styles from './tableRole.style'
import { DialogAction } from '@/src/components/Components'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    // width: 250
  },
  {
    field: 'roleName',
    headerName: 'Role Name',
    width: 400,
    editable: true,
  },
  {
    field: 'scope',
    headerName: 'Scope',
    width: 400,
    editable: true,
  },
  {
    field: 'lastUpdated',
    headerName: 'Last Updated',
    width: 400,
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
  { id: 1, roleName: 'Admin', scope: 'Add user, Add Role', lastUpdated: 'May 06, 2021 15:00' },
  { id: 2, roleName: 'FA', scope: 'Brand , Family , Class , Subclass', lastUpdated: 'May 06, 2021 15:00' },
  { id: 3, roleName: 'PM Supervisor1', scope: 'Brand , Family', lastUpdated: 'May 06, 2021 15:00' },
  { id: 4, roleName: 'PM Admin1', scope: 'Brand , Family , Class , Subclass', lastUpdated: 'May 06, 2021 15:00' },
  { id: 5, roleName: 'PM Supervisor2', scope: 'Brand , Family', lastUpdated: 'May 06, 2021 15:00' },
  { id: 6, roleName: 'PM Admin2', scope: 'Brand , Family , Class , Subclass', lastUpdated: 'May 06, 2021 15:00' },
];


const TableRoleManage = () => {
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(true)

  const setDrawer = (open) => {
    setDrawerOpen(open)
  }

  const backToHome = () => {
    router.push('/main')
  }

  return (

    <ThemeProvider theme={styles}>
      <Box sx={{ display: "flex", justifyContent: 'left', alignItems: "center", width: "100%", }}>
        <Box style={{ margin: 10 }}>
          <DialogAction />
        </Box>
      </Box>

      <Grid item>
        <Typography variant="subtitle1" component="div" style={{ fontSize: '16px', fontWeight: 'bolder', textAlign: 'right', color: '#6D6D6D', marginRight: 30 }}>
          {`(6 Role)`}
        </Typography>
      </Grid>
      <Box sx={{ height: '80%', width: '100%', marginTop: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </ThemeProvider>
  )
}

export default TableRoleManage