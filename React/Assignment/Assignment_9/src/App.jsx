import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Notes";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
