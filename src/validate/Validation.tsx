import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không đúng định dạng!")
    .required("Email không được để trống!"),
  password: Yup.string()
    .min(6, "Mật khẩu không dưới 6 kí tự!!")
    .required("Mật khẩu không được để trống!"),
});

export const RegisterSchema = Yup.object().shape({
  lastName: Yup.string().required("Họ không được để trống!"),
  middleName: Yup.string().required("Tên đệm không được để trống!"),
  firstName: Yup.string().required("Tên không được để trống!"),
  email: Yup.string()
    .email("Email không đúng định dạng!")
    .required("Email không được để trống!"),
  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Số điện thoại phải có 10 chữ số và không chứa ký tự đặc biệt."
    )
    .required("Vui lòng nhập số điện thoại."),
  password: Yup.string()
    .min(6, "Mật khẩu không dưới 6 kí tự!!")
    .required("Mật khẩu không được để trống!"),
  rePassword: Yup.string()
    .min(6, "Mật khẩu không dưới 6 kí tự!!")
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp.")
    .required("Vui lòng nhập lại mật khẩu."),
});
