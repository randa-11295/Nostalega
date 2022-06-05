import { useEffect } from "react"
import classes from "./searchInputTablet.module.css"

const SearchInputTablet =()=>{
    useEffect(()=>{
        console.log('kkkk')
    })
    return (<div>
        <input className={classes.input} type="text" placeholder="بحث ..."  />
 </div>)}

export default SearchInputTablet