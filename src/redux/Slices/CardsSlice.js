import { createSlice } from '@reduxjs/toolkit';

const initialCardsState = Array(16).fill(0);

export const fetchSavedState = () => {
    try {
        const storedState = localStorage.getItem('cards');
        return storedState ? JSON.parse(storedState) : undefined;
    } catch (error) {
        console.error('Failed to load state', error);
        return undefined;
    }
};

export const persistState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cards', serializedState);
    } catch (error) {
        console.error('Failed to save state', error);
    }
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialCardsState,
    reducers: {
        increaseCardCount: (state, action) => {
            const cardIndex = action.payload;
            if (cardIndex >= 0 && cardIndex < state.length) {
                state[cardIndex] += 1;
            }
        },
        decreaseCardCount: (state, action) => {
            const cardIndex = action.payload;
            if (cardIndex >= 0 && cardIndex < state.length && state[cardIndex] > 0) {
                state[cardIndex] -= 1;
            }
        }
    }
});

export const { increaseCardCount, decreaseCardCount } = cardsSlice.actions;
export default cardsSlice.reducer;