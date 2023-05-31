import React, { useState } from "react";
import { NavbarManage, TableAgingManage } from '@/src/components/Components'
import { useRouter } from "next/router";
import { MenuBar } from '@/src/components/Components'


const AgingManagement = () => {
    const router = useRouter()
    const [drawerOpen, setDrawerOpen] = useState(true)

    const setDrawer = (open) => {
        setDrawerOpen(open)
    }

    const backToHome = () => {
        router.push('/main')
    }

    return (
        <NavbarManage
            defaultDrawer={true}
            setDrawer={setDrawer}
            title="Management"
            tabChildren={<MenuBar />}
        >
            <TableAgingManage />
        </NavbarManage>
    )
}

export default AgingManagement