import Navigation from "./Navigation";

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'About', href: '/about'},
  {label: 'Posts', href: '/posts'},
]

export default function TheHeader() {
  return (
    <header
      className={"bg-purple-950 p-3 flex items-center justify-center uppercase"}
    >
      <Navigation navLinks={navItems}/>
    </header>
  );
}
