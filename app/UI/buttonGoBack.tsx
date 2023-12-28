'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import arrowLink from '/foto/arrowLink.svg'

export default function ButtonGoBack() {
 const route = useRouter();

  const click = () => {
    route.back();
  };

  return (
    <div className='link'>
      <Link href="" onClick={click}>
        <Image src={arrowLink} width={24} height={24} alt='Logo Link' />
        GO BACK
      </Link>
    </div>
  );
}
