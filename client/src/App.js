import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogReg from "./views/LogReg";
import AddJob from "./views/AddJob";
import EditJob from "./views/EditJob";
import Dashboard from "./views/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route element={<LogReg />} path="/" />
					<Route element={<Dashboard />} path="/career-detector/dashboard" />
					<Route element={<AddJob />} path="/career-detector/show-job/:id" />
					<Route element={<AddJob />} path="/career-detector/add-job" />
					<Route element={<EditJob />} path="/career-detector/edit-job/:id" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
