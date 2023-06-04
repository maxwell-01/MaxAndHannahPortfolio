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
  const nodeTypeMapping: Record<RichTextNodeType, string> = {
    document: richTextContent.content?.map(convertToHtml).join('') ?? '',
    'heading-1': `<h1 class="text-2xl font-bold">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</h1>`,
    'heading-2': `<h2 class="text-xl font-bold">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</h2>`,
    'heading-3': `<h3 class="text-lg font-bold">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</h3>`,
    'heading-4': `<h4 class="text-base font-bold">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</h4>`,
    paragraph: `<p class="text-base">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</p>`,
    text: `<span class="${richTextContent.marks
      ?.map((mark) => mark.type)
      .join(' ')}">${richTextContent.value ?? ''}</span>`,
    'unordered-list': `<ul class="list-disc">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</ul>`,
    'ordered-list': `<ol class="list-decimal">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</ol>`,
    'list-item': `<li>${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</li>`,
    blockquote: `<blockquote class="border-l-4 pl-4">${richTextContent.content
      ?.map(convertToHtml)
      .join('')}</blockquote>`,
  };

  return nodeTypeMapping[richTextContent.nodeType] ?? '';
}
