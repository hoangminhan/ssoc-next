import Link from 'next/link'
export default function NotFound() {
   return (
      <div className="">
         <h2 className="text-primary">Not Found</h2>
         <p>Could not find requested resource</p>
         <Link href="/">Return Home</Link>
      </div>
   )
}
