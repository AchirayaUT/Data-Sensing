import React, { useState } from "react";
import { NavbarManage, TableRoleManage } from '@/src/components/Components'
import { useRouter } from "next/router";
import { MenuBar } from '@/src/components/Components'


const RoleManagement = () => {
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
            <TableRoleManage />
        </NavbarManage>
    )
}

export default RoleManagement