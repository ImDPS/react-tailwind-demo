import React from 'react'
import { airbnb } from '../assets'
import { clients_arr } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients_arr.map((client) => {
          return(
            <div key={client.id} className={`flex-1 ${styles.flexCenter} opacity-70 hover:opacity-100 ease-in-out`}>
              <img className="sm:w-[192px] w-[100px] object-contain" src={client.logo} alt="client" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients