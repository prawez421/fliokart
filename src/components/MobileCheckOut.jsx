import { MoveRight } from "lucide-react";
import mobileCategories from "../pages/forYou/components/mobileCategories";

function MobileCheckOut() {
  return (
    <section className="bg-[#ede9fe]  rounded-2xl p-5 my-6">

      {/* Heading */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold">
          Mobiles To Check Out
        </h2>

        <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800">
          <MoveRight size={28} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {mobileCategories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-52 object-contain hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-3 text-lg">
              {item.title}
            </h3>

            <p className="font-bold text-2xl">
              {item.subtitle}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default MobileCheckOut;