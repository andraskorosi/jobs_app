import { useState, useEffect } from 'react';
import axios from 'axios';
// TODO: remove hardcoded JOBS and uncomment api request for prod
import JOBS from '../constants/jobs.json'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  // TODO: import api key from env
  
  // const options = {
  //   method: 'GET',
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     'X-RapidAPI-Key': '6b6130e59bmsh6f16375851218dcp1f9b8cjsn0417f8ceec64',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   },
  //   params: { ...query }
  // };
  
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.request(options)
  //     setData(response.data.data)
  //     setIsLoading(false)
      
  //   } catch (error) {
  //     setError(error)
  //     alert("There is an error")
  
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const fetchData = () => {
    setData(JOBS)
    setIsLoading(false)
  }
  
  // useEffect keeps the component syncronized with an external source
  useEffect(() => {
    fetchData()
  }, [])
  
  const refetch = () => {
    setIsLoading(true);
    fetchData()
  }
  
  // return { data, isLoading, error, refetch }
  return { data, isLoading, refetch }
}

export default useFetch