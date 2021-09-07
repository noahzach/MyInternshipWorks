import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Checkbox } from '@material-ui/core';

export default function Test(props) {
    const [name, setName] = useState()
    const [listData, setListData] = useState([])
    useEffect(test2, [])
    // [props.checked]

    function test2() {
        axios.get('https://reqres.in/api/users?page=2').then((res) => {
            console.log('res ---->' , res.data.data)
            setListData(res.data.data)
        }).catch((err) => {
            console.log('err----->' , err)
        })
    }

    console.log('list data state', listData)

    return (
        <div id='name'>
            <h1>Name Component</h1>
            {listData.map((item) => <h2>{item.email}</h2>)}
            {/* <Checkbox
                checked = {props.checked}
                onChange = {(event) => props.setChecked(event.target.checked)}
                inputProps = {{ 'aria-label': 'primary checkbox' }}
                /> */}
            <input value = {name} onChange={(event) => setName(event.target.value)} placeholder ='Enter Name' />
        </div>
    )
}