export enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

export const environment = {
    api: {
        login: '/api/auth/login',
        kartoffel: '/kartoffel',
        bases: '/bases',
        areas: '/areas',
        buildings: '/buildings',
        floors: '/floors',
        rooms: '/rooms',
        courseTemplates: '/course-templates',
        courses: '/courses',
        users: '/users',
        soldiers: '/soldiers',
        soldierInRoomInCourses: '/soldier-in-room-in-courses',
        roomInCourse: '/room-in-course',
        roomInEvent: '/room-in-event',
        requests: '/requests',
        feedbacks: '/feedbacks',
        events: '/events',
        feedbacksArchive: '/feedbacks-archive',
        networks: '/networks',
        branches: '/branches',
        activityLogs: '/logs',
    },

    concurrency: 10,

    pagination: {
        limit: 20,
    },
    accessTokenName: 'vision-access-token',

    magicWidth: '39.4%',
    limitForEventsInMainPage: 4,

    datesForEventsAdjoinedToCourseByDefault: {
        beforeDate: 14,
        afterDate: 7,
    },

    aggrid: {
        rowHeight: 50,
        paginationPageSize: 10,
        maxBlocksInCache: 1000,

        cellPadding: 46,
        iconButtonWidth: 46,
        headerNameWidth: 100,
    },

    sidebar: {
        drawerWidth: 300,
        closedDrawerWidth: 60,
        closedSidebarWidth: 2.5,
        openSidebarWidth: 3.5,
    },
};
