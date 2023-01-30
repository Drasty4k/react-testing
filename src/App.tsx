import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./providers/app-provider";
import "./App.css";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
