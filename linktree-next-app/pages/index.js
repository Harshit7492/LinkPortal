import Link from 'next/link'
import MyHead from '../components/MyHead'
// import {heroImg} from '../public/images/Designer'
export default function Home() {
  return (
    <>
      <MyHead
        title="LinkTree"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <div className="flex flex-col md:flex-row items-center justify-between h-screen p-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 pl-5">
          <h1 className="text-7xl font-bold ml-4 mb-4">Welcome to LinkPort</h1>
          <p className="text-lg ml-5 text-gray-700">
            LinkPort is your dynamic hub for managing and sharing all your links in one place.
            Add, edit, or delete your links anytime, anywhere!
          </p>
          <Link href="/apply">
            <span className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 cursor-pointer">
              Learn More About Us
            </span>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src="/images/Designer.png"
            alt="LinkPort"
            className="rounded-3xl shadow-lg max-w-lg h-18"
          />
           </div>
      </div>
          <span className="text-2xl text-gray-500 mt-1 justify-center items-center  ">
            Manage all your favorite links effortlessly with LinkPort. Your go-to platform for organizing and sharing links in style.
          </span>       
    </>
  )
}
