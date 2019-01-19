import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { style } from "../styles/styles";
import SmallLineChart from "./SmallLineChart";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700,
    backgroundColor: "#1a1a1a"
  }
};

let id = 0;
function createData(name, last24Hours, last48Hours, currentPlayer) {
  id += 1;
  return { id, name, last24Hours, last48Hours, currentPlayer };
}

const dataSample = [
  createData("HITMAN™ 2", "+7569.7%", 6.0, 52100),
  createData("Miscreated", "+241.3%", 9.0, 4543),
  createData("The Talos Principle", "+238.3%", 16.0, 2321),
  createData("Bloons TD 6", "+107.7%", 3.7, 733),
  createData("Kingdom Rush Origins", "+93.5%", 16.0, 233)
];

class SimpleTable extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className="titleBold" align="left">
                Name{" "}
              </TableCell>
              <TableCell className="titleBold" align="center">
                24-hour Change
              </TableCell>
              <TableCell className="titleBold" align="center">
                Last 48 Hours
              </TableCell>
              <TableCell className="titleBold" align="center">
                Current Player
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data != null &&
              data.map((n, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      style={{ color: "white", borderColor: "#111111" }}
                    >
                      {n.game_title}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        color: "#48a71f",
                        borderColor: "#111111",
                        fontWeight: "bold"
                      }}
                    >
                      {n.change_24_hr.toFixed(1) + "%"}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: 200,
                        height: 70,
                        color: "#48a71f",
                        borderColor: "#111111"
                      }}
                    >
                      {/* {n.last48Hours} */}
                      <SmallLineChart data={n.change_48_hr} />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ color: "#aaaaaa", borderColor: "#111111" }}
                    >
                      {n.current_players}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
