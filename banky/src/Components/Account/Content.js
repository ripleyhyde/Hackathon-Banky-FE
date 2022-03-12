import DATA from "./data";
import Moment from "moment";
import AddNew from "./AddNew";
import { FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import React, { useEffect, useMemo, useState } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  useEffect(() => {
    const expenses = data
      .filter((d) => d.type === 0)
      .map((i) => i.amount)
      .reduce((a, b) => a + b, 0);
    const revenue = data
      .filter((d) => d.type === 1)
      .map((i) => i.amount)
      .reduce((a, b) => a + b, 0);

    setIncome(revenue);
    setOutcome(expenses);
  }, [data]);

  useEffect(() => setData(DATA), []);
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((d) => d.id !== id));
  };
  const conditionalCellStyles = {
    conditionalCellStyles: [
      {
        when: (row) => row.type === 0,
        style: {
          backgroundColor: "#C1424219",
          color: "#1E331E",
        },
      },
      {
        when: (row) => row.type === 1,
        style: {
          backgroundColor: "#41BF3F19",
          color: "#1E331E",
        },
      },
    ],
  };
  const columns = useMemo(
    () => [
      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        ...conditionalCellStyles,
        format: (d) => {
          return Moment(d.date).local().format("DD-MM-YYYY hh:mm:ss a");
        },
        grow: 1.3,
        ...conditionalCellStyles,
      },
      {
        name: "Transaction Id",
        selector: (row) => row.id,
        sortable: true,
        ...conditionalCellStyles,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        ...conditionalCellStyles,
      },
      {
        name: "Note",
        selector: (row) => row.note,
        sortable: false,
        grow: 2,
        ...conditionalCellStyles,
      },

      {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
        ...conditionalCellStyles,
      },
      {
        name: "Balance",
        selector: (row) => row.balance,
        sortable: true,
        ...conditionalCellStyles,
      },
      {
        name: "Action",
        cell: (row) => (
          <button
            onClick={() => handleDelete(row.id)}
            className={`text-white cursor-pointer`}
          >
            <FaTrash />
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        ...conditionalCellStyles,
      },
    ],
    []
  );

  const addNewTransaction = (newData) => {
    const newDateSet = { ...newData };
    const balance = () => {
      const expenses = data
        .filter((d) => d.type === 0)
        .map((i) => i.amount)
        .reduce((a, b) => a + b, 0);
      const revenue = data
        .filter((d) => d.type === 1)
        .map((i) => i.amount)
        .reduce((a, b) => a + b, 0);
      const left = revenue - expenses;
      const a =
        newData.type === 1 ? left + newData.amount : left - newData.amount;
      console.log({ left, a, ...newData, am: newData.amount });
      return a;
    };

    newDateSet.balance = balance();

    setData((prev) => [newDateSet, ...prev]);
  };

  return (
    <div className="w-10/12 mx-auto pt-10">
      <div>
        <div className="bg">
          <h2 className="ch2">Account Statement</h2>
          <div>
            <AddNew addNewTransaction={addNewTransaction} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="names">
            <p className="p3">Incoming:{income}</p>
            <p className="p2">Outgoing:{outcome}</p>
            <p className="p1">Balance:{income - outcome}</p>
          </div>
        </div>
        <div className="t">
          <DataTable
            data={data}
            columns={columns}
            selectableRows={false}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
