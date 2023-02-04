import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../redux/cartSlice'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { cartProducts } from './Cart'
import {FaShoppingCart} from 'react-icons/fa'
import {BsCardList} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'

export function ProductDetail() {
    const {id} = useParams();
    const[product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()

    function handleClick(product) {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return(
            <div className="flex justify-center items-center w-full h-auto my-5 bg-blue">
                <h1 className="text-white text-lg font-bold ">Loading... Please Wait</h1>
            </div>
        )
    }

    const ShowProduct = () => {
        return(
            <div className="px-2 pt-[70px] lg:pt-0 bg-blue flex flex-col items-center min-h-screen lg:flex-row min-w-[400px]">
                <div className="m-2 flex justify-center items-center lg:w-1/2">
                    <img src={product.image} alt={product.title} className="w-[267px] h-[339px] sm:w-[367px] sm:h-[439px]"/>
                </div>
                <div className="flex flex-col justify-center items-center m-2 w-[415px]">
                    <span className=" text-xl text-center font-bold my-3">{product.title}</span>
                    <span className="text-lg font-semibold mb-3">{product.category}</span>
                    <p className="text-center mb-1">{product.description}</p>
                    <span className="text-xl font-bold my-3">Price: ${product.price}</span>
                    <div className="flex w-full justify-evenly pb-10">
                        <button className="flex justify-center items-center px-1 mt-2 text-white w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all"
                            onClick={() => handleClick(product)}
                        >
                           <FaShoppingCart className='mr-2 pl-1'/> Add To Cart
                        </button>
                        <button className="flex justify-center items-center px-1 mt-2 text-white w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all">
                           <BsCardList className='mr-2 pl-1'/> Go To Cart
                        </button>
                        <button className="flex flex-row justify-center items-center px-1 mt-2 text-white w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all">
                            <AiOutlineArrowLeft className='mr-2 pl-1'/>
                            <Link to={'/products'}>
                                Go Back
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="w-full min-h-screen">
           {loading ? <Loading/> : <ShowProduct/>}
        </div>
    )
}

export default ProductDetail