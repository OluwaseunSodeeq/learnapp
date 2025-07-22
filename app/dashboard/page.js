

import TopLocation from "../Components/TopLocation";
import InfoCards from "../Components/InfoCards";
// import CustomBarChart from "../Components/CustomBarChart";
import CoursesCards from "../Components/CoursesCards";
import QuickMessageList from "../Components/QuickMessageList";
import CustomBarChart from "../Components/CustomBarChartWrapper";
import DynamicWrapper from "../Components/DynamicWrapper";
import Wrapper from "../Components/Wrapper";

export default  function Page(){
    return (
    <DynamicWrapper>
    <Wrapper>
    <div className={`relative w-full h-auto pb-3 bg-base100 flex items-center justify-center flex-col`}>

        <div className="w-full p-2 flex md:justify-center flex-col gap-3 ">
            <div><InfoCards/></div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full h-auto gap-2.5">
                    <CustomBarChart/>
                    <TopLocation/>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between  w-full h-auto gap-2.5">
                <CoursesCards/>
                <QuickMessageList/>
            </div>
        </div>
        <div className="fixed bottom-0 left-[18rem] right-0 z-20 bg-base100 px-4 py-2">
                {/* <CoursesFooter data={data} /> */}
        </div>
    </div>
    </Wrapper>
    </DynamicWrapper>)
}
