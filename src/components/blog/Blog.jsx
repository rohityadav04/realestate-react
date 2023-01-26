import React from 'react'
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'
import img from '../images/services1.jpg'
const Blog = () => {
  return (
    <>
     <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section> 
    </>
  )
}

export default Blog
