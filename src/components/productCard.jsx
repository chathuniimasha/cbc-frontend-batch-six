export default function ProductCard(props) {
  console.log(props);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h1 className="text-lg font-semibold text-gray-800">{props.name}</h1>
      <p className="text-md text-pink-600 font-bold mt-1 mb-4">Rs. {props.price}</p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg w-full font-medium transition-colors duration-300">
        View More
      </button>
    </div>
  );
}
