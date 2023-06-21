import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getParcels } from "../../../../API Operations/manageParcels";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Announcement from "./Announsment";
import DeliverySummary from "./DeliveriesSummary";
import EarningSummary from "./EarningSummary";
import EmployeeHeader from "./EmployeeHeader";

export const EmployeeHome = () => {
  const { user } = useContext(AuthContext);

  const {
    data: allParcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allParcels"],
    queryFn: () => getParcels(user?.email),
  });
  //   console.log(allParcels);

  // filtered data here
  const pendingDeliveries = allParcels.filter(
    (delivery) => delivery.status === "pending"
  );
  const completedDeliveries = allParcels.filter(
    (delivery) => delivery.status === "complete"
  );

  const totalPendingDeliveries = pendingDeliveries?.length;
  const totalCompletedDeliveries = completedDeliveries?.length;
  console.log(totalPendingDeliveries, totalCompletedDeliveries);

  const paidDeliveries = allParcels.filter(
    (delivery) => delivery.paid === true
  );
  const totalAmount = paidDeliveries.reduce(
    (total, delivery) => total + delivery.TotalchargeAmount,
    0
  );
  console.log(totalAmount);

  const totalPendingDeliveriesAmount = allParcels.filter(
    (delivery) => delivery.status === "pending"
  );
  const totalPendingAmount = totalPendingDeliveriesAmount.reduce(
    (total, delivery) => total + delivery.TotalchargeAmount,
    0
  );
  console.log(totalPendingAmount);

  if (isLoading) {
    <BigSpinner />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <EmployeeHeader />
      <Announcement />
      <DeliverySummary
        totalPendingDeliveries={totalPendingDeliveries}
        totalCompletedDeliveries={totalCompletedDeliveries}
      />
      <EarningSummary
        totalAmount={totalAmount}
        totalPendingAmount={totalPendingAmount}
      />
    </div>
  );
};
