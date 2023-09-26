import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className='bg-red-800 text-brand-color-3'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}