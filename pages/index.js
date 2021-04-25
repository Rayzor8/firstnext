import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <h1 className="text-4xl">RayFlash</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam earum enim maiores corrupti reprehenderit non tempora ad illum molestias.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque quod molestiae facere nihil quae temporibus sit libero explicabo, recusandae eligendi omnis minima harum doloribus! Culpa, fugit tenetur dignissimos dolorum magnam recusandae sed eaque? Nulla excepturi ex, magni error eius dolor quaerat minima nihil hic ipsa nemo, voluptate incidunt quis?</p>
      <Link href="/rayflash">
        <a className="px-4 bg-blue-700 text-xl text-white rounded">See blogs</a>
      </Link>
    </div>
  )
}
