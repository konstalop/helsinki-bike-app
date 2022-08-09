import React, {useEffect, useState} from 'react'
import JourneyItem from './JourneyItem'
import Modal from '../dialog/Modal'
import CreateJourney from './CreateJourney'
import axios from "axios"

/**
 * Page to view, filter, search, add journeys
 * @returns /journeys page
 */
const JourneyView = () => {

    const [journeys, setJourneys] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [popup, setPopup] = useState(false)


    useEffect(() => {
        const fetchJourneys = async () => {
            const res = await axios.get(`/api/journeys?page=${pageNumber}`)
            setJourneys(res.data)
        }
            fetchJourneys()
    }, [pageNumber])
   
    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const previousPage = () => {
        setPageNumber(Math.max(0, pageNumber - 1))
    }

    /**
     * Get page with given number
     */
    const wantedPage = (e) => {
        setPageNumber(Math.max(0, e.target.value))
    }

    return (
        <div className='journeys-container'>
            <h1 className='journeys-h1'>Helsinki City Bike Journeys</h1>
            <div className='journeys-inner'>
                <h4 className='stations-h4'>Click the journey for extra information!</h4>
                <button 
                    className='new-item-btn'
                    onClick={() => setPopup(true)} 
                >
                    New Journey
                </button>       
                <table className='journeys-table'>
                    <tbody>
                        <tr className='tr-journeys'>
                            <th className='th-journeys'>Departure Station</th>
                            <th className='th-journeys'>Return Station</th>
                            <th className='th-journeys'>Distance</th>
                            <th className='th-journeys'>Duration</th>
                        </tr>
                    {
                        journeys.map(journey => (
                            <JourneyItem key={journey._id} journey={journey}/>
                        ))
                    }
                    </tbody>
                </table>
                <button 
                    className='next-btn'
                    onClick={previousPage}>
                        <i className='fas fa-angle-left'></i>	
                </button>
                <input 
                    className='pg-input'
                    type='number'
                    value={pageNumber || ""}
                    onChange={wantedPage}
                ></input>
                <button 
                    className='next-btn'
                    onClick={nextPage}
                    ><i className='fas fa-angle-right'></i>	
                </button>
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
