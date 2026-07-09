import React, { useState, useContext, useEffect } from "react";
import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Element/Card";
import CardBalance from "../component/Fragment/CardBalance";
import CardGoal from "../component/Fragment/CardGoal";
import CardUpcomingBill from "../component/Fragment/CardUpcomingBill";
import CardRecentTransaction from "../component/Fragment/CardRecentTransaction";
import CardStatistics from "../component/Fragment/CardStatistics";
import CardExpenseBreakdown from "../component/Fragment/CardExpenseBreakdown";
import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics,
} from "../data";
import { goalService, billService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../component/Element/AppSnackbar";

function dashboard() {
  const [goals, setGoals] = useState({});
  const [billsData, setBillsData] = useState([]);
  const [isBillsLoading, setIsBillsLoading] = useState(true);
  const { logout } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  const fetchBills = async () => {
    try {
      setIsBillsLoading(true);
      const data = await billService();
      // Pastikan mengekstrak data dari response array
      setBillsData(data.data || data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data bills",
        severity: "error",
      });
      if (err.status === 401) logout();
    } finally {
      setIsBillsLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills();
  }, []);

  console.log(goals);
  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={billsData} isLoading={isBillsLoading} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistics data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default dashboard;
