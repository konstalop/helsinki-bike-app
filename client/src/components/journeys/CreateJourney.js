import React from 'react'

const CreateJourney = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCancel = (e) => {
        e.preventDefault()
        props.setTrigger(false)
    }


    return (
    <div className='create-journey' onSubmit={handleSubmit}>
        <div className='create-journey-inner'>
        <h2 className='create-journey-h2'>Add a new journey</h2>
        <form className='journey-form'>
            <label className='journey-label'>Departure Time
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='12:00'
                ></input>
            </label>
            <label className='journey-label'>Departure Station
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='Name of the station'
                ></input>
            </label>
            <label className='journey-label'>Return Time
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='12:15'
                ></input>
            </label>
            <label className='journey-label'>Return Station
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='Name of the station'
                ></input>
            </label>
            <label className='journey-label'>Distance (meters)
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='Distance in meters'
                ></input>
            </label>
            <label className='journey-label'>Duration (minutes)
                <input 
                    type="text" 
                    className='input-journey'
                    placeholder='Duration of journey in minutes'
                    ></input>
            </label>
            <button
                className='cancel-btn'
                onClick={handleCancel}
            >
                Cancel
            </button>
            <input
                className='confirm-btn'
                type="submit"
            />
        </form>
        </div>
    </div>
    )
}

export default CreateJourney