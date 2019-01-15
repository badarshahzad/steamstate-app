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
function createData(name, peekPlayers, time, last48Hours) {
  id += 1;
  return { id, name, peekPlayers, time, last48Hours };
}

const data = [
  createData(
    "PLAYERUNKNOWN'S BATTLEGROUNDS",
    "529,305",
    "Oct, 2018",
    "326,072,128"
  ),
  createData("Dota 2", "373,188", "Nov, 2018", "320,915,067"),
  createData(
    "Counter-Strike: Global Offensive",
    "221,553 ",
    "Dec, 2018",
    "270,159,786"
  ),
  createData(
    "Tom Clancy's Rainbow Six Siege",
    "58,359",
    "Jan, 2019",
    "47,360,339"
  )
  //   createData("Warframe", "50,941", "89,029", "38,659,351"),
  //   createData("Grand Theft Auto V", "44,645", "106,200,34", "717,541"),
  //   createData("Team Fortress", "42,233", "14135", "238,257"),
  //   createData("MONSTER HUNTER: WORLD", "41,884", "93,833", "25,486", "233"),
  //   createData("Path of Exile", "39,219", "123,462", "30,611,994"),
  //   createData("Rust", "35,279", "70,775", "28,947", "505")
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className="titleBold" align="left">
              Name{" "}
            </TableCell>
            <TableCell className="titleBold" align="center">
              Peak Players
            </TableCell>
            <TableCell className="titleBold" align="center">
              Time
            </TableCell>
            <TableCell className="titleBold" align="center">
              Last 48 Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  style={{ color: "white", borderColor: "#111111" }}
                >
                  {n.name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: "#48a71f",
                    borderColor: "#111111",
                    fontWeight: "bold"
                  }}
                >
                  {n.peekPlayers}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#aaaaaa", borderColor: "#111111" }}
                >
                  {n.time}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: 300,
                    height: 70,
                    color: "#48a71f",
                    borderColor: "#111111"
                  }}
                >
                  {/* Last 48 Hours data */}
                  <SmallLineChart />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
