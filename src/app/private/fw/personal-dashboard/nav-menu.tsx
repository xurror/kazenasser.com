import Nav, { NavItem } from "./nav";
import TopNav from "./top-nav";

export default function NavMenu({
  navigation,
}: Readonly<{
  navigation: NavItem[];
}>) {
  return (
    <div>
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <Nav navigation={navigation} />
      </div>
      <TopNav navigation={navigation} />
    </div>
  );
}
