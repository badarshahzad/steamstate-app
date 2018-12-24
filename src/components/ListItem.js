import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className="title">Dashboard</Typography>}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className="title">Orders</Typography>}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className="title">Customers</Typography>}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className="title">Reports</Typography>}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography className="title">Integrations</Typography>}
      />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div >
    <ListSubheader inset className="title" style={{ fontWeight: "bold" }}>
      Furhur reports
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText 
      primary={<Typography className="title">Current month</Typography>}
       />
    </ListItem>
  </div>
);
