export const flexStyle= ( justify , align)=>{
   return {  display :'flex',
            justifyContent: justify || 'space-around' ,
            alignItems:  align || 'center' ,
         }
}

export const backgroundStyle ={
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}

export const headLineStyle =(size)=> {
   return({ fontSize:size || { 
               xs : 35,
               md : 70,
           },
       fontWeight : 800 ,
       fontFamily :  'Lobster',
       color : '#3C342D',
       textTransform: 'capitalize',
       letterSpacing:  { 
         xs : '.5px',
         xl : '.85px',
   },
}  )}
export const subTitle = {
   fontSize: { 
      xs : 18 ,
      md : 25 ,
      xl : 35,
   },
   letterSpacing:  { 
      xs : '.5px',
      xl : '.65px',
},
 fontWeight : 500 ,
 color : '#A46855',
 textTransform: 'capitalize',
}


export const pragragraphStyle =(size , newcolor)=> {
  return ({
   fontSize: size || { 
      xs : 13 ,
      md : 17,
      xl : 21 
   },
   letterSpacing: '.5px',
   lineHeight:  { 
                  xs : '1.5rem',
                  md : '1.8rem' ,
                  xl : '2rem',
         },
         fontWeight : 300,
         color : newcolor ||  '#524439'
      })}

export const containerStyle ={
   maxWidth: {xs : '90%' ,sm : 'sm' , md : 'md' , lg :'lg'}
}