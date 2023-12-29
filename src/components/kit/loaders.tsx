export const PostSkeleton = () => (
  <div className='flex flex-wrap rounded-xl p-4'>
    <div className='h-44 w-44 rounded-xl animate-pulse dark:bg-dark-100 bg-light-100' />
    <div className='pl-6 pt-6 sm:pt-0 w-full sm:w-2/3 flex flex-col gap-4'>
      <div className=''>
        <div className='w-full rounded-xl h-8 mb-2 animate-pulse dark:bg-dark-100 bg-light-100' />
        <div className='flex items-center gap-4 mb-4'>
          <div className='w-20 h-6 rounded-xl animate-pulse dark:bg-dark-100 bg-light-100' />
          <div className='w-20 h-6 rounded-xl animate-pulse dark:bg-dark-100 bg-light-100' />
          <div className='w-20 h-6 rounded-xl animate-pulse dark:bg-dark-100 bg-light-100' />
        </div>
        <div className='w-full rounded-xl h-4 mb-2 animate-pulse dark:bg-dark-100 bg-light-100' />
        <div className='w-full rounded-xl h-4 mb-2 animate-pulse dark:bg-dark-100 bg-light-100' />
        <div className='w-full rounded-xl h-4 mb-2 animate-pulse dark:bg-dark-100 bg-light-100' />
      </div>
    </div>
  </div>
);
