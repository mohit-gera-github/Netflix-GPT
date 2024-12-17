
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { API_OPTIONS } from '../components/constant';
import {  addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topratedMovies = useSelector(store=> store.movies.topratedMovies);
    const getTopRatedMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
       !topratedMovies &&  getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;