import * as yup from "yup"

export const schema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    age: yup.number().positive().integer().required("Required"),
    email: yup.string().email('Please enter a valid email').required("Required"),
    userName: yup.string().min(5).required("Required"),
    password: yup.string().min(5).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required"),
})