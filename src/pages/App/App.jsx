import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import GamesIndexPage from '../GamesIndexPage/GamesIndexPage';
import AboutPage from '../AboutPage/AboutPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/games">
              <GamesIndexPage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Redirect to="/games" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}