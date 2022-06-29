import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";

const Navbar = () => {
  const routeData = [ {text : "دخول" , url:"/form"} ,
   {text :"نوادر" , url:"/"},  
   {text :"اغاني" , url: "/media"}, 
   {text : "افلام" , url:"/category"}
   ];

  return (
    <>
      <NavbarTablet routeData={routeData} />
      {/* <NavbarMobile routeData={routeData} /> */}
    </>
  );
};

export default Navbar;
