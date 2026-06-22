import React from "react";
import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Element/Card";
import CardBalance from "../component/Fragment/CardBalance";
import CardGoal from "../component/Fragment/CardGoal";
import CardUpcomingBill from "../component/Fragment/CardUpcomingBill";
import CardRecentTransaction from "../component/Fragment/CardRecentTransaction";
import CardStatistics from "../component/Fragment/CardStatistics";
import CardExpenseBreakdown from "../component/Fragment/CardExpenseBreakdown";
import {transactions, bills, expensesBreakdowns, balances, goals, expensesStatistics,} from "../data";

function dashboard() {
console.log(transactions);

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
            <CardUpcomingBill data={bills}/>
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions}/>
          </div>
          <div className="sm:col-span-8">
            <CardStatistics data={expensesStatistics}  />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default dashboard;
