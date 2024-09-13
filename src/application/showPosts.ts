import { Post } from "../domain/Post";
import { usePostsStorage} from "../services/storeageAdapter";

export function useShowPosts() {
	const storage = usePostsStorage();	

	function showPosts(posts: Post[]) {
		const { updatePosts } = storage; 
		updatePosts(posts);
	}

	return {showPosts};
}