import React from 'react'
import { airbnb } from '../assets'
import { clients_arr } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients_arr.map((client) => {
          {console.log(client)}
          <div>
            {console.log(client.logo)}
            <img src={client.logo} alt="client" />
          </div>
        })}
      </div>
    </section>
  )
}

export default Clients