import NavbarMobile from './NavbarMobile'
import NavbarTablet from './NavbarTablet'
import { v4 as uuidv4 } from 'uuid';
import { Tablet } from '../../General/mediaQueryComponant'
import { Mobile } from '../../General/mediaQueryComponant'

 
 const Navbar =()=>{

    
    

    const routeData = [
        { 
            id:uuidv4(),
            text : 'home',
        }, { 
            id:uuidv4(),
            text : 'products',
        }, { 
            id:uuidv4(),
            text : 'conntact',
       }, { 
            id:uuidv4(),
            text : 'help',
       }
    ]


    return (
        <>
            <Mobile>
                <NavbarMobile   routeData={routeData} />
            </Mobile>
            <Tablet>
                <NavbarTablet   routeData={routeData}/>
            </Tablet>
        </>
    )
}

export default Navbar