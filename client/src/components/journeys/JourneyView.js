import React, {useState} from 'react'
import JourneyItem from './JourneyItem'
import Modal from '../dialog/Modal'
import CreateJourney from './CreateJourney'
const JourneyView = () => {

    const [popup, setPopup] = useState(false)


    return (
        <div className='journeys-container'>
            <h1 className='journeys-h1'>Helsinki City Bikes Journeys</h1>
            <div className='journeys-inner'>
                <button 
                    className='new-item-btn'
                    onClick={() => setPopup(true)} 
                >
                    New Journey
                </button>
                <table className='journeys-table'>
                    <tbody>
                        <tr className='tr-journeys'>
                            <th className='th-journeys'>Departure Time</th>
                            <th className='th-journeys'>Departure Station</th>
                            <th className='th-journeys'>Return Time</th>
                            <th className='th-journeys'>Return Station</th>
                            <th className='th-journeys'>Distance</th>
                            <th className='th-journeys'>Duration</th>
                        </tr>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
                        <JourneyItem></JourneyItem>
        
                    </tbody>
                </table>
                <Modal
                    trigger={popup}
                    setTrigger={setPopup}
                >
                    <CreateJourney
                    trigger={popup}
                    setTrigger={setPopup}/>
                </Modal>
                </div>
        </div>
    )
}

export default JourneyView
