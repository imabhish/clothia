
import { useSelector } from 'react-redux';
import Product from './Product';

import { getRandomProducts } from '../../utils/functions';

//const ProductSlider = ({ title, tagline }) => {
const Productnew = ({title}) => {

          
    const { products, loading} = useSelector((state) => state.products);



    return (
        
        <section className="bg-white w-full shadow overflow-hidden">
           
            {/* <!-- header --> */}
            <div className="flex px-6 py-4 justify-between items-center">
                <div className="title flex flex-col gap-0.5">
                    <h1 className="text-xl font-medium">{title}</h1>
                </div>
            </div>
            <hr />
            {loading ? null :
                <div  className="grid grid-cols-1 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
                    {products && getRandomProducts(products, 12).map((product) => (
                        <Product {...product} key={product._id} />
                    ))}
                </div>
            }

        </section>
    );
};

export default Productnew;
