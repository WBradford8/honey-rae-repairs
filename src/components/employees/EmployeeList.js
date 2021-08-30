import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
        <h2>Employees</h2>

        {
            employees.map(
                (employeeObject) => {
                    return <p key={`customer--${employeeObject.id}`}>{employeeObject.name}</p>
                }
            )
        }
        </>
    )
}