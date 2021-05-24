import "./Button.scss";

type Props = {
  /** Button text or content */
  label: string;
  /** Type of style */
  type: "accent-fill" | "accent-outline" | "fill" | "outline";
  /** Font-awesome class */
  icon?: string;
};
const Button = ({ label, type, icon }: Props) => {
  return (
    <button className={`btn ${type}`}>
      {label}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default Button;
