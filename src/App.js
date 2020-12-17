import ApiContextProvider from "./contexts/ApiContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Grid } from "@material-ui/core";
import Search from "./components/Search";

import UserBookshelf from "./components/UserBookshelf";
import { auth, firestore } from "./firebase";
import AuthContextProvider from "./contexts/AuthContext";
import AuthorDetails from "./components/AuthorDetails";

function App() {
	return (
		<Grid container direction="column">
			<Router>
				<AuthContextProvider>
					<ApiContextProvider>
						<Grid item>
							<Navbar />
						</Grid>
						<Grid item>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/search" component={Search} />
								<Route exact path="/books/:id?" component={BookDetails} />
								<Route exact path="/authors/:id?" component={AuthorDetails} />
								<Route exact path="/bookshelf">
									<UserBookshelf />
								</Route>
							</Switch>
						</Grid>
					</ApiContextProvider>
				</AuthContextProvider>
			</Router>
			<Grid item>{/* <Footer /> */}</Grid>
		</Grid>
	);
}

export default App;
