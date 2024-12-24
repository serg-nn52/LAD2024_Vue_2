import type { IPost } from '@/data/posts';

export interface IChildComponentProps {
  title?: string;
  year: number;
  posts: IPost[];
}

export interface IChildComponentEmits {
  (e: 'increment-parent-counter'): void;
  (e: 'double', value: number): void;
}
