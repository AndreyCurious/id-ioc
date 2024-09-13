import {ApiUsersService, ApiPostsService} from '../application/ports'

export function useUsers(): ApiUsersService {
	return {
		async getUsersAsync(url) {
			try {
				const res = await fetch(url);
				const users = await res.json();
				return users;
			} catch (e) {
				console.log(e)
			}
		}
	}
}

export function usePosts(): ApiPostsService {
	return {
		async getPostsAsync(url) {
			try {
				const res = await fetch(url);
				const posts = await res.json();
				return posts;
			} catch (e) {
				console.log(e)
			}
		}
	}
}