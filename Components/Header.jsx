import Logo from "../src/assets/pokemon-logo-png-1421.png";
export default function Header() {
  return (
    <header className="flex justify-center -mb-4 lg:-mt-9">
      <img src={Logo} alt="" className="w-1/2 sm:w-1/3 md:w-1/4" />
    </header>
  );
}
