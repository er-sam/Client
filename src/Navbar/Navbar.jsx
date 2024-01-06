import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

function Nav() {
  return (
    <Navbar style={{ justifyContent: "center", position: "sticky" }} rounded>
      <Navbar.Brand href="/">
        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white bg-amber-500 py-1 px-3 rounded-s-3xl bg-opacity-50">
          Q-Shop
        </span>
        <p></p>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="/login">
          Login <CiLogin size={22} />
        </Button>
        {/* <Navbar.Toggle /> */}
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Product</Navbar.Link>
        <Navbar.Link href="#">Sell Product</Navbar.Link>
        {/* <Navbar.Link href="#">Pricing</Navbar.Link> */}
        <Navbar.Link href="#">Customer Support</Navbar.Link>
        <Navbar.Link href="/cart">
          <IoCartOutline size={23} color="red" />
        </Navbar.Link>
      </Navbar.Collapse>
      {/* <div>
      <IoCartOutline />
      </div> */}
    </Navbar>
  );
}

export default Nav;
