import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <Image
        src="/Kiwi-sleeping.avif"
        alt="Kiwi bird laying down"
        width={100}
        height={100}
      />

      <ul>
        <li>
          <Link href={'/Post'}>Post</Link>
        </li>
        <li>
          <Link href={'/View'}>View Posts</Link>
        </li>
      </ul>
    </>
  )
}
