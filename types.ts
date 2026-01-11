
export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  category: '基础' | '人体' | '款式' | '表现' | '综合';
  content: string;
  keyPoints: string[];
  homework: string;
  materials: string[];
  imageUrl: string;
  gallery: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
