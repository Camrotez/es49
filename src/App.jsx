import { Routes, Route } from "react-router-dom";
import GitHubUser from "./assets/GithubUser";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<p>Add a user and select it!</p>}/>
        <Route path="/:username" element={<GitHubUser />} />
      </Routes>
    </>
  );
}

export default App;
