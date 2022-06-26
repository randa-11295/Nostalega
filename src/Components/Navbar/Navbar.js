import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";

const Navbar = () => {
  const routeData = ["افلام", "اغاني", "مسلسلات"];

  return (
    <>
      <NavbarTablet routeData={routeData} />
      <NavbarMobile routeData={routeData} />
    </>
  );
};

export default Navbar;
