import Loading from './components/Loading'
import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import malla from './assets/malla.png'
import agujero from './assets/wire2.svg'
import montaña from './assets/montañas.png'
import espiral from './assets/espiral.png'
const LazyThreeObject = lazy(() => import('./components/three/mainThree'))

function App () {
  return (
    <main>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div>
          <h1>PROTOTYPE</h1>
        </div>
      </motion.header>
      <motion.section
        className='three-object-section'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Suspense fallback={Loading()}>
          <LazyThreeObject />
        </Suspense>
        <img src={malla} alt="wireframe" />
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div>
          <h2>SYNTHESES</h2>
        </div>
        <div className='flex-box1'>
          <div>
            <img src={montaña} alt="wireframe" />
          </div>
          <div>
            <img src={agujero} alt="wireframe" />
          </div>
        </div>
        <div className='flex-box2'>
          <div>
            <p>
            UNLEASH THE POWER OF <span>PROTOTYPE</span>  AND THE CHAOS OF <span>SYNTHESIS</span>. WHERE IDEAS COLLIDE, EVOLVE, AND TRANSFORM INTO SOMETHING BEYOND IMAGINATION.
            </p>
          </div>
          <div>
            <img src={espiral} alt="" />
          </div>
        </div>
      </motion.div>
    </main>
  )
}

export default App
