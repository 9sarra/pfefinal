import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import * as yup from "yup";
import Box from "../Box";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import CheckBox from "../CheckBox";
import Divider from "../Divider";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import { H3, H5, H6, SemiSpan, Small, Span } from "../Typography";
import { StyledSessionCard } from "./SessionStyle";
import { register } from "api/auth";
import { useRouter } from "next/router";

const Signup: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await register(values);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
    <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb="0.5rem">
          Create Your Account
        </H3>
        <H5
          fontWeight="600"
          fontSize="12px"
          color="gray.800"
          textAlign="center"
          mb="2.25rem"
        >
          Please fill all forms to continued
        </H5>

        <TextField
          mb="0.75rem"
          name="name"
          label="Full Name"
          placeholder="Ralph Adwards"
          fullwidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name || ""}
          errorText={touched.name && errors.name}
        />
        <TextField
          mb="0.75rem"
          name="email"
          placeholder="exmple@mail.com"
          label="Email or Phone Number"
          type="email"
          fullwidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email || ""}
          errorText={touched.email && errors.email}
        />
        <TextField
          mb="0.75rem"
          name="password"
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          label="Password"
          fullwidth
          endAdornment={
            <IconButton
              size="small"
              type="button"
              p="0.25rem"
              mr="0.25rem"
              color={passwordVisibility ? "gray.700" : "gray.600"}
              onClick={togglePasswordVisibility}
            >
              <Icon variant="small" defaultcolor="currentColor">
                {passwordVisibility ? "eye-alt" : "eye"}
              </Icon>
            </IconButton>
          }
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ""}
          errorText={touched.password && errors.password}
        />

        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          type="submit"
          fullwidth
        >
          Create Account
        </Button>

        <Box mb="1rem">
          <Divider width="200px" mx="auto" />
          <FlexBox justifyContent="center" mt="-14px">
            <Span color="text.muted" bg="body.paper" px="1rem">
              on
            </Span>
          </FlexBox>
        </Box>
      </form>
      <FlexBox justifyContent="center" bg="gray.200" py="19px">
        <SemiSpan>Already have account?</SemiSpan>

        <a href="http://localhost:3001/auth">
          <H6 ml="0.5rem" borderBottom="1px solid" borderColor="gray.900">
            Log in
          </H6>
        </a>
      </FlexBox>
    </StyledSessionCard>
  );
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  email: yup.string().email("invalid email").required("${path} is required"),
  password: yup.string().required("${path} is required"),
});

export default Signup;
