import './App.css'
import contacts from "./Components/Contacts"; 
import Card from "./Components/Card";

export default function App() {
  return (
    <div className='App'>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card key={index} contact={contact} /> 
      ))}
    </div>
  );
}