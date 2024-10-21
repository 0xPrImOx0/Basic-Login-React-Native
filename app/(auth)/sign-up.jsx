import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import Icons from '../../constants/Icons';
import { router } from 'expo-router';
import { ConfirmPasswordChecker, PasswordChecker, EmailChecker } from '../../utils/validate';


const SignUp = () => {
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);
  const [isConfirmPasswordClicked, setIsConfirmPasswordClicked] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })
  
  useEffect(() => {
    const emailError = isEmailClicked && EmailChecker(form.email);
  
    const passwordError = isPasswordClicked && PasswordChecker(form.password);

    const confirmPasswordError = isConfirmPasswordClicked && ConfirmPasswordChecker(form.password, form.confirmPassword);
  
    setForm((prev) => ({
      ...prev,
      emailError,
      passwordError,
      confirmPasswordError,
    }));
  }, [form.email, form.password, form.confirmPassword, isEmailClicked, isPasswordClicked, isConfirmPasswordClicked]);
  

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
        <FormField 
          placeholder={'Confirm Password'}
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({ ...form, confirmPassword: e})}
          styles='mt-8'
          error={form.confirmPasswordError}
          onBlur={() => setIsConfirmPasswordClicked(true)} // Optionally reset on blur
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

      <View className={`items-center ${form.emailError || form.passwordError || form.confirmPasswordError || form.email || form.password || form.confirmPassword ? 'mt-[20px]' : 'mt-[60px]'}`}>
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