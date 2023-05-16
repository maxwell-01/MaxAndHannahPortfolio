import { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    Block,
    BLOCKS,
    Document,
    Inline,
    MARKS,
} from '@contentful/rich-text-types';
import { OneColumnText } from '@/src/types/ContentfulTypes';
import { ReactNode } from 'react';
import 'app/globals.scss';

type Props = {
    entry: Entry<OneColumnText>;
};

const OneColumnTextComponent = ({ entry }: Props) => {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
                <div>{children}</div>
            ),
        },
        renderMark: {
            [MARKS.BOLD]: (text: ReactNode) => (
                <p className={'font-bold'}>{text}</p>
            ),
        },
        // renderText: (text: ReactNode) => <p className={'prose'}>{text}</p>,
    };

    return (
        <>
            <div>One column text component</div>
            <h2>{entry.fields.title}</h2>
            <div>
                {documentToReactComponents(
                    entry.fields.text as Document,
                    options
                )}
            </div>
        </>
    );
};

export default OneColumnTextComponent;
