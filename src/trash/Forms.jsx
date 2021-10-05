import React, {useState} from 'react'
import './Forms.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Forms = () => {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(firstName);
    }
    return (
        <div>
            <strong>Full Name: </strong>  
            <span className={`default ${firstName.length < 5 ? 'error': 'success'}`}>{firstName}  </span>
            <span className={`default ${lastName.length < 5 ? 'error': 'success'}`}>{lastName}</span><br /><br />
            <form>
                <input value={firstName} type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /><br /><br />
                <input value={lastName} type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /><br /><br />
                <button onClick={onSubmit}>Submit</button>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </form>
        </div>
    )
}

export default Forms
