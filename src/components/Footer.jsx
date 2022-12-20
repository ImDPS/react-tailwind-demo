import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => {
  return ( 
    <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col w-full mb-5`}>
        <div className=" flex-1 flex flex-col justify-start mr-10">
          <img 
            className="w-[256px] h-[140px] object-contain" 
            src={logo} 
            alt="hoobank"
          />
          <p className={`${styles.paragraph}`}>A new way to 
          make payment easy, reliable and secure.</p>
        </div>
      </div>
      <div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap
      md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => {
          return(
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-white text-[18px] leading-[26px]">{footerLink.title}</h4>
              <ul className='list-none mt-5'>
                {footerLink.links.map((link, index) => {
                  return(
                    <li key={link.name}
                    className="font-poppins font-normal text-[16px] 
                    text-white hover:text-secondary">
                      {link.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="w-full flex flex-row justify-between mt-5 
      border-t-[1px] border-t-[grey]">
        <p className="font-poppins font-normal text-white mt-5">
          2021 HooBank. All rights reserved
        </p>
        <div className="flex flex-row mt-6">
          {socialMedia.map((social, index) => {
            return(
              <img
                key={index}  
                src={social.icon}
                alt={social.title}
                className="w-[20px] h-[20px] ml-4 object-contain"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer