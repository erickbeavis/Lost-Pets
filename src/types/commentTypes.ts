export interface CommentsType {
  id: string;
  userId: string;
  createdAt: string;
  awnsersTo: string;
  answers: null | CommentsType;
  content: string;
}
