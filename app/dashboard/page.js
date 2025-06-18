

import TopLocation from "../Components/TopLocation";
import InfoCards from "../Components/InfoCards";
// import CustomBarChart from "../Components/CustomBarChart";
import CoursesCards from "../Components/CoursesCards";
import QuickMessageList from "../Components/QuickMessageList";
import CustomBarChart from "../Components/CustomBarChartWrapper";
import DynamicWrapper from "../Components/DynamicWrapper";

export default  function Page(){
    return (
    <DynamicWrapper>
    <div className={`relative h-auto bg-base100 flex items-center justify-center flex-col `}>

        <div className="relative p-2 flex flex-col gap-3 ">
            <div><InfoCards/></div>
            <div className="flex  justify-between w-full h-auto gap-2.5">
                    <CustomBarChart/>
                    <TopLocation/>
            </div>
            <div className="flex  justify-between w-full h-auto gap-2.5">
                <CoursesCards/>
                <QuickMessageList/>
            </div>
        </div>
    </div>
    </DynamicWrapper>)
}
