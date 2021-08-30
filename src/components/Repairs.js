import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"

export const Repairs = () => {

    return (
        <>
        <h1><strong>Honey Rae's Repair Shop</strong></h1>
        <CustomerList />
        <EmployeeList />
        </>
    )
}