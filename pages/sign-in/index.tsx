import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useState } from "react";
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  useColorModeValue,
  IconButton,
  Icon,
  Pressable,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
} from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";
import IconGoogle from "./components/IconGoogle";
import IconFacebook from "./components/IconFacebook";
import FloatingLabelInput from "./components/FloatingLabelInput";
import Image from "next/Image";
import KeyboardAwareScrollView from "../../keyboardAwareScrollview.web";

export function SignInForm({ props }: any) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = React.useState(false);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{ bg: "white" }}
        _dark={{ bg: "coolGray.800" }}
        space="3"
        justifyContent="space-between"
        borderTopRightRadius={{ base: "2xl", md: "xl" }}
        borderBottomRightRadius={{ base: "0", md: "xl" }}
        borderTopLeftRadius={{ base: "2xl", md: "0" }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign in to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="3">
              <VStack space={{ base: "7", md: "4" }}>
                <FloatingLabelInput
                  isRequired
                  label="Email"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  borderRadius="4"
                  defaultValue={text}
                  onChangeText={(txt: any) => setText(txt)}
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                />
                <FloatingLabelInput
                  isRequired
                  type={showPass ? "" : "password"}
                  label="Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue("#fff", "#1f2937")}
                  defaultValue={pass}
                  onChangeText={(txt: any) => setPass(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showPass ? "eye-with-line" : "eye"}
                        />
                      }
                      onPress={() => {
                        setShowPass(true);
                      }}
                    />
                  }
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  _dark={{
                    borderColor: "coolGray.700",
                  }}
                  _light={{
                    borderColor: "coolGray.300",
                  }}
                />
              </VStack>
              <Link
                ml="auto"
                _text={{
                  fontSize: "xs",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                _light={{
                  _text: {
                    color: "primary.900",
                  },
                }}
                _dark={{
                  _text: {
                    color: "primary.500",
                  },
                }}
              >
                Forgot password?
              </Link>
              <Checkbox
                alignItems="flex-start"
                mt="5"
                isChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <Text
                  pl="3"
                  fontWeight="normal"
                  _light={{ color: "coolGray.800" }}
                  _dark={{ color: "coolGray.400" }}
                >
                  Remember me and keep me logged in
                </Text>
              </Checkbox>
              {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
              <Button
                mt="5"
                size="md"
                borderRadius="4"
                _text={{
                  fontWeight: "medium",
                }}
                _light={{
                  bg: "primary.900",
                }}
                _dark={{
                  bg: "primary.700",
                }}
                onPress={() => router.push("otp")}
              >
                SIGN IN
              </Button>
              {/* Closing Link Tag (react/Router) */}
              <HStack
                mt="5"
                space="2"
                mb={{ base: 6, md: 7 }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
                <Text
                  fontWeight="medium"
                  _light={{ color: "coolGray.300" }}
                  _dark={{ color: "coolGray.500" }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: "coolGray.200" }}
                  _dark={{ bg: "coolGray.700" }}
                ></Divider>
              </HStack>
            </VStack>
            <Center>
              <HStack space="4">
                <Pressable>
                  <IconFacebook />
                </Pressable>
                <Pressable>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: "auto", md: "8" }}
        >
          <Text
            _light={{ color: "coolGray.800" }}
            _dark={{ color: "coolGray.400" }}
          >
            Don't have an account?
          </Text>
          <NextLink href="/sign-up">
            <Link
              _text={{
                fontWeight: "bold",
                textDecoration: "none",
              }}
              _light={{
                _text: {
                  color: "primary.900",
                },
              }}
              _dark={{
                _text: {
                  color: "primary.500",
                },
              }}
              /* onPress function naviagteTo:"SignUp" */
            >
              Sign up
            </Link>
          </NextLink>
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
}
export default function SignIn(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
      />
      <Center
        my="auto"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
        flex="1"
      >
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          maxW={{ md: "1016px" }}
          flex={{ base: "1", md: "none" }}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
                <IconButton
                  variant="unstyled"
                  pl="0"
                  onPress={() => {}}
                  icon={
                    <Icon
                      size="6"
                      as={AntDesign}
                      name="arrowleft"
                      color="coolGray.50"
                    />
                  }
                />
                <Text color="coolGray.50" fontSize="lg">
                  Sign In
                </Text>
              </HStack>
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  Welcome back,
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: "coolGray.400",
                  }}
                  _light={{
                    color: "primary.300",
                  }}
                >
                  Sign in to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              bg="primary.700"
              borderTopLeftRadius={{ base: "0", md: "xl" }}
              borderBottomLeftRadius={{ base: "0", md: "xl" }}
            >
              <Image
                //@ts-ignore
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={"contain"}
                src={require("./components/logo.png")}
              />
            </Center>
          </Hidden>
          <SignInForm props={props} />
        </Stack>
      </Center>
    </>
  );
}
