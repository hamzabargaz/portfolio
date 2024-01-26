import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { highlight } from "sugar-high";

type Props = {
  content: any;
};

export default function ContentRender({ content }: Props) {
  return (
    <RichText
      content={content}
      renderers={{
        p: ({ children }) => {
          return <p className='mb-4'>{children}</p>;
        },
        // code: ({ children }: { children: any }) => {
        //   console.log(JSON.stringify(children, null, 2));
        //   let codeHTML = highlight(children);
        //   return <pre dangerouslySetInnerHTML={{ __html: codeHTML }} />;
        // },
        code_block: ({ children }: { children: any }) => {
          const code = children.props.content[0].text;
          let codeHTML = highlight(code);
          return <pre dangerouslySetInnerHTML={{ __html: codeHTML }} />;
        },
      }}
    />
  );
}
