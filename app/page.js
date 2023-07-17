import Image from 'next/image'
import churchpic from "../public/church.jpg"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <div className="py-10">
        <p>Church Logo</p>
      </div>

      <div className="mt-16 lg:flex items-center">
        <div className="lg:w-7/12 mb-12 lg:mb-0">
          <p className="text-4xl font-semiBold lg:w-4/6 mb-7">Invite your friends for <span className="text-purple-700">Gadites</span> Bible Seminar 2023 with your personalised DP!</p>
          <p>It is super easy and you get it immediately!</p>
          <Image src={churchpic} alt="churchpic" className="lg:w-3/12 w-4/6 mt-6" />
        </div>

        <div className="shadow-lg shadow-gray-400 rounded-lg px-16 py-10">
          <input
            placeholder="Name"
            className="border border-gray-300 px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
          />
          <div className="flex justify-center my-5"><button className="border border-purple-500 rounded-lg px-3 py-2 hover:bg-purple-300">Select Image</button></div>
          <div className="border-dashed border-2 border-gray-300 py-20 px-24" placeholder="Name">Image</div>

          <div><p>Resize Image</p></div>

          <div className="flex justify-center my-5"><Link href="banner" className="bg-purple-700 rounded-lg px-3 py-2 text-white hover:bg-purple-900">Generate Banner</Link></div>
        </div>
      </div>
    </main>
  )
}
