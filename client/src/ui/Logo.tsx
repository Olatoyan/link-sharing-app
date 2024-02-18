function Logo() {
  const isMobile = window.screen.width <= 768;
  return (
    <img
      src={`${isMobile ? "./logo-devlinks-small.svg" : "./logo-devlinks-large.svg"}`}
      alt="logo"
      className="mobile:px-[1.6rem]"
    />
  );
}

export default Logo;
