import { createSlice } from "@reduxjs/toolkit";

const getLikedAttractions = () => {
    const likedAttractions = localStorage.getItem('likedAttractions');
    return likedAttractions ? JSON.parse(likedAttractions) : [] 
}

const setLikedAttractions = (newLikedAttractions) => {
    localStorage.setItem('likedAttractions', JSON.stringify(newLikedAttractions));
}

const LikedAttractionsSlice = createSlice({
    name: 'likedAttractions',
    initialState: {
        likedAttractions: getLikedAttractions()
    },
    reducers: {
        addLike: (state, action) => {
            const newLikedAttraction = action.payload;
            state.likedAttractions.push(newLikedAttraction);
            setLikedAttractions(state.likedAttractions);
        },
        removeLike: (state, action) => {
            const attractionId = action.payload; // Получаем _id элемента для удалени

            state.likedAttractions = state.likedAttractions.filter(
                (item) => item._id !== attractionId
            );
            
            setLikedAttractions(state.likedAttractions); 
        },
    }
});

export const {addLike, removeLike} = LikedAttractionsSlice.actions;
export default LikedAttractionsSlice.reducer;

