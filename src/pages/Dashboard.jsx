import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import data from '../assets/data.json';
import AreaCard from '../components/AreaCard';

const Dashboard = () => {
  console.log(data);

  return (
    <div className="container bg-[#f8f8fd]">
      <div class="h-80 bg-fuchsia-500 pt-14 flex flex-col gap-2 pl-3">
        <div className="flex gap-4 items-center">
          <img
            alt="name"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            className=" w-16 h-16 rounded-full border-8 border-[#c131f3]"
          />
          <div className="text-white font-semibold">
            <h2 className="text-lg font-bold">Daniel</h2>
            <p className="text-xs">Marketing Officer</p>
          </div>
        </div>

        <ScrollMenu onWheel={onWheel}>
          {data[0].features.map((feature, index) => {
            console.log(index);
            return (
              <div
                id={index}
                className={`flex flex-col w-40 h-32 m-2 p-4 relative rounded-md cursor-pointer ${
                  index ? 'bg-[#bfccff]' : 'bg-[#d1c8ff]'
                }`}
              >
                <i
                  className={`${
                    index
                      ? 'fa-solid fa-dollar-sign text-2xl'
                      : 'fa-solid fa-phone-volume'
                  } mb-auto text-xl text-[#ca33ff]`}
                />
                <p className="text-[0.7rem] font-semibold">{feature.details}</p>
                <p className="font-semibold"> {feature.pricing}</p>
                <i class="fa-solid fa-circle-arrow-right text-white text-lg absolute bottom-4 right-4" />
              </div>
            );
          })}
        </ScrollMenu>
      </div>
      <div class="h-[450px] overflow-scroll pl-4 rounded-t-3xl bg-white mt-[-25px]">
        <div className="pt-6">
          <div>
            <h2 className="text-lg font-semibold h-6">Area</h2>
            <div className="w-8 border-t-4 border-blue-500"></div>
          </div>
          <ScrollMenu onWheel={onWheel}>
            {data[0].area.map((area, index) => {
              return <AreaCard percentage={area.percentage} text={area.name} />;
            })}
          </ScrollMenu>

          <div></div>
        </div>
        <div className="flex items-center justify-between my-6">
          <div>
            <h2 className="text-lg font-semibold h-6">What's up Today?</h2>
            <div className="w-8 border-t-4 border-blue-500"></div>
          </div>
          <p className="text-blue-500 text-xs font-semibold mr-6">View All</p>
        </div>
        {data[0].agenda.map((agenda, index) => {
          return (
            <div className="relative flex  my-3 text-sm font-semibold border-slate-200 border-b-2 pb-3 mr-4">
              <div
                className={`h-10 w-[6px] inline-block rounded-xl ${
                  agenda.priority == 'high' ? 'bg-[#7b61ff]' : 'bg-[#17b958]'
                }`}
              ></div>
              <div className="ml-2">
                <h2>{agenda.title}</h2>
                <p className="font-normal">{agenda.time}</p>
              </div>
              <i class="fa-solid fa-ellipsis-vertical absolute text-lg top-2 right-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default Dashboard;
