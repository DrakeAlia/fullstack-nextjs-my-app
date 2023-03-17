import Authform from "@component/components/Authform";

// This is the component that will be rendered on the /signin route.
export default function Signin() {
  return (
    <div>
      <Authform mode="signin" />
    </div>
  );
}
