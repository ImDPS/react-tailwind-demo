import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { airbnb, quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img}) => {
  return(
    <div className="flex justify-between px-10 py-12 flex-col max-w-[370px] rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading=[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />
        
        <div className="flex flex-col ml-4" >
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">{name}</h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white ">{title}</p>
          {/* <p>{title}</p> */}
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section id="clients" className="">
      <div>
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h1>
        <div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Master modern web development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!
          </p>
        </div>
        
      </div>
      
      <div className="flex flex-wrap ">
        {feedback.map((feedback, index) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials