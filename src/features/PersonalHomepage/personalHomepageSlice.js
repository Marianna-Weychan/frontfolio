import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        status: "loading",
        repositories: null,
    },
    reducers: {
        fetchRepositories: (state) => {
            state.status = "loading";
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.status = "success";
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomepageSlice.actions;

export const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;