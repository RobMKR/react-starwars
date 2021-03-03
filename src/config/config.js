export default {
    apiUrl: 'https://swapi.dev/api/',
    rateLimitKey: 'user_request_count',
    rateLimitCount: 15, // Max requests in limited time
    rateLimitDelay: 25, // In seconds
    userKey: 'user',
    allowedUsers: [
        // 'Luke Skywalker'
    ]
}