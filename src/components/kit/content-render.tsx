import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { highlight } from "sugar-high";
import Image from "next/image";

type Props = {
  content: any;
};

export default function ContentRender({ content }: Props) {
  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }: any) => {
          return <h1 className='text-4xl font-bold mt-6 mb-4'>{children}</h1>;
        },
        h2: ({ children }: any) => {
          return <h2 className='text-3xl font-bold mt-6 mb-4'>{children}</h2>;
        },
        h3: ({ children }: any) => {
          return <h3 className='text-2xl font-bold mt-6 mb-4'>{children}</h3>;
        },
        img: ({ props }: any) => {
          return (
            <div className='flex justify-center'>
              <Image alt={props.altText} className='rounded-lg' {...props} />;
            </div>
          );
        },
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
