import ButtonSvg from "./assets/svg/ButtonSvg";
import ButtonGradient from "./assets/svg/ButtonGradient";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `relative inline-flex items-center justify-center h-11 overflow-hidden transition-colors hover:text-color-1 
    ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  
  const spanClasses = "relative z-10"; // Keeps text above the gradient

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
