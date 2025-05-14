import {create} from 'zustand';
import {persist} from "zustand/middleware/persist";
import {NavigationState} from "./Types.ts";

const useNavigationStore = create<NavigationState>()(

    persist((set) => ({
            currentPage: 'home',
            history: ['home'],
            postViews: {},
            sessionStart: new Date(),
            navigationEvents: [],
            lastPostViews: {},

            navigateTo: (page, postId) => {
                const timeStamp = new Date();
                set((state) => ({
                    currentPage: page,
                    history: [...state.history, page],
                    navigationEvents: [
                        ...state.navigationEvents, {
                            type: 'NAVIGATION',
                            page,
                            postId,
                            timeStamp,
                            metadata: {
                                path: window.location.pathname,
                                previousPage: state.currentPage,
                            }
                        }
                    ]
                }));
                if (postId) {
                    get().recordPostView(postId, timeStamp);
                }
            },

            goBack: () => set((state) => {
                if (state.history.length > 1) {
                    const newHistory = [...state.history];
                    newHistory.pop();
                    const previousPage = newHistory[newHistory.length - 1];

                    return {
                        currentPage: previousPage,
                        history: newHistory,
                        navigationEvents: [
                            ...state.navigationEvents,
                            {
                                type: 'GO_BACK',
                                from: state.currentPage,
                                to: previousPage,
                                timestamp: new Date(),
                                metadata: {
                                    path: window.location.pathname
                                }
                            }
                        ],
                    };
                }
                return state;
            }),

            recordPostView: (postId) => {
                const lastView = get().lastPostViews[postId];
                if (lastView && Date.now() - lastView < 30000) return;

                set((state) => ({
                    postViews: {
                        ...state.postViews,
                        [postId]: (state.postViews[postId] || 0) + 1
                    },
                    lastPostViews: {
                        ...state.lastPostViews,
                        [postId]: Date.now()
                    },
                    navigationEvents: [
                        ...state.navigationEvents,
                        {
                            type: 'POST_VIEW',
                            postId,
                            timestamp: new Date(),
                            metadata: {
                                path: window.location.pathname,
                                previousPage: state.history[state.history.length - 2] || 'direct'
                            }
                        }
                    ]
                }))

                // Send to analytics service
                // recordPostViewToDB(postId);
            },

            getPostViews: (postId) => get().postViews[postId] || 0,
            getAllPostViews: () => get().postViews,
            getNavigationHistory: () => get().navigationEvents,
            getSessionDuration: () => new Date().getTime() - get().sessionStart.getTime(),
        }),
        {
            name: 'ppp_tv_navigation_store',
            partialize: (state) => ({
                postViews: state.postViews,
                lastPostViews: state.lastPostViews
            })
        }
    )
)

export default useNavigationStore;