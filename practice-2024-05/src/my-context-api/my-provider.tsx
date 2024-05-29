import { FC, createContext, ReactNode } from 'react';
import { MyCustomUseEffectTree, Post } from '../my-use-effect/my-custom-use-effec-tree';

const MyContext = createContext({ posts: [] as Post[], fetchPosts: () => {} });

interface Props {
	children: ReactNode;
}

const MyProvider: FC<Props> = ({ children }) => {
  const [posts, fetchPosts] = MyCustomUseEffectTree();
  return (
    <MyContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
