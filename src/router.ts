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
import {AuthorPage} from "./pages/AuthorPage.tsx";
import {AllAuthors} from "./pages/AllAuthors.tsx";
import {ResetPage} from "./Autheticate/ResetPage.tsx";
import {SearchPage} from "./pages/SearchPage.tsx";
import {Categories} from "./pages/Categories.tsx";
import {SettingsPage} from "./pages/SettingsPage.tsx";
import {MessagesPage} from "./pages/MessagesPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/auth",
        Component: Login
    },

    {
        path: "/auth/reset",
        Component: ResetPage
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
                path: "history",
                Component: ReadHistory,

            },
            {
                path: "saved",
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
            },
            {
                path:"author",
                Component:AuthorPage,
            },
            {
                path:":anyPath/author",
                Component:AuthorPage,
            },
            {
              path:"authors",
              Component:AllAuthors,
            },
            {
                path:":anyPath/authors",
                Component:AllAuthors,
            },
            {
                path:"search",
                Component:SearchPage
            },
            {
                path:":any/search",
                Component:SearchPage
            },
            {
                path:"categories",
                Component:Categories
            },
            {
                path:":any/categories",
                Component: Categories
            },
            {
                path:"settings",
                Component:SettingsPage
            },
            {
                path:":any/settings",
                Component:SettingsPage
            },
            {
                path:"messages",
                Component:MessagesPage
            }

        ]
    },


])