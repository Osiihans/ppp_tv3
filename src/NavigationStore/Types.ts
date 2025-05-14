export type AnalyticsEvent = {
    type: 'POST_VIEW' | 'NAVIGATION' | 'GO_BACK';
    postId?: string;
    userId?: string;
    timestamp: Date;
    metadata?: {
        referrer?: string;
        userAgent?: string;
        screenResolution?: string;
        path?: string;
        previousPage?: string;
        [key: string]: string;
    };
};

export type PostViews = Record<string, number>;

export type NavigationState = {
    currentPage: string;
    history: string[];
    postViews: PostViews;
    sessionStart: Date;
    navigationEvents: AnalyticsEvent[];
    lastPostViews: Record<string, number>
    navigateTo:(page: string, postId?:string) => void;
    goBack: () => void;
    recordPostView:(postId: string) => void;
    getPostViews: (postId?:string) => number;
    getAllPostViews: () => PostViews;
    getNavigationHistory: () => AnalyticsEvent[];
    getSessionDuration:() => number;
};