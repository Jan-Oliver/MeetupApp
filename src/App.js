import { Routes, Route } from "react-router-dom";
import AddMeetup from "./pages/AddMeetupsPage";
import FavouriteMeetups from "./pages/FavouriteMeetupsPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./ui/layout";
import * as Realm from "realm-web";
import { useEffect, useState } from "react";

function App() {
  // Add your App ID
  const appID = "<Your App ID>"
  const app = new Realm.App({ id: appID });
  const [user, setUser] = useState(app.currentUser);
  const [userLoading, userSetLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function signIn() {
      console.log("User login called")
      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user)
      userSetLoading(false)
    }
    signIn();
  }, []);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage loading={loading} setLoading={setLoading} user={user} />} />
          <Route path="/AddMeetup" element={<AddMeetup user={user} setLoading={setLoading} />} />
          <Route path="/favouritemeetups" element={<FavouriteMeetups />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
