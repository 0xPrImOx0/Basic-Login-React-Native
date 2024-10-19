import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Container from '../../components/Container';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import Icons from '../../constants/Icons';
import { EmailChecker } from '../../utils/validate';

const SignIn = () => {
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  })



  useEffect(() => {
    const errorEmail = isEmailClicked ? form.email !== '' ? EmailChecker(form.email) : 'This field is required' : '';
    const errorPass = isPasswordClicked ? form.password !== '' ? form.password.length > 4 ? '' : 'Password must have at least 4 characters' : 'This field is required' : '';
  
    if (form.emailError !== errorEmail) {
      setForm((prev) => ({
        ...prev,
        emailError: errorEmail,
      }))
    }

    if (form.passwordError !== errorPass) {
      setForm((prev) => ({
        ...prev,
        passwordError: errorPass,
      }))
    }
  }, [form.email, form.password, isEmailClicked, isPasswordClicked]);
  

  return (
    <Container>
      <View className='items-center justify-start w-full h-auto mt-[60px]'>
        <Text className='text-[#1F41BB] font-extrabold text-[32px] text-center'>
          Login here
        </Text>
        <Text className='text-[#000000] font-bold text-[23px] text-center w-[230px] mt-7'>
          Welcome back you've been missed!
        </Text>
      </View>

      <View className={`items-center justify-start w-full h-auto ${form.emailError || form.passwordError ? 'mt-[20px]' : 'mt-[50px]'}`}>
        <FormField 
          placeholder={'Email'}
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e})}
          styles='mt-8'
          keyboardType='email-address'
          error={form.emailError}
          onBlur={() => setIsEmailClicked(true)} // Optionally reset on blur
        />
        <FormField 
          placeholder={'Password'}
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
          styles='mt-8'
          error={form.passwordError}
          onBlur={() => setIsPasswordClicked(true)} // Optionally reset on blur
        />

        <CustomButton
          label='Forgot your password?'
          onPress={() => console.log("Forgot Password")}
          disabled={true}
          styles={'self-end mr-5 my-8'}
          textStyle={'text-[#1F41BB] text-base font-semibold'}
        />

        <CustomButton
          label='Sign in'
          onPress={() => console.log("Sign in")}
          styles={'bg-[#1F41BB] w-[350px] h-[60px]'}
          textStyle={'text-white text-[20px] font-semibold tracking-wider'}
        />

        <CustomButton
          label='Create new account'
          onPress={() => router.push('/sign-up')}
          styles={'mt-7 h-[50px] w-[350px]'}
          textStyle={'text-[#494949] text-base font-semibold tracking-wider'}
        />
      </View>

      <View className={`${form.emailError || form.passwordError ? 'mt-[20px]' : 'mt-[60px]'} items-center`}>
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

export default SignIn