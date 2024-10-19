import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import Icons from '../../constants/Icons';
import { router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  return (
    <Container>
      <View className='items-center justify-start w-full h-auto mt-[60px]'>
        <Text className='text-[#1F41BB] font-extrabold text-[32px] text-center'>
          Create Account
        </Text>
        <Text className='text-[#000000] font-medium text-base text-center w-[320px] mt-2'>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      <View className='items-center justify-start w-full h-auto mt-[25px]'>
        <FormField 
          placeholder={'Email'}
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e})}
          styles='mt-7'
          keyboardType='email-address'
        />
        <FormField 
          placeholder={'Password'}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
          styles='mt-8'
        />
        <FormField 
          placeholder={'Confirm Password'}
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({ ...form, confirmPassword: e})}
          styles='mt-8'
        />

        <CustomButton
          label='Sign up'
          onPress={() => console.log("Sign up")}
          styles={'bg-[#1F41BB] w-[350px] h-[60px] mt-[50px]'}
          textStyle={'text-white text-[20px] font-semibold tracking-wider'}
        />

        <CustomButton
          label='Already have an account'
          onPress={() => router.replace('/sign-in')}
          styles={'mt-7 h-[50px] w-[350px]'}
          textStyle={'text-[#494949] text-base font-semibold'}
        />
      </View>

      <View className='mt-[60px] items-center'>
        <Text className='text-[#1F41BB] font-bold text-base'>
          Or continue with
        </Text>

        <View className='flex-row justify-between items-end w-[200px] mt-6'>
          <CustomButton
            icon={Icons.google}
            styles='bg-[#ECECEC] rounder-lg w-[60px] h-[45px]'
            disabled={true}
          />
          <CustomButton
            icon={Icons.facebook}
            styles='bg-[#ECECEC] rounder-lg w-[60px] h-[45px]'
            disabled={true}
          />
          <CustomButton
            icon={Icons.twitter}
            styles='bg-[#ECECEC] rounder-lg w-[60px] h-[45px]'
            disabled={true}
          />
        </View>
      </View>
    </Container>
  )
}

export default SignUp