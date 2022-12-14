import React, {useEffect, useState} from 'react'
import JourneyItem from './JourneyItem'
import axios from "axios"

/**
 * Page to view and search journeys
 * @returns /journeys page
 */
const JourneyView = () => {

    const [journeys, setJourneys] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [search, setSearch] = useState("")


    useEffect(() => {
            fetchJourneys(search)
    }, [pageNumber, search])
   
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

    /**
     * Handle searching for journeys
     */
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    /**
     * Handle fetching journeys by given search condition.
     * Empty search = fetch all
     * @param {String} name station name
     */
    const fetchJourneys = async (name) => {

        const notAllowed =  /["§%()\[\]{}=\\?´`\\*/\\'#<>|,;.:+_-]+/g

        const cleanName = name.replace(notAllowed, "")

        if (cleanName.trim() === "") {
            try {
                const res = await axios.get(`/api/journeys?page=${pageNumber}`)
                setJourneys(res.data)
            }catch(err) {
                console.error(err)
            }
        } else {
            try {
                console.log(cleanName)
                const res = await axios.get(`/api/journeys/search/${cleanName}?page=${pageNumber}`)
                setJourneys(res.data)
            }catch(err) {
                console.error(err)
            } 
        }
    }
 
    return (
        <div className='journeys-container'>
            <h1 className='journeys-h1'>Helsinki City Bike Journeys</h1>
            <div className='journeys-inner'>
                <input
                    name="search"
                    className='journey-search'
                    placeholder='Search by a return or departure station'
                    type="text"
                    onChange={handleSearch}
                />      
                <table className='journeys-table'>
                    <tbody>
                        <tr className='tr-journeys'>
                            <th className='th-journeys'>Departure Station</th>
                            <th className='th-journeys'>Departure Time</th>
                            <th className='th-journeys'>Return Station</th>
                            <th className='th-journeys'>Return Time</th>
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
                    id='previous-btn' 
                    className='previous-btn'
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
                    id='next-btn'
                    className='next-btn'
                    onClick={nextPage}
                    ><i className='fas fa-angle-right'></i>	
                </button>
                </div>
        </div>
    )
}

export default JourneyView
