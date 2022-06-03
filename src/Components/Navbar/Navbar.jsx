import NavbarMobile from './NavbarMobile'
import NavbarTablet from './NavbarTablet'
import { v4 as uuidv4 } from 'uuid';
import { Tablet } from '../../General/mediaQueryComponant'
import { Mobile } from '../../General/mediaQueryComponant'
import { useEffect, useState } from 'react';

 
 const Navbar =()=>{

    const [innerCumponentWidth , setInnerCumponentWidth ] = useState(false)
     
    useEffect(()=>{
        const resizeListener = () => {
              if (window.innerWidth > 768){
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

    const routeData = [
        { 
            id:uuidv4(),
            text : 'تصفح',
        }, { 
            id:uuidv4(),
            text : 'افلام',
        }, { 
            id:uuidv4(),
            text : 'اغاني',
       }, { 
            id:uuidv4(),
            text : 'مسلسلات',
       }, { 
            id:uuidv4(),
            text : 'تواصل معنا',
    }
    ]


    return (
        <div  >   
            { innerCumponentWidth ? <NavbarTablet routeData={routeData} />  : 
                                    <NavbarMobile routeData={routeData} />}
        </div>
    )
}

export default Navbar