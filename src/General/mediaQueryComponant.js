import { useMediaQuery } from 'react-responsive';


export const Tablet = ({ children }) => {
     const isTablet = useMediaQuery({ minWidth: 768 })
     return isTablet ? <section> {children} </section>  : null
 }

export const Mobile = ({ children }) => {
     const isMobile = useMediaQuery({ maxWidth: 768 })
     return isMobile ? children : null
}
   