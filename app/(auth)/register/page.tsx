import Authform from "@component/components/Authform";

// This is the component that will be rendered on the /register route.
export default function Register() {
  return (
    <div>
      <Authform mode="register" />
    </div>
  );
}
