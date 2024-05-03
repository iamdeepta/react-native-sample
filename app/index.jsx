import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Main() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter !== 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl">Count: {counter}</Text>
        <StatusBar style="auto" />
        <Link href={"/profile"}>Go to Profile</Link>

        <View className="flex flex-row justify-center items-center mt-5 gap-1">
          <TouchableOpacity
            className="w-[70px] bg-red-600 items-center text-center rounded-[10px]"
            title="-"
            onPress={() => decrement()}
            disabled={counter === 1}
          >
            <Text className="text-white text-xl">-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[70px] bg-green-600 items-center text-center rounded-[10px]"
            title="+"
            onPress={() => increment()}
          >
            <Text className="text-white text-xl">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
