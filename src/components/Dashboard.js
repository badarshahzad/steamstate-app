import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TrendingTable from "./TrendingTable";
import TopGamesTable from "./TopGamesTable";
import TopRecordsTable from "./TopRecordsTable";
import axios from "axios";

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

var data_trend;
var data_top;
var data_top_record;
class Dashboard extends React.Component {
  state = {
    open: true,
    dataTrending: null,
    dataTopGames: null,
    dataTopRecords: null
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    /**
     * GET Trending Games
     */
    axios
      .get("/api/v1/gamestats/trending")
      .then(res => {
        // data_trend = res.data.trending.reverse(); // sorted by highest current Player
        data_trend = res.data.trending;

        // console.log("Data which received is: " + JSON.stringify(data_trend));
      })
      .then(() => {
        this.setState({ dataTrending: data_trend });
      })
      .catch(err => console.log("Error no data come:" + err));

    /**
     * GET TOP Games
     */
    axios
      .get("/api/v1/gamestats/topgames")
      .then(res => {
        data_top = res.data.topgames;

        // console.log(
        //   "Data which received is for top games: " + JSON.stringify(data_top)
        // );
      })
      .then(() => {
        this.setState({ dataTopGames: data_top });
      })
      .catch(err => console.log("Error no data come:" + err));

    /**
     * GET Top Records Games
     */
    axios
      .get("/api/v1/gamestats/toprecords")
      .then(res => {
        data_top_record = res.data.top_records;

        // console.log(
        //   "Data which received is for top record games: " +
        //     JSON.stringify(data_top_record)
        // );
      })
      .then(() => {
        this.setState({ dataTopRecords: data_top_record });
      })
      .catch(err => console.log("Error no data come:" + err));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{ backgroundColor: "#111111" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
          style={{
            backgroundColor: "#111111",
            justifyContent: "center",
            alignItems: "center"
          }}
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
                noWrap
                className={classes.title}
                style={{
                  color: "#ffffff",
                  fontFamily: "Exo, sans-serif",
                  fontSize: "24px",
                  letterSpacing: "2px",
                  lineHeight: "32px",
                  textAlign: "start"
                }}
              >
                CHARTS
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                noWrap
                className={classes.title}
                style={{
                  color: "#aaaaaa",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: "16px",
                  letterSpacing: "normal",
                  lineHeight: "32px",
                  marginInlineStart: "32px",
                  fontStyle: "italic"
                }}
              >
                An ongoing analysis of Steam's concurrent players.
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div
            className={classes.appBarSpacer}
            style={{ justifyContent: "center" }}
          />

          {/* Trending Games Table */}
          <Typography
            variant="h4"
            gutterBottom
            component="h2"
            className="title"
            style={{
              color: "#888888",
              fontFamily: "Exo, sans-serif",
              fontSize: "24px",
              letterSpacing: "2px",
              lineHeight: "32px",
              textAlign: "start"
            }}
          >
            Trending
          </Typography>
          <div className={classes.tableContainer}>
            {/* {console.log("Data in set states is: " + this.state.dataTrending)} */}
            {/* <TrendingTable /> */}
            <TrendingTable data={this.state.dataTrending} />
          </div>

          {/* Top Games by current palyers */}

          <div style={{ flex: 1, flexDirection: "column", marginTop: 112 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="h2"
              className="title"
              style={{
                color: "#888888",
                fontFamily: "Exo, sans-serif",
                fontSize: "24px",
                letterSpacing: "2px",
                lineHeight: "32px",
                textAlign: "start"
              }}
            >
              Top Games By Current Players
            </Typography>
            {/* <TopGamesTable /> */}
            <TopGamesTable data={this.state.dataTopGames} />
          </div>

          {/* Top Records */}

          <div style={{ flex: 1, flexDirection: "column", marginTop: 32 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="h2"
              className="title"
              style={{
                color: "#888888",
                fontFamily: "Exo, sans-serif",
                fontSize: "24px",
                letterSpacing: "2px",
                lineHeight: "32px",
                textAlign: "start"
              }}
            >
              Top Records
            </Typography>
            <TopRecordsTable data={this.state.dataTopRecords} />
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
