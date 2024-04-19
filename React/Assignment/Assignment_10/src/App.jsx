import Form from "./component/Form";
import "./App.css";

export default function App() {
  let userIsRegistered = false;

  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}
