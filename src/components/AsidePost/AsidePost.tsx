import { PostDate } from '@components/PostDate';
import { PostDescription } from '@components/PostDescription';
import { PostTitle } from '@components/PostTitle';

type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imageUrl?: string;
};

type AsidePostProps = {
  post: Post;
};

export function AsidePost({ post }: AsidePostProps) {
  return (
    <>
      <PostDate>{post.createdAt}</PostDate>
      <PostTitle url="/">{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
    </>
  );
}
