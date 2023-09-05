import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  let name = 'park'
  
  return (
    <div>
      <h4 className='title'>쿠팡프레쉬</h4> 
      <p className='title-sub'>by dev xylon</p>
    </div>
  )
}
