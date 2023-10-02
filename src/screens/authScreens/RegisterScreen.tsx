import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { Button } from "react-native-elements";
  import logo from "../../assets/images/logo.png";
  import { Formik } from "formik";
  import { RegisterSchema } from "../../validate/Validation";
  
  const windowWidth = Dimensions.get("window").width;
  
  const RegisterScreen = ({ navigation }) => {
    return (
      <KeyboardAvoidingView>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={logo}
              style={{
                width: 200,
                height: 100,
                resizeMode: "contain",
              }}
            />
          </View>
          <View>
            <Formik
              initialValues={{
                  lastName: "",
                  middleName: "",
                  firstName: "",
                  email: "",
                  phone: "",
                  password: "",
                  rePassword: "",
              }}
              validationSchema={RegisterSchema}
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
                    Đăng kí tài khoản
                  </Text>
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      placeholder="Họ"
                      style={styles.input}
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                      <Text style={{ color: "red" }}>{errors.lastName}</Text>
                    ) : null}
                  </View>
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      placeholder="Tên đệm"
                      style={styles.input}
                      onChangeText={handleChange("middleName")}
                      onBlur={handleBlur("middleName")}
                      value={values.middleName}
                    />
                    {errors.middleName && touched.middleName ? (
                      <Text style={{ color: "red" }}>{errors.middleName}</Text>
                    ) : null}
                  </View>
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      placeholder="Tên"
                      style={styles.input}
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      <Text style={{ color: "red" }}>{errors.firstName}</Text>
                    ) : null}
                  </View>
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      placeholder="Email"
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
                      placeholder="Số điện thoại"
                      style={styles.input}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone ? (
                      <Text style={{ color: "red" }}>{errors.phone}</Text>
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
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      placeholder="Nhập mật khẩu"
                      style={styles.input}
                      secureTextEntry={true}
                      onChangeText={handleChange("rePassword")}
                      onBlur={handleBlur("rePassword")}
                      value={values.rePassword}
                    />
                    {errors.rePassword && touched.rePassword ? (
                      <Text style={{ color: "red" }}>{errors.rePassword}</Text>
                    ) : null}
                  </View>
                  <View style={styles.boxLoginBtn}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.btnLogin}
                    >
                      <Text style={styles.btnLoginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                  </View>
  
                  <View style={styles.boxRegister}>
                    <Text style={styles.textRegister}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Login")}
                    >
                      <Text style={styles.btnLink}>Đăng kí</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
          <Button title="welcom" onPress={() => navigation.navigate("Welcome")} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default RegisterScreen;
  
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
  //   boxLoginBtn: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //   },
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
    boxLoginBtn: {
        
    }
  });
  