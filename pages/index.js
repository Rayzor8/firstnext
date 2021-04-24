import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-4xl">RayFlash</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam earum enim maiores corrupti reprehenderit non tempora ad illum molestias.</p>
      <Footer/>
    </div>
  )
}
