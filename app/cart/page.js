import Image from 'next/image'
import Link from "next/link"
import hiHello from './data.js'


export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem item = {장바구니[0]} />
        <CartItem item = {장바구니[1]} />
        <Banner content="현대카드" />
        <Btn color="blue"/>
      </div>
    )
  } 

  function Btn(props){
    return(
      <button style={{background : props.color}}>버튼</button>
    )
  }

  function Banner(props){
    return(
      <h5>{props.content} 결제 행사중</h5>
    )
  }

  function CartItem(props){
    return(
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
  }
