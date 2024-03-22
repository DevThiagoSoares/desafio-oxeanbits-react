import { useState } from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { Input } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-default/dist/all.css";
import { State, process } from "@progress/kendo-data-query";
import { Columns, TableProps } from "./interface";
import React from "react";
const initialDataState: State = {
  take: 0,
  skip: 0,
};

export const TableGrid = (props: TableProps) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState(props.rows);
  const [dataState] = useState<State>(initialDataState);

  const [dataResult, setDataResult] = useState(
    process(filteredData, dataState)
  );

  const onFilterChange = (ev: any) => {
    let value = ev.value;
    setFilterValue(ev.value);
    let newData = props.rows.filter((item: any) => {
      let match = false;
      for (const property in item) {
        if (
          item[property]
            .toString()
            .toLocaleLowerCase()
            .indexOf(value.toLocaleLowerCase()) >= 0
        ) {
          match = true;
        }

        if (
          item[property].toLocaleDateString &&
          item[property].toLocaleDateString().indexOf(value) >= 0
        ) {
          match = true;
        }
      }
      return match;
    });
    setFilteredData([]);
    let clearedPagerDataState = { ...dataState, take: 8, skip: 0 };
    let processedData = process(newData, clearedPagerDataState);
    processedData.data = processedData.data.map((item) => ({
      ...item,
    }));
    setDataResult(processedData);
  };

  return (
    <Grid
      style={{
        height: "90vh",
      }}
      {...dataState}
      data={dataResult}
    >
      <GridToolbar>
        <Input
          value={filterValue}
          onChange={onFilterChange}
          style={{
            border: "2px solid #ccc",
            boxShadow: "inset 0px 0px 0.5px 0px rgba(0,0,0,0.0.1)",
            width: "270px",
            height: "30px",
            marginRight: "10px",
          }}
          placeholder="Filter"
        />
      </GridToolbar>
      {props.columns.map((item: Columns, idx) => {
        if (item.field === "image") {
          return (
            <Column
              key={idx}
              field={item.field}
              title={item.title}
              cell={(props) => (
                <td
                >
                  <img
                    src={props.dataItem[item.field]}
                    alt="Imagem"
                  />
                </td>
              )}
            />
          );
        } else {
          return <Column {...item} key={idx} />;
        }
      })}
    </Grid>
  );
};
