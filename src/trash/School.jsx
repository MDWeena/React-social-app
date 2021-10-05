import React from 'react'
import Department  from './Department'

const School = () => {
    let students = [
        {
            name: 'Brad',
            age: '26',
            mat_no: 'shaa-2021-001'
        },
        {
            name: 'Grace',
            age: '48',
            mat_no: 'shaa-2021-002'
        },
        {
            name: 'Dozie',
            age: '70',
            mat_no: 'shaa-2021-003'
        },
        {
            name: 'Kemi',
            age: '17',
            mat_no: 'shaa-2021-004'
        },
        {
            name: 'Godfrey',
            age: '35',
            mat_no: 'shaa-2021-005'
        },
        {
            name: 'Emmanuel',
            age: '45',
            mat_no: 'shaa-2021-006'
        },
        
    ];
    return (
        <div>
            <Department data={students}/>
        </div>
    )
}

export default School
