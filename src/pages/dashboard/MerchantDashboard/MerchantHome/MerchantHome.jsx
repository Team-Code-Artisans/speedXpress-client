import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { getParcels } from "../../../../API Operations/manageParcels";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Announcement from "./Announcement";
import MerchantHeader from "./MerchantHeader";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

const MerchantHome = () => {
  const { user } = useContext(AuthContext);

  const {
    data: allParcels = [],
    isLoading,
  } = useQuery({
    queryKey: ["allParcels"],
    queryFn: () => getParcels(user?.email),
  });

  // filtered data here
  const pendingDeliveries = allParcels.filter(
    (delivery) => delivery.status === "pending"
  );
  const completedDeliveries = allParcels.filter(
    (delivery) => delivery.status === "complete"
  );
  const returnDeliveries = allParcels.filter(
    (delivery) => delivery.status === "return"
  );

  const totalPendingDeliveries = pendingDeliveries?.length;
  const totalCompletedDeliveries = completedDeliveries?.length;
  const totalReturnDeliveries = returnDeliveries?.length;

  const paidDeliveries = allParcels.filter(
    (delivery) => delivery.paid === true
  );
  const totalAmount = paidDeliveries.reduce(
    (total, delivery) => total + delivery.TotalchargeAmount,
    0
  );

  const totalPendingDeliveriesAmount = allParcels.filter(
    (delivery) => delivery.status === "pending"
  );
  const totalPendingAmount = totalPendingDeliveriesAmount.reduce(
    (total, delivery) => total + delivery.TotalchargeAmount,
    0
  );

  if (isLoading) {
    <BigSpinner />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <MerchantHeader />
      <Announcement />
      <OrderSummary
        totalPendingDeliveries={totalPendingDeliveries}
        totalCompletedDeliveries={totalCompletedDeliveries}
        totalReturnDeliveries={totalReturnDeliveries}
      />
      <PaymentSummary
        totalAmount={totalAmount}
        totalPendingAmount={totalPendingAmount}
      />
    </div>
  );
};

export default MerchantHome;
