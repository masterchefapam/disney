import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../components/features/movie/movieSlice';
import userReducer from '../components/features/user/userSlice';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userReducer
    },
})