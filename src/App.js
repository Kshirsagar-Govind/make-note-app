import NoteBookRow from "./Components/Containers/note-list-row";
import TaskContainer from "./Components/Containers/task-container";
import HomeScreen from "./Components/home-screen";
import LoginPage from "./Components/login-screen";
import NotePage from "./Components/note-screen";
import NotebookPage from "./Components/notebook-sceen";
import RegistrationPage from "./Components/registration-screen";
import UserProfile from "./Components/user-profile-screen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login-page" component={LoginPage} exact />
          <Route path="/registration-page" component={RegistrationPage} exact />
          <Route path="/profile-page" component={UserProfile} exact />
          <Route path="/notebooks-page" component={NotebookPage} exact />
          <Route path="/note-page" component={NotePage} exact />







        </Switch>
      </Router>
      {/* <UserProfile /> */}
      {/* <LoginPage /> */}
      {/* <RegistrationPage /> */}
      {/* <NotePage /> */}
      {/* <NotebookPage /> */}
      {/* <HomeScreen />s */}
    </div>
  );
}

export default App;
