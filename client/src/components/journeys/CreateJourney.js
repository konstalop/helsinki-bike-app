import React, {useState} from 'react'

/**
 * form to create a new journey
 * @param {*} props 
 * @returns create journey form
 */
const CreateJourney = (props) => {

    const [journey, setJourney] = useState({
        departureTime: "",
        departureStation: "",
        returnTime: "",
        returnStation: "",
        distance: "",
        duration: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setTrigger(false)
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
                    name="departureTime"
                    type="text" 
                    className='input-journey'
                    placeholder='12:00'
                ></input>
            </label>
            <label className='journey-label'>Departure Station
                <input 
                    name="departureStation"
                    type="text" 
                    className='input-journey'
                    placeholder='Name of the station'
                ></input>
            </label>
            <label className='journey-label'>Return Time
                <input 
                    name="returnTime"
                    type="text" 
                    className='input-journey'
                    placeholder='12:15'
                ></input>
            </label>
            <label className='journey-label'>Return Station
                <input 
                    name="returnStation"
                    type="text" 
                    className='input-journey'
                    placeholder='Name of the station'
                ></input>
            </label>
            <label className='journey-label'>Distance (meters)
                <input 
                    name="distance"
                    type="text" 
                    className='input-journey'
                    placeholder='Distance in meters'
                ></input>
            </label>
            <label className='journey-label'>Duration (minutes)
                <input 
                    name="duration"
                    type="text" 
                    className='input-journey'
                    placeholder='Duration of journey in minutes'
                    >
                </input>
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