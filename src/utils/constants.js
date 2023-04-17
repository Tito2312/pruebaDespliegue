const SERVE_IP = "work-services.onrender.com"
// const SERVE_IP = "localhost:3977"

export const ENV = {
    BASE_PATH: `http://${SERVE_IP}`,
    BASE_API: `http://${SERVE_IP}`,
    // BASE_API: `http://${SERVE_IP}/api/V1`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_ACCESS_TOKEN: "auth/refreshAccessToken",
        USER_ME: "user/me",
        USER: "user",
        USERS: "users",
        WORK: "work",
        WORKS: "works",
        POSTULATE: "postulate",
        POSTULATES: "postulates",
        POSTULATES_ME: "postulates/me",
        CHAT: "chat",
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
    }
}