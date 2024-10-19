import { View, TextInput, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Icons from '../constants/Icons';
import CustomButton from './CustomButton';

const FormField = ({
    value,
    placeholder,
    handleChangeText,
    styles,
    error,
    onBlur,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View
        className={`items-center mt-2`}
    >
      {value !== '' || error ? 
      <View
        className={`flex-row w-[375px] absolute justify-between mt-[8px]`}
      >
        <Text
          className={`text-base text-[#1F41BB] font-medium ${value !== "" ? '' : 'relative left-[1000px]'}`}
        >
          {placeholder}
        </Text>

        <Image
          source={error ? Icons.x : Icons.check}
          resizeMode='contain'
          className='w-5 h-5 mr-1'
        />
      </View> : ""
      }

      <View className={`focus:border-[1px] w-[375px] h-16 px-4 rounded-lg ${error ? 'border-[1px] border-[#F34336] bg-[#FFE8EC]' : 'focus:border-[#1F41BB] bg-[#F1F4FF]'} 
      ${value.length > 0 && !error ? 'bg-[#E8FFE8] border-[1px] border-[#0f0]' : ''} 
      ${placeholder === 'Password' || placeholder === 'Confirm Password' ? 'flex-row' : ''} ${styles}`}>
        <TextInput
          className='flex-1 text-black font-medium text-base tracking-wider'
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#626262'}
          onChangeText={handleChangeText}
          secureTextEntry={(placeholder === 'Password' && !showPassword) || (placeholder === 'Confirm Password' && !showConfirmPassword)}
          onBlur={onBlur}
        />

        {placeholder === "Password" || placeholder === "Confirm Password" ? 
          <CustomButton
            icon={showPassword || showConfirmPassword ? Icons.eye : Icons.eyeHide}
            onPress={() => setShowPassword((prev) => !prev) || setShowConfirmPassword((prev) => !prev)}
            iconTint={'#1F41BB'}
          /> :
          ""
        }
      </View>

      {error ?
        <Text
          className='text-red-500 text-base self-start mt-[0px] ml-2 mb-[-8px]'
        >
          {error}
        </Text> :
        ""
      }
    </View>
  )
}

export default FormField