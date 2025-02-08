import React from "react";
import FormLabels from "./Formlabels.tsx";

interface FormProps {
  formType: "signin" | "signup";
}

const Form: React.FC<FormProps> = ({ formType }) => {
  return (
    <form className="space-y-2">
      {formType === "signup" && <FormLabels label="Name" id="name" required />}

      <FormLabels label="Email" id="email" type="email" required />
      <FormLabels label="Password" id="password" type="password" required />

      {formType === "signup" && (
        <FormLabels
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          required
        />
      )}
      {formType === "signin" && (
        <a
          href=""
          className="flex text-xs text-gray-500 justify-end hover:text-indigo-600 transition-colors duration-300"
        >
          Forgot password?
        </a>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-1.5 px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
      >
        {formType === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Form;
