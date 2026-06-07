import { PostSkeleton } from "@/components/kit/loaders";

// Streamed instantly via Suspense while the server renders the MDX article.
// Mirrors the layout of posts/[slug]/page.tsx so the real content swaps in
// without a jump: title block, hero image, then body lines.
export default function Loading() {
  return (
    <div className='mt-20 h-full'>
      <article className='px-5 mx-auto'>
        {/* Title */}
        <div className='mx-auto my-10 h-10 md:h-14 w-3/4 rounded-xl animate-pulse dark:bg-dark-400 bg-light-400' />
        {/* Hero image */}
        <div className='my-10 h-64 md:h-96 w-full rounded-xl animate-pulse dark:bg-dark-400 bg-light-400' />
        {/* Body */}
        <section className='text-lg'>
          <PostSkeleton />
        </section>
      </article>
    </div>
  );
}
