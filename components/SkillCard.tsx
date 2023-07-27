import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


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


const SkillCard = ({title1, title2,image1, image2, link1, link2, description1, description2}: Props) => {
  return (
    <div>
        {/* left side image card */}
        <div className='flex gap-7 p-4'>
           <a href={link1} target="_blank">
           <div >
            <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={image1}
          alt="PhotoShop"
        />
        
            </div>
            </a>
            <div>
                <h3>{title1}</h3>
                <p>
                    {description1}
                </p>
                <Link href={link1} target="_blank">View More</Link>
            </div>
           
        </div>
        {/* {right side image card} */}
        <div className='flex gap-7 p-4'>
            <div>
                <h3>{title2}</h3>
                <p>
                    {description2}
                </p>
                <Link href={link2} target="_blank" />

            </div>

            <div>
            <Image
             className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
             width={350}
             height={350}
             src={image2}
             alt="Adobe Illustrator"
        />
            </div>

        </div>
    </div>
  )
}

export default SkillCard