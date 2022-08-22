import React, {useState, useEffect} from 'react'
import StationItem from './StationItem'
import axios from 'axios'
import Modal from '../dialog/Modal'
import ViewSingleStation from './ViewSingleStation'

/**
 * Stations page to view, filter and search stations.
 * @returns page for /stations
 */
const StationView = () => {

    const [pageNumber, setPageNumber] = useState(0)
    const [stations, setStations] = useState([])
    const [popup, setPopup] = useState(false)
    const [current, setCurrent] = useState()

    const fetchStations = async () => {
        const res = await axios.get(`/api/stations?page=${pageNumber}`)
        setStations(res.data)
    }

    useEffect(() => {
            fetchStations()
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

    const handleSearch = (e) => {
        e.preventDefault()
        fetchSearch(e.target.value)
    }

    const fetchSearch = async (name) => {

        const notAllowed =  /["§%()\[\]{}=\\?´`\\*/\\'#<>|,;.:+_-]+/g
        const cleanName = name.replace(notAllowed, "")

        if (cleanName.trim() === "") {
            fetchStations()
        } else {
            try {
                const res = await axios.get(`/api/stations/search/${cleanName}`)
                setStations(res.data)
            }catch(err) {
                console.error(err)
            } 
        }
    }

    return (
        <div className='stations-container'>
            <h1 className='stations-h1'>Helsinki City Bike Stations</h1>
            <div>
                <h4 className='stations-h4'>Click the station for extra information!</h4>
                <input
                    name="search"
                    className='station-search'
                    type="search"
                    placeholder='Search by a station name'
                    onChange={handleSearch}
                />
                <table className='stations-table'>
                    <tbody>
                        <tr className='tr-stations'>
                            <th className='th-stations'>Name</th>
                            <th className='th-stations'>Address</th>
                            <th className='th-stations'>Operator</th>
                        </tr>
                    {
                        stations.map(station => (
                            <StationItem key={station._id} station={station} setPopup={setPopup} setCurrent={setCurrent}/>
                        ))
                    }
                    </tbody>
                </table>
                <button 
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
                    className='next-btn'
                    onClick={nextPage}
                    ><i className='fas fa-angle-right'></i>	
                </button>
                <Modal
                    trigger={popup}
                    setTrigger={setPopup}
                >
                    <ViewSingleStation
                    trigger={popup}
                    setTrigger={setPopup}
                    station={current}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default StationView