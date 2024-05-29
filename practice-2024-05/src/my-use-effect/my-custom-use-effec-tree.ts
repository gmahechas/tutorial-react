import { useCallback, useState } from 'react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MyCustomUseEffectTree = (): [Post[], () => void] => {
	const [posts, setPosts] = useState<Post[]>([]);

	const fetchPosts = useCallback(() => {
		const abortController = new AbortController();
		const abortSignal = abortController.signal;

		const fetchPosts = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortSignal });
				const data = await response.json();
				setPosts(data);
			} catch (error: unknown) {
				if (error instanceof Error) {					
					if (error.name === 'AbortError') {
						console.log('Fetch aborted');
					} else {
						console.error('Fetch error:', error);
					}
				}
			}
		}

		fetchPosts();

		return () => {
			abortController.abort();
		};
	}, []);

	return [posts, fetchPosts];
}

export { MyCustomUseEffectTree };