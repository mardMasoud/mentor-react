export default function Receipe() {
  return (
    <div className="bg-[#f3e5d8] h-screen flex items-center justify-center  ">
      <div className="bg-white p-6 rounded-2xl w-[450px]">
        <img
          src="image-omelette.jpeg"
          alt=""
          className=" rounded-lg"
        />
        <h1 className="font-[600] text-xl my-5 font-youngserif tracking-normal">
          Simple Omelette Recipe
        </h1>
        <p className="text-[10px] font-light  font-outfit ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-[#fff8fc] mt-5">
          <h3 className="font-outfit">Preparation time</h3>
          <ul className="list-disc pl-6 text-[10px] font-outfit font-light">
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li> Cooking: 5 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
