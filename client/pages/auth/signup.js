import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/useRequest";
import AuthForm from "../../components/AuthForm";

export default () => {
  return <AuthForm enpoint="signup" title="Sign Up" />;
};
