import styles from "./style"

import { Navbar, Hero, Business, Billing, CardDeal,
Testing, Clients, CTA, Footer, Stats, Testimonials} from './components'

const App = () => {
  return (
    
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing /> 
        <CardDeal />
        <Testimonials />
        <Clients />
        <Testing /> 
        <CTA />
        <Footer />
      </div>
    </div>


  </div>
  )
}

export default App