import React, { useState } from "react";
import { NavbarManage, TableUserManage } from '@/src/components/Components'
import { useRouter } from "next/router";
import { MenuBar } from '@/src/components/Components'


const UserManagement = () => {
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
            <TableUserManage />
        </NavbarManage>
    )
}

export default UserManagement