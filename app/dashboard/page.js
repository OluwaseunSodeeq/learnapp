import TopLocation from "../Components/TopLocation";
import InfoCards from "../Components/InfoCards";
import CustomBarChart from "../Components/CustomBarChart";

export default  function Page(){
    return (
    <div className=" relative h-auto bg-base100 flex items-center justify-center flex-col">

        <div className="relative p-2 flex flex-col gap-3 border ">
            <div><InfoCards/></div>
            <div className="flex  justify-between w-full h-auto gap-2.5 bg-base100 shadow-xl rounded-[6px]">
                    <CustomBarChart/>
                    <TopLocation/>
            </div>
            <div className="w-full h-[600px] bg-error">Bottom</div>
        </div>
    </div>)
}
