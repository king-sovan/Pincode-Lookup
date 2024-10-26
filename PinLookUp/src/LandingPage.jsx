import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const [pincode, setPincode] = useState('')
    const navigate = useNavigate();

    const handleSearch = () => {
        if (pincode.length !== 6) {
            alert('Please enter a valid 6-digit pincode')
            return;
        }

        navigate(`/results/${pincode}`);
    }

  return (
    <div className='landing-page'>
        <h1>Enter Pincode</h1>
        <input 
            type='text'
            placeholder='Pincode'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
        />
        <button onClick={handleSearch}>Lookup</button>
    </div>
  )
}

export default LandingPage