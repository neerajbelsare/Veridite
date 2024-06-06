export const Home = () => {
    return (
        <div className="w-full flex flex-col gap-4">
                  <span className="text-left text-lg font-semibold text-white">
                    Recent Conversations
                  </span>
            <div
                className="w-full overflow-x-scroll scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin md:overflow-auto max-w-xl xs:max-w-xl sm:max-w-xl md:max-w-7xl 2xl:max-w-none mt-1">
                <table
                    className="table-auto overflow-scroll text-white md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1.5">
                    <thead className="bg-dark-200 rounded-lg text-base text-white font-semibold w-full">
                    <tr className="">
                        <th className="py-3 pl-3 text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg">
                            Name
                        </th>
                        <th className="py-3 pl-2 text-base sm:text-sm font-normal whitespace-nowrap">
                            Date Created
                        </th>
                        <th className="py-3 pl-2 text-base sm:text-sm font-normal whitespace-nowrap">
                            Last Payment
                        </th>
                        <th className="py-3 pl-2 text-base sm:text-sm font-normal whitespace-nowrap  rounded-r-lg">
                            Link
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{TableData.map((data, index) => (*/}
                    {/*    <tr*/}
                    {/*        key={index}*/}
                    {/*        className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]"*/}
                    {/*    >*/}
                    {/*        <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">*/}
                    {/*            <div className="relative flex gap-3 items-center">*/}
                    {/*                <div className="">*/}
                    {/*                    <img*/}
                    {/*                        src={data?.image}*/}
                    {/*                        alt="hepta-brown"*/}
                    {/*                        className="min-w-[42px] min-h-[42px]"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="flex flex-col whitespace-nowrap">*/}
                    {/*              <span className="text-xs md:text-sm text-[#212B36]">*/}
                    {/*                {data?.title}*/}
                    {/*              </span>*/}
                    {/*                    <span className="text-xs md:text-sm text-[#637381] mt-1">*/}
                    {/*                {data?.description}*/}
                    {/*              </span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">*/}
                    {/*            {data.account}*/}
                    {/*        </td>*/}
                    {/*        <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">*/}
                    {/*            {data.payment}*/}
                    {/*        </td>*/}
                    {/*        <td*/}
                    {/*            className={`py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20`}*/}
                    {/*        >*/}
                    {/*            {data.balance}*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                    </tbody>
                </table>
            </div>
        </div>);
}