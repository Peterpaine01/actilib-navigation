// Change source when logo is updated
import logo from "../assets/logo-header.png";
import { Image } from "react-native";

const LogoTitle = () => {
  return (
    <Image
      style={{
        height: 40,
        objectFit: "contain",
      }}
      source={logo}
    />
  );
};

export default LogoTitle;
