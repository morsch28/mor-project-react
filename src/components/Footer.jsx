import { useTheme } from "../context/theme.context";

function Footer() {
  const { mode } = useTheme();
  return (
    <footer
      className={`border-top  border-2 d-flex justify-content-center fs-5 fw-bold bg-light footer ${
        mode == "dark" ? "bg-black" : ""
      }`}
    >
      This site made by: Mor Schneider {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
