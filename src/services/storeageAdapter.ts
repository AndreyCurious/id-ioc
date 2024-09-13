import {
	PostsStorageService,
	UsersStorageService,
	CurrentUserIdStorageService
} from '../application/ports';
import { useStore } from './store';

export function useUsersStorage(): UsersStorageService {
	return useStore();
}

export function usePostsStorage(): PostsStorageService {
	return useStore();
}
export function useCurrentUserIdStorage(): CurrentUserIdStorageService {
	return useStore();
}