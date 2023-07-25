import React, { Suspense } from "react";
import { Routes, BrowserRouter,Route } from "react-router-dom";
import { Spinner } from "reactstrap";
import CustomRouterComp from "./CustomRouterComp";
const MainComponent = React.lazy(() => import("./mainComponent/MainComponent"));
function App() {
	return (
		<main>
			<BrowserRouter>
				<Suspense
					fallback={
						<div style={{ height: "400px" }}>
							<div style={{ position: "absolute", left: "50%", top: "50%" }}>
								<Spinner />
							</div>
						</div>
					}
				>
					<Routes>
						{/* <Route exact path="/" element={<MainComponent />} /> */}
						<Route exact path="/" element={<CustomRouterComp  component={MainComponent} />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</main>
	);
}

export default App;
