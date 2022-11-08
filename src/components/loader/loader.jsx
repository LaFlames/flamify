import { loader } from '../../assets';

const Loader = ({ title }) => (
  <div className="w-full h-[100vh] flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-35 h-35 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">{title}</h1>
  </div>
);

export default Loader;
