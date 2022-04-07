import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Col, Card, Statistic, Row, Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Header, Content } = Layout;
const Account = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {},
    validationSchema: Yup.object({
      username: Yup.string(),
      password: Yup.string(),
      passtwo: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
  });
}