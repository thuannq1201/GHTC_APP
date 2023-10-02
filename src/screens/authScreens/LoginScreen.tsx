import {
    Dimensions,
    Image,
    Keyboard,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React from "react";
  import { KeyboardAvoidingView } from "react-native";
  import logo from "../../assets/images/logo.png";
  import { LoginSchema } from "../../validate/Validation";
  import { Formik } from "formik";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  
  const LoginScreen = ({ navigation }) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
        style={styles.container}
      >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView>
              <View style={styles.containerLogo}>
                <Image source={logo} style={styles.logo} />
              </View>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => console.log(values)}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View style={styles.boxInput}>
                    <Text
                      style={{
                        fontSize: 32,
                        fontWeight: "600",
                        color: "#046ec5",
                        paddingBottom: 16,
                      }}
                    >
                      Đăng nhập
                    </Text>
                    <View style={{ marginBottom: 16 }}>
                      <TextInput
                        placeholder="Nhập số điện thoại hoặc email"
                        style={styles.input}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <Text style={{ color: "red" }}>{errors.email}</Text>
                      ) : null}
                    </View>
                    <View style={{ marginBottom: 16 }}>
                      <TextInput
                        placeholder="Nhập mật khẩu"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <Text style={{ color: "red" }}>{errors.password}</Text>
                      ) : null}
                    </View>
                    <View style={styles.boxLoginBtn}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("RootClientTabs")}
                      >
                        <Text style={styles.btnForgot}>Quên mật khẩu?</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.btnLogin}
                      >
                        <Text style={styles.btnLoginText}>Đăng nhập</Text>
                      </TouchableOpacity>
                    </View>
  
                    <View style={styles.boxRegister}>
                      <Text style={styles.textRegister}>
                        Bạn đã có tài khoản chưa?{" "}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                      >
                        <Text style={styles.btnLink}>Đăng kí ngay</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    containerLogo: {
      flexDirection: "row",
      justifyContent: "center",
      height: (windowWidth * 350) / 635,
    },
    logo: {
      width: windowWidth / 2,
      height: (windowWidth * 350) / 635,
      resizeMode: "contain",
    },
    boxInput: {
      marginHorizontal: 20,
    },
    input: {
      width: "100%",
      borderColor: "#000",
      marginVertical: 8,
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderRadius: 50,
      backgroundColor: "#ccc",
    },
    boxLoginBtn: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnForgot: {
      fontSize: 20,
      color: "#046ec5",
      fontWeight: "600",
    },
    btnLogin: {
      backgroundColor: "#046ec5",
      paddingVertical: 16,
      borderRadius: 20,
      marginVertical: 12,
      paddingHorizontal: 36,
    },
    btnLoginText: {
      textAlign: "center",
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
    },
    boxRegister: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 16,
      justifyContent: "space-between",
    },
    btnLink: {
      fontSize: 20,
      color: "#046ec5",
      fontWeight: "600",
    },
    textRegister: {
      fontSize: 20,
    },
  });
  