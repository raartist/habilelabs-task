import { Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    maxWidth: 720,
  },
  table: {
    minWidth: 700,
  },
  red: {
    backgroundColor: red[300],
  },

  text: {
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.TableHeadData.slice(0, 1).map((item, index) => (
                <TableCell key={index} align={index === 0 ? "left" : "right"}>
                  <b>{item.name}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.productCategories.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>
                  {index < 1 ? (
                    <TableHead>
                      <TableRow>
                        {props.TableHeadData.slice(1, 4).map((item, index) => (
                          <TableCell
                            key={index}
                            align={index === 0 ? "left" : "right"}
                          >
                            <b>{item.name}</b>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                  ) : null}

                  {props.rows
                    .filter((data) => {
                      return data.category === item;
                    })
                    .map((item2, index2) => (
                      <TableRow
                        key={index2}
                        className={item2.stocked === false ? classes.red : null}
                      >
                        <TableCell>{item2.name}</TableCell>
                        <TableCell>{item2.price}</TableCell>
                        <TableCell align="right">
                          {item2.stocked === true ? "Yes" : "No"}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.text}>
          <Typography>{`Total Categories ${props.productCategories.length} `}</Typography>
          <Typography>{`Total Items ${props.rows.length} `}</Typography>
        </div>
      </TableContainer>
    </div>
  );
}
