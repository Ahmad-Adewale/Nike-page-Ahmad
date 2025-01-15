import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
import {motion} from "framer-motion"

export const SlideLeft = (delay) => {
  return{
    initial: {
      opacity: 0, x: 100,
    },
    animate: {
      opacity: 1, x: 0,
      transition:{
        duration: 0.3,
        delay: delay,
        ease: "easeInOut"
      }
    }
    }
  }
  export const SlideUp = (delay) => {
    return{
      initial: {
        opacity: 0, y:100,
      },
      animate: {
        opacity:1, y: 0,
        transition: {
          duration: 0.3, delay, ease:"easeInOut"
        }
      }
    }
  }

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <motion.div
         variants={SlideUp(0.5)}
           initial="initial"
           whileInView={"animate"}
           viewport={{ once: false}}
        >
          <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span>  Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and sttle with our sought-after selection. Discover a world of comfort, design and value
        </p>
        </motion.div>
        
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
      {
        products && products.map((product, index) => (
          <motion.div
          
           variants={SlideLeft((index+1) * 0.05)}
           initial="initial"
           whileInView={"animate"}
           viewport={{ once: false}}>
            <PopularProductCard key={product.name} {...product} />
           </motion.div>
        ))
      }
      </div>
    </section>
  )
}

export default PopularProduct