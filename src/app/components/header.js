import Image from "next/image";
import Logo from "@/assets/images/logo.jpg";

export default function Header() {
  return (
    <>
      <Image src={Logo} alt="a server" width={100} height={100} />
      <p>Welcome to this NextJS Course!</p>
    </>
  );
}
