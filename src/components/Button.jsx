import { Link } from "react-router-dom";

/** Reusable button: `to` = router link, `href` = external/tel/mailto/WhatsApp, else <button>. */
export default function Button({ children, to, href, onClick, variant = "primary", size, type = "button", className = "", ...rest }) {
  const classes = `btn btn--${variant} ${size ? `btn--${size}` : ""} ${className}`.trim();
  if (to) return <Link to={to} className={classes} onClick={onClick} {...rest}>{children}</Link>;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={classes} onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>{children}</a>
    );
  }
  return <button type={type} className={classes} onClick={onClick} {...rest}>{children}</button>;
}
