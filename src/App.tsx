import "./App.css";
import { Mail, Github, Linkedin } from "lucide-react";

function App() {
  return (
    <>
      <div>
        <h1>Ingusmat </h1>
        <ul className="flex flex-row justify-around">
          <li>
            <a
              href="https://github.com/Ingusmat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matthewburleson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:ingusmat@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
