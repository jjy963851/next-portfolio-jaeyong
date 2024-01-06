import "../styles/globals.css";
import { ThemeProvider } from 'next-themes'
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion"


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">

        <motion.div key={router.pathname}>
          <Component {...pageProps} />
        
          <motion.div className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >   
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
          ><div className="slide-text text-blue-600">
            JaeYong
            <span>for the best</span>
            </div>
          </motion.div>
       
        </motion.div>


          <motion.div className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

        </motion.div>

      </AnimatePresence>
    </ThemeProvider>
  );
}
