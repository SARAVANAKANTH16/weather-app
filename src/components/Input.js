import React from 'react';
import {Button,Input} from '@mui/material';
import './Inputer.css';

const Inputer = ({InputData, setInput , findweather}) => {

    const handleChange = (event)=>{
        setInput(event.target.value)
    }

    const handleClick = (event)=>{
        event.preventDefault();
        findweather();
    }
    return (
        <div className='inputBox'>
            <div className='inputBox__field'>
                <h1>Google Weather app</h1>
                <p>Powered by</p>
                <img src="https://th.bing.com/th/id/OIP.yv2pfAU9Ib9-_inrXhtO-QHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="logo"
                />
                <form>
                    <Input 
                    placeholder='Enter the city name' 
                    onChange={handleChange} 
                    value={InputData}
                    />
                    <br />
                    <Button 
                    variant='contained' 
                    color='primary' 
                    type="submit"
                    onClick={handleClick}
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Inputer;