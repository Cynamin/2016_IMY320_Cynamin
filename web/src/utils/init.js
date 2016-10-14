import { fetchEvents } from '../modules/events'
import { fetchNews } from '../modules/news'
import { fetchUsers } from '../modules/users'

export default (store) => {
	store.dispatch(fetchEvents())
	store.dispatch(fetchNews())
	store.dispatch(fetchUsers())
}