import { Divider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { fetchApiData } from "./actions";
import "./App.css";
import BasicTable from "./Modules/Components/DisplayTable";
import { addLoader, removeLoader } from "./utils/Utils";

function App(props) {
  const ApiData = props.data;

  //storing unique categories separately
  const makeUnique = () => {
    if (ApiData !== undefined) {
      const unique = new Set();
      for (const object of ApiData) {
        unique.add(object.category);
      }
      return Array.from(unique);
    }
  };

  React.useEffect(() => {
    props.dispatch(fetchApiData());
  }, []);

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <Divider />
      {ApiData !== undefined ? (
        <>
          <BasicTable
            TableHeadData={TableHeadData}
            rows={ApiData}
            productCategories={makeUnique()}
          />
          {removeLoader()}
        </>
      ) : (
        addLoader()
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(App);

const TableHeadData = [
  {
    name: "Category",
  },
  {
    name: "Name",
  },
  {
    name: "Price",
  },
  {
    name: "In Stock",
  },
];
