type RichTextNodeType =
    | 'document'
    | 'paragraph'
    | 'text'
    | 'unordered-list'
    | 'ordered-list'
    | 'list-item'
    | 'blockquote';

interface RichTextData {}

interface RichTextContent {
    data: RichTextData;
    content?: RichTextContent[];
    marks: {
        type: 'bold' | 'underline' | 'code' | 'italic';
    }[];
    value?: string;
    nodeType: RichTextNodeType;
}

export function convertToHtml(richTextContent: RichTextContent): string {
    switch (richTextContent.nodeType) {
        case 'document':
            return (richTextContent.content?.map(convertToHtml) ?? []).join('');
        case 'paragraph':
            return `<p>${richTextContent.content
                ?.map(convertToHtml)
                .join('')}</p>`;
        case 'text':
            const marks = richTextContent.marks
                .map((mark) => mark.type)
                .join(' ');
            const value = richTextContent.value ?? '';
            return `<span class="${marks}">${value}</span>`;
        case 'unordered-list':
            return `<ul>${richTextContent.content
                ?.map(convertToHtml)
                .join('')}</ul>`;
        case 'ordered-list':
            return `<ol>${richTextContent.content
                ?.map(convertToHtml)
                .join('')}</ol>`;
        case 'list-item':
            return `<li>${richTextContent.content
                ?.map(convertToHtml)
                .join('')}</li>`;
        case 'blockquote':
            return `<blockquote>${richTextContent.content
                ?.map(convertToHtml)
                .join('')}</blockquote>`;
        default:
            return '';
    }
}
