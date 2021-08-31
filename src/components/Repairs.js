import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
export const Repairs = () => {

    return (
        <>
        <h1><strong>Honey Rae's Repair Shop</strong></h1>
        <h2>Customers</h2>
        <CustomerList />
        <h2>Employees</h2>
        <EmployeeList />
        <h2>Service Tickets</h2>
        <TicketList />
        </>
    )
}