import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
  label,
  icon,
  styles,
  iconTint,
  onPress,
  disabled,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      className={`items-center justify-center flex-row relative rounded-md ${styles}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >

      {icon ? 
        <Image
          source={icon}
          className="h-6 w-6"
          resizeMode="contain"
          tintColor={iconTint}
        /> : ""
      }

      <Text
        className={`text-base font-bold text-center ${textStyle}`}
      >
        {label}
      </Text>

    </TouchableOpacity>
  )
}

export default CustomButton