import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "./Helper"
import axios from "axios"


const initialState = {
    photoData: [],
    photoDet: [],
    galleryData: [],
    collectData: [],

    searchResult: [],
    c: []
}
export const photos = createAsyncThunk(
    "photos",
    async ({page,perPage}) => {
        let res = await axiosInstance.get(`/photos`, {
            headers: {
                Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
            },
            params: {
                page: page,
                per_page:perPage,
                order_by: 'latest'
            }
        })
        return res.data
    }
)

export const photos_id = createAsyncThunk(
    "photos_det",
    async (id) => {
        let res = await axiosInstance.get(`/photos/${id}`, {
            headers: {
                Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
            },

        })
        return res.data
    }
)

export const gallery = createAsyncThunk(
    "gallery",
    async ({ page, perPage }) => {
        let res = await axiosInstance.get(`/photos`, {
            headers: {
                Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
            },
            params: {
                page: page,
                per_page: perPage,
                order_by: 'popular'
            }
        })
        return res.data
    }
)

export const search = createAsyncThunk(
    "search",
    async ({ name, page, perPage }) => {
        try {
            const response = await axiosInstance.get(`/search/photos?page=1&query=${name}`, {
                headers: {
                    Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
                },
                params: {
                    page: page,
                    per_page: perPage,

                }
            });
            return response.data;
        } catch (error) {

            throw Error("Failed to fetch categories");
        }
    }
);

export const collections = createAsyncThunk(
    "collections",
    async ({ page, perPage }) => {
        let res = await axiosInstance.get(`/collections`, {
            headers: {
                Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
            },
            params: {
                page: page,
                per_page: perPage,

            }
        })
        return res.data
    }
)

export const collect_photos = createAsyncThunk(
    "collect_id",
    async ({ id, page, perPage }) => {
        const res = await axios.get(`https://api.unsplash.com/collections/${id}/photos`, {
            headers: {
                Authorization: `Client-ID 98Gna5rSeb7pQWtm6bsZu0HPNthpt9jXjis5aYW5Jn4`
            },
            params: {
                page: page,
                per_page: perPage
            }
        });
        return res.data;
    }
);




export const Slice = createSlice({
    name: "photos",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(photos.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(photos.fulfilled, (state, { payload }) => {
                state.status = "idle"
                state.photoData = payload
            })
            .addCase(photos.rejected, (state, action) => {
                state.status = "idle"
            })

            .addCase(photos_id.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(photos_id.fulfilled, (state, { payload }) => {
                state.status = "idle"
                state.photoDet = payload
            })
            .addCase(photos_id.rejected, (state, action) => {
                state.status = "idle"
            })
            .addCase(gallery.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(gallery.fulfilled, (state, { payload }) => {
                state.status = "idle"
                state.galleryData = payload
            })
            .addCase(gallery.rejected, (state, action) => {
                state.status = "idle"
            })
            .addCase(collections.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(collections.fulfilled, (state, { payload }) => {
                state.status = "idle"
                state.collectData = payload
            })
            .addCase(collections.rejected, (state, action) => {
                state.status = "idle"

            })

            .addCase(collect_photos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(collect_photos.fulfilled, (state, action) => {
                state.status = 'idle';
                state.c = action.payload;
            })
            .addCase(collect_photos.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            .addCase(search.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(search.fulfilled, (state, { payload }) => {
                state.status = "idle"
                state.searchResult = payload
            })
            .addCase(search.rejected, (state, action) => {
                state.status = "idle"
            })
           


    }
})