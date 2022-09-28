import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/react-meetups">
          <AllMeetupsPage />
        </Route>
        <Route path="/react-meetups/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/react-meetups/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
