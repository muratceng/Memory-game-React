import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        score: 0,
        cards: [],
    },
    reducers: {
        initialcards: (state) => {
            state.cards=[];
            for (let i = 1; i < 16; i++) {
                let card = {
                    id: i,
                    src: '../../images/' + i + '.png',
                    matched: false,
                }
                state.cards = [...state.cards, card];
            }
        },
        
    },

})

export const { initialcards } = gameSlice.actions;
export default gameSlice.reducer;