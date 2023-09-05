import Image from 'next/image'
import food from 'public/food0.png'

export default function List() {
  let product = ['tomatoes', 'pasta', 'coconut']


  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {
        product.map((a, i)=>{
            return(<div className='food' key={i}>
                <Image width={128} height={180} 
                src={`/food${i}.png`} className='food-img'/>
            <h4>{a} 40$</h4>
          </div>
          )
        })
        
      }
    </div>
  )
}
