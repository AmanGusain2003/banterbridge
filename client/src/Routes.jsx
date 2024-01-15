import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import Chat from "./Chat";

export default function Routes() {
  const {username, id} = useContext(UserContext);
  console.log("username routes: " + username)
  if (username) {
    return <Chat />;
  }

  return (
    <RegisterAndLoginForm />
  );
}