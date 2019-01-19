import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SmallLineChart from "./SmallLineChart";
import ReactPaginate from "react-paginate";

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

    this.state = {
      items: null,
      moreItems: null,
      pageCount: 2,
      pagginationVisible: null,
      tableData: null
    };

    this.onReceive = this.onReceive.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  onReceive(data) {
    // TODO: when data receive for data we have to judge how many pages
    return; //intentionally

    if (!data) {
      const table_Data = null;
      // Made the card items and Pagination logic to spread data in pages
      console.log("JSON objec is: " + JSON.stringify(data));
      if (data != null) {
        table_Data =
          data != null &&
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
          });
      }

      // if (data.length <= 10) {
      // this.setState({
      //   tableData: table_Data,
      //   pagginationVisible: false
      //   // pageCount: Math.ceil(data.length / 10)
      // });
      // }

      // if (data.length >= 10) {
      //   this.setState({
      //     moreItems: table_Data,
      //     pagginationVisible: true,
      //     pageCount: Math.ceil(data.length / 10)
      //   });

      //   this.handlePageClick({ selected: 0 }); // Will show only first 10 elements
      // } else {
      //   this.setState({
      //     tableData: null,
      //     moreItems: null,
      //     pagginationVisible: false,
      //     pageCount: 0
      //   });
      // }
    }
  }

  handlePageClick(data) {
    //TODO: Pagination click logic
    return; //intentionally

    // Pagination logic for click
    var index = data.selected;
    var limit = index + 1 + "0"; // converted 0 to 1 and make it 10
    console.log("Limit is : " + limit);

    index === 0 ? (index = 0) : (index = index + 10); // start from next time 10 index

    const table_Data_rows = [];
    var count = 10;
    for (
      var a = index, b = 1;
      b < this.state.moreItems.length || b === count;
      a++, b++
    ) {
      table_Data_rows.push(this.state.moreItems[a]);
      console.log("Index is:" + b);

      if (b === 10) {
        this.setState({ tableData: table_Data_rows });
        return;
      }
    }
  }

  render() {
    const { classes, data } = this.props;
    console.log("Data type is: 2 " + typeof data);

    return (
      <div>
        //TODO: Pagination logic needs to be added
        {/* {this.state.pagginationVisible === true ? ( */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            minWidth: 500
          }}
        >
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        {/* ) : null} */}
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
              {data != null && console.log("Data length is: " + data.length)}
              {/* {data != null && data.length > 10
                ? this.setState({ pagginationVisible: true })
                : this.setState({ pagginationVisible: false })} */}
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
                        {n.change_24_hr.toFixed(2) + "%"}
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
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object
};

export default withStyles(styles)(SimpleTable);
