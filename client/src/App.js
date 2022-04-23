import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogReg from "./views/LogReg";
import AddJob from "./components/AddJob";
import EditJob from "./components/EditJob";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowJob from "./components/ShowJob";
import Error from "./components/Error";
function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route element={<LogReg />} path="/" />
					<Route element={<Welcome />} path="/career-detector/welcome" />
					<Route element={<Dashboard />} path="/career-detector/dashboard" />
					<Route element={<ShowJob />} path="/career-detector/show-job/:id" />
					{/* Added the below for showjob to test the render of the UI alone - HS - 04212022 */}
					{/* <Route element={<ShowJob />} path="/career-detector/show-job/" /> */}

					<Route element={<AddJob />} path="/career-detector/add-job" />
					<Route element={<EditJob />} path="/career-detector/edit-job/:id" />
					{/* HS - 04212022 - Setting Error Path here  */}
					<Route element={<Error />} path="/career-detector/error" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
