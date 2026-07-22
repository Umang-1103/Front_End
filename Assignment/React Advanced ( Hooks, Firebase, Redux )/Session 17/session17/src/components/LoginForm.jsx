import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Login Form</h3>
        </div>

        <div className="card-body">

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              setUser(values);
              resetForm();
            }}
          >
            <Form>

              <div className="mb-3">
                <label>Email</label>

                <Field
                  type="email"
                  name="email"
                  className="form-control"
                />

                <div className="text-danger">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="mb-3">
                <label>Password</label>

                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />

                <div className="text-danger">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>

            </Form>
          </Formik>

          {user && (
            <div className="mt-4">

              <h4>Submitted Data</h4>

              <table className="table table-bordered">

                <tbody>

                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>

                  <tr>
                    <th>Password</th>
                    <td>{user.password}</td>
                  </tr>

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default LoginForm;