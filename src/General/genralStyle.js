export const flexStyle = (justify, align) => {
  return {
    display: "flex",
    justifyContent: justify || "space-around",
    alignItems: align || "center",
  };
};

export const backgroundStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
