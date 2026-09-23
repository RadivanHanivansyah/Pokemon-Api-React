import Logo from "../src/assets/pokemon-logo-png-1421.png";
export default function Header() {
  return (
    <header className="flex justify-center">
      <img src={Logo} alt="" className="w-1/2" />
    </header>
  );
}
