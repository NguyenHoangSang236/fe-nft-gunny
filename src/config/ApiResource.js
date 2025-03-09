import { PlayerHubService } from "./ServerDomains"

const user = {
    'login': PlayerHubService + '/unauthen/user/login',
    'register': PlayerHubService + '/unauthen/user/register',
}

export default {user}