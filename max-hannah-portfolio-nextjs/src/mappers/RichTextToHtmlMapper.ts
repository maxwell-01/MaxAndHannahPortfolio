type RichTextNodeType =
  | 'document'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
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
  let html = '';

  switch (richTextContent.nodeType) {
    case 'document':
      html += richTextContent.content?.map(convertToHtml).join('') ?? '';
      break;
    case 'heading-1':
      html += `<h1>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</h1>`;
      break;
    case 'heading-2':
      html += `<h2>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</h2>`;
      break;
    case 'heading-3':
      html += `<h3>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</h3>`;
      break;
    case 'heading-4':
      html += `<h4>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</h4>`;
      break;
    case 'paragraph':
      html += `<p>${richTextContent.content?.map(convertToHtml).join('')}</p>`;
      break;
    case 'text':
      const marks = richTextContent.marks.map((mark) => mark.type).join(' ');
      const value = richTextContent.value ?? '';
      html += `<span class="${marks}">${value}</span>`;
      break;
    case 'unordered-list':
      html += `<ul class='list-disc'>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</ul>`;
      break;
    case 'ordered-list':
      html += `<ol class='list-decimal'>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</ol>`;
      break;
    case 'list-item':
      html += `<li>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</li>`;
      break;
    case 'blockquote':
      html += `<blockquote>${richTextContent.content
        ?.map(convertToHtml)
        .join('')}</blockquote>`;
      break;
    default:
      break;
  }

  return html;
}
