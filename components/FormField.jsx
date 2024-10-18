import { View, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({
    value,
    placeholder,
    handleChangeText,
    styles,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View
        className={`space-y-2 focus:border-2 w-[375px] h-16 px-4 bg-[#F1F4FF] rounded-lg focus:border-[#1F41BB] ${styles}`}
    >
      <TextInput
        className='flex-1 text-black font-medium text-base tracking-wider'
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#626262'}
        onChangeText={handleChangeText}
        secureTextEntry={(placeholder === 'Password' && !showPassword) || (placeholder === 'Confirm Password' && !showConfirmPassword)}

      />
    </View>
  )
}

export default FormField