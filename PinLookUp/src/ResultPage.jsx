import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Rings } from 'react-loader-spinner'

const ResultPage = () => {
    const { pincode } = useParams();
    const [postOffice, setPostOffice] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://api.postalpincode.in/pincode/${pincode}`)
            .then((response) => {
                if (response.data[0].Status === 'Success') {
                    setPostOffice(response.data[0].PostOffice);
                } else {
                    setError('No data found for this pincode')
                }
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            });
    }, [pincode]);

    const filteredPostOffices = postOffice.filter((office) => 
        office.Name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <div className='results-page'>
        <h2>Pincode: {pincode}</h2>
        {loading ? (
            <div className="loader-container">
                <Rings color="#000" height={100} width={100} />
            </div>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <>
                <h2>Message: {filteredPostOffices.length} pincode(s) found:</h2>
                <input 
                    type='text'
                    placeholder='Filter'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <div className="post-offices-container">
                    {filteredPostOffices.length > 0 ? (
                        filteredPostOffices.map((office, index) => (
                            <div key={index} className="post-office-card">
                                <p><strong>Name:</strong> {office.Name}</p>
                                <p><strong>Branch Type:</strong> {office.BranchType}</p>
                                <p><strong>Delivery Status:</strong> {office.DeliveryStatus}</p>
                                <p><strong>District:</strong> {office.District}</p>
                                <p><strong>Division:</strong> {office.Division}</p>
                            </div>
                        ))
                    ) : (
                        <p>Couldn't find the postal data you're looking for...</p>
                    )}
                </div>
            </>
        )}
    </div>
  )
}

export default ResultPage