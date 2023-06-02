import LineChart from './LineChart';
import PieChart from './PieChart';
import Stats from './Stats'

const AdminHome = () => {
    return (
        <div className='max-w-screen-2xl mx-auto py-10'>
            <Stats />
            <div className='flex md:flex-row flex-col justify-evenly gap-10 items-center py-10'>
                <LineChart />
                <PieChart />
            </div>
        </div>
    );
};

export default AdminHome;