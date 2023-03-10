import React from 'react'
import { layout } from '../style'
import styles from '../style'

import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>

      <div className={layout.sectionImgReverse}>
        <img src={bill} className="w-[100%] h-[100%] relative z-[5] "/>
      </div>

      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden"/>
        billing & invoicing.
        </h2> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Master modern web development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!
        </p> 

        <div className="flex flex-row sm:mt-10 mt-6">
          <img src={apple} alt="app_store" className=" w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
          <img src={google} alt="google_play" className=" w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing