import { View, Text, Image } from "react-native";
import { router } from "expo-router";
import images from "../constants/images";
import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <Container scroll={false} pb={50}>
      <Image
        source={images.onBoard}
        className="w-full h-50 my-[60px] border-solid"
        resizeMode="contain"
      />
      <View className="justify-center items-center w-full">
        <Text className="w-80 font-bold text-[40px] text-center text-[#1F41BB]">
          Discover Your Dream Job here
        </Text>
        <Text className="w-80 font-normal text-[15px] text-center text-[#000000] mt-[20px]">
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>
      <View className="flex-row justify-center mt-[70px]">
        <CustomButton
          label={"Login"}
          styles="bg-[#1F41BB] rounded-md w-[40%] h-[50px] mr-2"
          onPress={() => {
            router.replace("/sign-in");
          }}
          textStyle={"text-white"}
        />
        <CustomButton
          label={"Register"}
          styles="rounded-md w-[40%] h-[50px]"
          onPress={() => {
            router.replace("/sign-up");
          }}
        />
      </View>
    </Container>
  );
}
