import { useContext, useEffect, useState } from "react";
import { getAUser } from "../../../../API Operations/manageUsers";
import profile from "../../../../Assets/profile.png";
import { AuthContext } from "../../../../contexts/AuthProvider";
import BigSpinner from "../../../../components/Spinners/BigSpinner";
import AdminInfo from "./AdminInfo";

const AdminProfile = () => {

  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = () => {
    getAUser(user?.email)
      .then(result => {
        setIsLoading(false)
        setUserData(result)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUser()
  }, [user?.email]);

  // console.log(userData)

  if (isLoading) {
    return <BigSpinner />
  }

  return (
    <div className="w-full bg-gray-50">
      <section className="overflow-hidden w-[80%] mx-auto sm:grid sm:grid-cols-2 gap-6 sm:items-center">

        <AdminInfo userData={userData} fetchUser={fetchUser} />

        <img
          alt="Violin"
          src={profile}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default AdminProfile;
