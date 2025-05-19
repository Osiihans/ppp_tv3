import {createBrowserRouter} from "react-router";
import {Login} from "./Autheticate/Login.tsx";
import App from "./App.tsx";
import {Trending} from "./pages/Trending.tsx";
import {ForYou} from "./pages/ForYou.tsx";
import {Communities} from "./pages/Communities.tsx";
import {Advertisement} from "./pages/Advertisement.tsx";
import {Following} from "./pages/Following.tsx";
import {ReadHistory} from "./pages/ReadHistory.tsx";
import {SavedReads} from "./pages/SavedReads.tsx";
import {Shops} from "./pages/shop/Shops.tsx";
import {SinglePost} from "./pages/SinglePost.tsx";

export const router = createBrowserRouter([
    {
        path: "/auth",
        Component: Login
    },
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: ForYou,

            },
            {
                path: "trending",
                Component: Trending,
            },
            {
                path: "following",
                Component: Following,
            },
            {
                path: "community",
                Component: Communities
            },
            {
                path: "advertisement",
                Component: Advertisement
            },
            {
                path: "history/",
                Component: ReadHistory,

            },
            {
                path: "saved/",
                Component: SavedReads,
            },
            {
                path:"shop",
                Component:Shops
            },
            {
                path:":anyPath/single",
                Component:SinglePost,
            },
            {
                path:"single",
                Component:SinglePost,
            }
        ]
    },


])