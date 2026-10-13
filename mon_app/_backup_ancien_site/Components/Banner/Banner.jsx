import "./Banner.css";

export default function Banner({ title, subtitle, image, children }) {
  return (
    <section
      className="banner"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="banner_overlay" />
      <div className="banner_content">
        <h1 className="banner_title">{title}</h1>
        {subtitle && <p className="banner_subtitle">{subtitle}</p>}
        {children && <div className="banner_actions">{children}</div>}
      </div>
    </section>
  );
}