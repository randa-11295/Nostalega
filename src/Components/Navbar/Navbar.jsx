import NavbarMobile from './NavbarMobile'
import NavbarTablet from './NavbarTablet'
import { Tablet } from '../../General/mediaQueryComponant'
import { Mobile } from '../../General/mediaQueryComponant'
import { useEffect, useState } from 'react';


const Navbar =()=>{
const [innerCumponentWidth , setInnerCumponentWidth ] = useState(true)
  
useEffect(()=>{
const resizeListener = () => {
if (window.innerWidth > 900){
  setInnerCumponentWidth(true)
}
else{setInnerCumponentWidth(false)}
};

resizeListener()

window.addEventListener('resize', resizeListener);
return () => {
window.removeEventListener('resize', resizeListener);
}
    
})

const routeData = ['افلام',  'اغاني', 'مسلسلات']

return (
<>
{ innerCumponentWidth ? <NavbarTablet routeData={routeData} /> : <NavbarMobile routeData={routeData} />}
</>
)
}

export default Navbar