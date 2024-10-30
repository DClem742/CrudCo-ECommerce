import { Form, useActionData, Navigate } from "react-router-dom";
import { z } from "zod";
import supabase from "../supabase";
import styles from "./Login.module.css";

const LoginSchema = z.object({
  email: z
    .string()
    .email("invalid-email")
    .transform((email) => email.toLowerCase()),
  password: z.string().min(8, "password-to-short"),
});

export const action = async ({ request }) => {
  const formData = await request.formData();
  const result = await LoginSchema.safeParseAsync({
    email: formData.get("username"),
    password: formData.get("password"),
  });

  if (!result.success) {
    console.error(result.error);
    return null;
  }

  const { email, password } = result.data;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("ERROR: ", error);
  }

  return { data, error };
};

const Login = () => {
  const loginData = useActionData();

  if (loginData?.data && !loginData?.error) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login for cool stuff</h2>
      <div className={styles.formContainer}>
        <Form action="/login" method="POST">
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Your Email Address
              <input
                className={styles.input}
                name="username"
                type="email"
                placeholder="you@supercoolhuman.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="s0m3HARD2GUESS!Passw0rd!"
                autoComplete="password"
                required
              />
            </label>
          </div>
          <button className={styles.button} type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;