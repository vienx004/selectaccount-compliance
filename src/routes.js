import CreateComponent from './components/create.vue'
import TrackComponent from './components/track.vue'
import HomeComponent from './components/home.vue'

//hold routes
export const routes = [
    //{path: '/user', component: } example.com/user
    { path: '/create/', component: CreateComponent},
    { path: '/track', component: TrackComponent},
    { path: '/', component: HomeComponent},
];