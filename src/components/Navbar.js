import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import BookIcon from "@material-ui/icons/Book";
import { Link, useHistory } from "react-router-dom";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import SignInOut from "./SignInOut";
import { Button, Container, Grid, useMediaQuery } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	button: {
		margin: theme.spacing(1),
	},
	headerOptions: {
		// display: "flex",
		flexShrink: 1,
		// flexDirection: "row",
		// justifyContent: "flex-start",
	},
}));

const Navbar = ({ user }) => {
	const history = useHistory();
	const classes = useStyles();
	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Grid container justify="space-between">
						{isMobile ? (
							<Grid item>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="open drawer"
									onClick={handleMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									<MenuItem
										component={Link}
										to={"/"}
										onClick={() => setAnchorEl(null)}
									>
										Home
									</MenuItem>
									<MenuItem
										component={Link}
										to={"/bookshelf"}
										onClick={() => setAnchorEl(null)}
									>
										My Bookshelf
									</MenuItem>
									<MenuItem
										component={Link}
										to={"/search"}
										onClick={() => setAnchorEl(null)}
									>
										Search Books
									</MenuItem>
								</Menu>
							</Grid>
						) : (
							<Grid
								item
								xs={9}
								justify="flex-start"
								className="headerOptions"
								className="headerOptions"
							>
								<Button
									component={Link}
									to={"/"}
									className={classes.button}
									// endIcon={<BookIcon />}
								>
									<Typography>Paperless Bookshelf</Typography>
								</Button>

								<Button
									component={Link}
									to={"/bookshelf"}
									className={classes.button}
									endIcon={<CollectionsBookmarkIcon />}
								>
									<Typography>My Bookshelf</Typography>
								</Button>

								<Button
									component={Link}
									to={"/search"}
									className={classes.button}
									endIcon={<SearchIcon />}
								>
									<Typography>Search Books</Typography>
								</Button>
							</Grid>
						)}
						<Grid
							container
							xs={8}
							md={3}
							justify="flex-end"
							alignItems="center"
							spacing={1}
						>
							<SignInOut user={user} />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
