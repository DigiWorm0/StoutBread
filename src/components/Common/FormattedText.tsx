import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface FormattedTextProps {
    children: string | null | undefined;
}

export default function FormattedText(props: FormattedTextProps) {
    return (
        <Markdown remarkPlugins={[remarkGfm]}>
            {props.children}
        </Markdown>
    )
}