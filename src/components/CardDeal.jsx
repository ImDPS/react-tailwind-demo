import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Master modern web development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, 
        business stats, reusable feature sections with call-to-action buttons, testimonials, and more!
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}

export default CardDeal