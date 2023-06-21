import { useQuery } from "@tanstack/react-query";
import { getAllDeliveries } from "../../../../API Operations/manageAdminDeliveries";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Stats from "./Stats";

const AdminHome = () => {
//   const [filterData, setFilterData] = useState([]);

  const {
    data: allParcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-parcels"],
    queryFn: () => getAllDeliveries(),
  });

//   console.log(allParcels.data);
//   console.log(filterData);

  // filtered data here
  const pendingDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "pending"
  );
  const completedDeliveries = allParcels.data?.filter(
    (delivery) => delivery.status === "complete"
  );

  const totalPendingDeliveries = pendingDeliveries?.length;
  const totalCompletedDeliveries = completedDeliveries?.length;
  
  // console.log(totalPendingDeliveries);
  // console.log(totalCompletedDeliveries);

//   useEffect(() => {
//     const result = allParcels.data?.filter((parcel) => {
//       // const filter = parcel?._id?.toLowerCase()?.match(search?.toLowerCase()) || parcel?.customerInfo.email?.toLowerCase()?.match(search?.toLowerCase()) ||
//       //   parcel?.customerInfo.name?.toLowerCase()?.match(search?.toLowerCase()) ||
//       //   parcel?.customerInfo.number?.toLowerCase()?.match(search?.toLowerCase())
//       return;
//     });
//     setFilterData(result);
//   }, [allParcels]);

if (isLoading) {
    <BigSpinner/>
}

  return (
    <div className="max-w-screen-2xl mx-auto py-10">
      <Stats totalPendingDeliveries={totalPendingDeliveries} totalCompletedDeliveries={totalCompletedDeliveries}/>
      <div className="flex md:flex-row flex-col justify-evenly gap-10 items-center py-10">
        <LineChart />
        <PieChart totalPendingDeliveries={totalPendingDeliveries} totalCompletedDeliveries={totalCompletedDeliveries} />
      </div>
    </div>
  );
};

export default AdminHome;
