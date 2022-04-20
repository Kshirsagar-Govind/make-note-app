import NoteBookRow from "./Components/Containers/note-list-row";
import TaskContainer from "./Components/Containers/task-container";
import HomeScreen from "./Components/home-screen";
import LoginPage from "./Components/login-screen";
import NotePage from "./Components/note-screen";
import NotebookPage from "./Components/notebook-screen";
import RegistrationPage from "./Components/registration-screen";
import UserProfile from "./Components/user-profile-screen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RenameNotebookPopup, DeleteNote, AddNotebook } from "./Components/Containers/popups";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/dashboard" component={NotebookPage} exact />
          <Route path="/" component={LoginPage} exact />
          <Route path="/registration-page" component={RegistrationPage} exact />
          <Route path="/profile-page" component={UserProfile} exact />
          <Route path="/note-page/:note/:notebook_id/:note_id" component={NotePage} exact />
        </Switch>
      </Router>
      {/* <AddNotebook /> */}


    </div>
  );
}

export default App;
