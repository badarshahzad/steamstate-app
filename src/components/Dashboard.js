import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./ListItem";
import SimpleLineChart from "./SimpleLineChart";
import SmallLineChart from "./SmallLineChart";
import SimpleTable from "./SimpleTable";
import styled from "styled-components";
import { Title } from "../cssComponents/ComponenitWithCSS";
import TopGamesTable from "./TopGamesTable";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
    // width:1000
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{ backgroundColor: "#111111" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
          style={{ backgroundColor: "#111111" }}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography
                component="h1"
                variant="h6"
                // color="#888888"
                noWrap
                className={classes.title}
                style={{
                  color: "#888888",
                  fontFamily: "Exo, sans-serif",
                  fontSize: "24px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  lineHeight: "32px"
                }}
              >
                STEAM
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                // color="#888888"
                noWrap
                className={classes.title}
                style={{
                  color: "#ffffff",
                  fontFamily: "Exo, sans-serif",
                  fontSize: "24px",
                  // fontWeight: "bold",
                  letterSpacing: "2px",
                  lineHeight: "32px",
                  textAlign: "start"
                }}
              >
                CHARTS
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        {/* <Drawer
          variant="permanent"
          style={{backgroundColor:"#1a1a1a"}}
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
          
          
        >
          <div className={classes.toolbarIcon} style={{backgroundColor:"#1a1a1a"}} >
            <IconButton onClick={this.handleDrawerClose} style={{color:"white"}}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider style={{backgroundColor:"#1a1a1a"}}/>
          <List style={{backgroundColor:"#1a1a1a", color:"#aaaaaa"}}>{mainListItems}</List>
          <Divider style={{backgroundColor:"#1a1a1a"}}/>
          <List 
          
          style={{flex:1, flexDirection:'column',backgroundColor:"#1a1a1a", color:"#aaaaaa"}}>{secondaryListItems}</List>
        </Drawer> */}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography
            variant="h4"
            gutterBottom
            component="h2"
            className="title"
          >
            Orders
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>

          {/* Trending Games Table */}
          <Typography
            variant="h4"
            gutterBottom
            component="h2"
            className="title"
          >
            Trending
          </Typography>
          <div className={classes.tableContainer}>
            <SimpleTable />
          </div>

          {/* Top Games by current palyers */}

          <div style={{ flex: 1, flexDirection: "column", marginTop: 92 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="h2"
              className="title"
            >
              Top Games By Current Players
            </Typography>
            <TopGamesTable />
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
