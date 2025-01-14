import React, { useState } from 'react'

function FormHandling() {
    
    const [submittedData,setSubmittedData]=useState(null)
    const [formData,setFormData]=useState({name:'',bio:'',age:""})
    const handleChange = (e) => {
       
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, 
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmittedData(formData); 
        setFormData({ name: '', age: '', bio: '' }); 
    };
    return (
        <div>
        
        
        <form onSubmit={handleSubmit}id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={FormData.value} onChange={handleChange} required/>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" value={FormData.age} onChange={handleChange} required/>

        <label for="bio">Short Bio:</label>
        <textarea id="bio" name="bio" value={FormData.bio} onChange={handleChange} rows="4" required></textarea>

        <button type="submit">Submit</button>
    </form>
    
    
    
    {submittedData && ( <div >
                    
                    <p>
                       Name: {submittedData.name}
                    </p>
                    <p>
                        Age: {submittedData.age}
                    </p>
                    <p>
                        Short Bio:{submittedData.bio}
                    </p>
                </div>
    )}
            
        </div>
    )
}

export default FormHandling;
