import { createSlice } from "@reduxjs/toolkit";

const fetchRepositoriesAPISlice = createSlice({
    name: "myRepositories",
    initialState: {
        status: "initial",
        repositories: [],
        error: null,
    },
    reducers: {
        fetchRepositoriesStart(state) {
            state.status = "loading";
            state.repositories = [];
            state.error = null;
        },
        fetchRepositoriesSuccess(state, action) {
            state.status = "success";
            state.repositories = action.payload;
            state.error = null;
        },
        fetchRepositoriesFailure(state, action) {
            state.status = "error";
            state.repositories = [];
            state.error = action.payload;
        },
    },
});

export const {
    fetchRepositoriesStart,
    fetchRepositoriesSuccess,
    fetchRepositoriesFailure,
} = fetchRepositoriesAPISlice.actions;

export const selectRepositories = (state) => state.myRepositories.repositories;
export const selectStatus = (state) => state.myRepositories.status;
export const selectError = (state) => state.myRepositories.error;

export default fetchRepositoriesAPISlice.reducer;