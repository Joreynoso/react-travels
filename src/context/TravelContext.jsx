// --> imports
import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'

// --> import axios
import axios from 'axios'

// --> create context
export const TravelContext = createContext(null)

export const TravelProvider = ({ children }) => {

    // --> setting states
    const [travels, setTravels] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> get all destinations
    const fetchAllDestinations = async () => {
        setError(null)
        setLoading(true)

        try {
            const response = await axios.get('/api/destinations')
            const data = response.data.destinations
            setTravels(data)
        } catch (error) {
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // --> get destination by id
    const getDestinationById = async (id) => {
        setError(null)
        setLoading(true)

        try {
            const response = await axios.get(`/api/destinations/${id}`)
            const data = response.data.destinations
            return data
        } catch (error) {
            console.log('--> [CONTEXT ERROR] failed to get response', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // --> post create a new destination
    const createDestination = async (newDestination) => {
        setError(null)
        setLoading(true)

        try {
            const response = await axios.post("/api/destinations", newDestination)
            const data = response.data.destinations

            // udpate the state, desctructuring current array and add the new element
            setTravels(prev => [...prev, data])
        } catch (error) {
            console.log('--> [CONTEXT ERROR] failed to create destination', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // --> put update a destination
    const updateDestination = async (id, updateDestination) => {
        setError(null)
        setLoading(true)

        try {
            const response = await axios.put(`/api/destinations/${id}`, updateDestination)
            const data = response.data.destinations

            // keep de state update, if nothing changes return the same destination
            setTravels(prev =>
                prev.map(dest =>
                    dest.id === id ? updateDestination : dest
                )
            )

        } catch (error) {
            console.log('--> [CONTEXT ERROR] failed to update destination', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // --> delete a destination
    const deleteDestination = async (id) => {
        setLoading(true)
        setError(null)

        try {
            await axios.delete(`/api/destinations/${id}`)

            // udpate state after delete
            setTravels(prev => prev.filter(travel => travel.id !== id))

        } catch (error) {
            console.log('--> [CONTEXT ERROR] failed to delete destination', error)
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // --> useEffect to load all destinations
    useEffect(() => {
        fetchAllDestinations()
    }, [])

    return (
        <TravelContext.Provider value={{
            error,
            setError,
            loading,
            setLoading,
            travels,

            fetchAllDestinations,
            getDestinationById,
            updateDestination,
            deleteDestination,
            createDestination
        }}>
            {children}
        </TravelContext.Provider>
    )
}

// --> create custom hook
export const useTravel = () => useContext(TravelContext)