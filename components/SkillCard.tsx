import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title1: string;
  title2: string;
  image1: string;
  image2: string;
  link1: string;
  link2: string;
  description1: string;
  description2: string;
}

const SkillCard = ({
  title1,
  title2,
  image1,
  image2,
  link1,
  link2,
  description1,
  description2,
}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center py-7'>
      {/* left side image card */}
      <div className='flex flex-col md:flex-row gap-7 p-4 mt-16 '>
        <a href={link1} target='_blank'>
          <div className='w-96 flex justify-center items-center'>
            <Image
              className='object-cover rounded-lg'
              width={250}
              height={250}
              src={image1}
              alt='PhotoShop'
            />
          </div>
        </a>
        <div className='flex flex-col gap-7 justify-center text-center md:text-left'>
          <h3 className='text-3xl text-green-500'>{title1}</h3>
          <p className='bottom-0 w-full py-1 text-white text-center font-semibold '>
            {description1}
          </p>
          <Link
            className='border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300'
            href={link1}
            target='_blank'
          >
            Inspect
          </Link>
        </div>
      </div>
      {/* right side image card */}
      <div className='flex flex-col-reverse md:flex-row gap-7 p-4 mt-4 '>
        <div className='flex flex-col gap-7 justify-center text-center md:text-right'>
          <h3 className='text-3xl text-green-500'>{title2}</h3>
          <p className='bottom-0 w-full py-1 text-white text-center font-semibold '>
            {description2}
          </p>
          <Link
            className='border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300'
            href={link2}
            target='_blank'
          >
            Inspect
          </Link>
        </div>

        <a href={link2} target='_blank'>
          <div className='w-96 flex justify-center items-center'>
            <Image
              className='object-cover rounded-lg'
              width={250}
              height={250}
              src={image2}
              alt='Adobe Illustrator'
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
