import Link from 'next/link';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <>
      <header className='flex p-60 text-emerald-700'>
        <div className='p-10'>
          <h1 className='text-6xl font-bold'>Kamil Chrzanowski</h1>
          <p className='p-6 break-normal'>
            Hello there! Here is my little corner on the Internet. Im a web developer and I really appreciate you visting my website. You can{' '}
            <Link
              className='underline font-bold  hover:text-emerald-400'
              href={'/resume'}>
              view my Resume here
            </Link>
            , or if you&apos;d like to get in touch, please check the{' '}
            <Link
              className='underline font-bold  hover:text-emerald-400'
              href={'/contact'}>
              contact page
            </Link>
            .
          </p>
        </div>
        <div>
          <p className='text-9xl'>🚀</p>
        </div>
      </header>
    </>
  );
};
