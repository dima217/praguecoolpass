// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const getLikedAttractions = () => {
  const likedAttractions = localStorage.getItem('likedAttractions');
  return likedAttractions ? JSON.parse(likedAttractions) : [];
};

const setLikedAttractions = (newLikedAttractions) => {
  localStorage.setItem('likedAttractions', JSON.stringify(newLikedAttractions));
};

const likedAttractionsSlice = createSlice({
  name: 'likedAttractions',
  initialState: { likedAttractions: getLikedAttractions() },
  reducers: {
    addLike: (state, action) => {
      const existing = state.likedAttractions.find(item => item.id === action.payload.id);
      if (!existing) {
        state.likedAttractions.push(action.payload);
        setLikedAttractions(state.likedAttractions);
      }
    },
    removeLike: (state, action) => {
      state.likedAttractions = state.likedAttractions.filter(
        item => item.id !== action.payload
      );
      setLikedAttractions(state.likedAttractions);
    },
  }
});

export const { addLike, removeLike } = likedAttractionsSlice.actions;
export default likedAttractionsSlice.reducer;