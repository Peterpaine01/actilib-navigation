import goBack from "../assets/goBack.png";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        style={{
          width: 30,
          height: 30,
          objectFit: "cover",
        }}
        source={goBack}
      />
    </TouchableOpacity>
  );
};

export default HeaderBack;
