import { DocumentType, Authors } from '@/types/constants'

export interface TMessage {
    id?: number;
    text: string;
    author: Authors;
    timestamp?: string;
    documents?: Document[];
}

export interface Document {
    id: number;
    title: string;
    url: string;
    type: DocumentType;
}

export interface MessageListProps {
    messages: TMessage[];
}


