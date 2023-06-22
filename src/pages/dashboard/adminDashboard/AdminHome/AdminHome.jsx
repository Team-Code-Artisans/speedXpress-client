import { useQuery } from "@tanstack/react-query";
import { getAllDeliveries } from "../../../../API Operations/manageAdminDeliveries";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Stats from "./Stats";

const AdminHome = () => {
  const {
    data: allParcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-parcels"],
    queryFn: () => getAllDeliveries(),
  });

  //   console.log(allParcels.data);

  // filtered data here
  const totalPendingDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "pending"
  )?.length;

  const totalCompletedDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "complete"
  )?.length;

  const totalInTransitDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "in-transit"
  )?.length;

  const totalReturnDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "return"
  )?.length;

  const deliveriesTimes = allParcels.data
    ?.filter((delivery) => delivery.status === "complete")
    .map((delivery) => delivery.date);

  const chargeAmount = allParcels.data
    ?.filter((delivery) => delivery.status === "complete")
    .map((delivery) => delivery.TotalchargeAmount);

  // console.log(deliveriesTimes, chargeAmount);
  // console.log(totalPendingDeliveries, totalCompletedDeliveries, totalInTransitDeliveries, totalReturnDeliveries);

  if (isLoading) {
    <BigSpinner />;
  }

  return (
    <div className="max-w-screen-2xl mx-auto py-10">
      <Stats
        totalPendingDeliveries={totalPendingDeliveries}
        totalCompletedDeliveries={totalCompletedDeliveries}
        totalInTransitDeliveries={totalInTransitDeliveries}
        totalReturnDeliveries={totalReturnDeliveries}
      />
      <div className="flex md:flex-row flex-col justify-evenly gap-10 items-center py-10">
        <LineChart
          deliveriesTimes={deliveriesTimes}
          chargeAmount={chargeAmount}
        />
        <PieChart
          totalPendingDeliveries={totalPendingDeliveries}
          totalCompletedDeliveries={totalCompletedDeliveries}
        />
      </div>
    </div>
  );
};

export default AdminHome;
