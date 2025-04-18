import React from 'react'
import Item from '../components/Item'

const Home = () => {
  return (
    <div>
    <section>
      <div  className=" grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-7xl p-8 gap-8">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      </div>
    </section>
    </div>
  )
}

export default Home