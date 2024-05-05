import { LuClock10 } from "react-icons/lu";
import Image from "../../assets/LatestImage.png";

const SideBar2 = () => {
  return (
    <div className="bg-[#FAFAFA] py-6 px-2 lg:px-6 my-12">
        <h1 className="font-bold">Latest Posts</h1>
        <div className="p-2 relative">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}></div>
            <div style={{ position: 'absolute', inset: '0', content: '""', backgroundColor: 'rgba(0, 0, 0, 0.52)' }}></div>
            <div className="relative z-10 text-white">
                <p className="font-bold p-2">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>
                <div className="lg:flex items-center justify-between p-2">
                    <div>January 15, 2024</div>
                    <div className="flex items-center">
                        <LuClock10 className="mr-2" />
                        <p>2 minutes ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 bg-white p-2">
            <p className="font-bold p-2">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>
            <div className="lg:flex items-center justify-between p-2">
                <div>January 15, 2024</div>
                <div className="flex items-center">
                    <LuClock10 className="mr-2" />
                    <p>2 minutes ago</p>
                </div>
            </div>
        </div>
        <div className="mt-4 bg-white p-2">
            <p className="font-bold p-2">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>
            <div className="lg:flex items-center justify-between p-2">
                <div>January 15, 2024</div>
                <div className="flex items-center">
                    <LuClock10 className="mr-2" />
                    <p>2 minutes ago</p>
                </div>
            </div>
        </div>
        <div className="mt-4 bg-white p-2">
            <p className="font-bold p-2">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>
            <div className="lg:flex items-center justify-between p-2">
                <div>January 15, 2024</div>
                <div className="flex items-center">
                    <LuClock10 className="mr-2" />
                    <p>2 minutes ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar2