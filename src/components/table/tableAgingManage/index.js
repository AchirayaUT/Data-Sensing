import React, { useState } from "react";
import { Box, Grid, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useRouter } from "next/router";
import { deepPurple } from "@mui/material/colors";
import { DataGrid } from '@mui/x-data-grid';
import styles from './tableAging.style'
import { DialogAction } from '@/src/components/Components'


const columns = [
  {
    field: 'id',
    headerName: 'ID',
    // width: 250
  },
  {
    field: 'agingAmount',
    headerName: 'Aging Day (Amount)',
    width: 400,
    editable: true,
  },
  {
    field: 'agingQty',
    headerName: 'Aging Day (Qty)',
    width: 400,
    editable: true,
  },
  {
    field: 'createDate',
    headerName: 'Create Date',
    width: 400,
    editable: true,
  },
];

const rows = [
  { id: 1, agingAmount: '1-30', agingQty: '1-30', createDate: 'May 06, 2021 15:00' },
  { id: 2, agingAmount: '31-60', agingQty: '31-60', createDate: 'May 06, 2021 15:00' },
  { id: 3, agingAmount: '61-90', agingQty: '61-90', createDate: 'May 06, 2021 15:00' },
  { id: 4, agingAmount: '91-120', agingQty: '91-120', createDate: 'May 06, 2021 15:00' },
  { id: 5, agingAmount: '121-150', agingQty: '121-150', createDate: 'May 06, 2021 15:00' },
];


const TableAgingManage = () => {
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
          {`(5 User)`}
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

export default TableAgingManage