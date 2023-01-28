import React, { useState, useEffect } from 'react';

function Products () {
    const [ data, setData ] = useState([]);
    const [ filter, setFilter ] = useState(data);
    const [ loading, setLoading ] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return(
            <div className="flex justify-center items-center w-full h-auto my-5 bg-blue">
                <h1 className="text-white text-lg font-bold ">Loading... Please Wait</h1>
            </div>
        )
    }

    const filterProduct = (filterCategory) => {
        const updatedData = data.filter((product) => product.category === filterCategory);
        setFilter(updatedData)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='mx-auto py-5 flex justify-around w-[382px]'>
                    <span 
                        href='' 
                        onClick={() => setFilter(data)}
                        className="text-gold  after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold cursor-pointer"
                    >All</span>
                    <span 
                        href=''
                        onClick={() => filterProduct('jewelery')} 
                        className="text-gold  after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold cursor-pointer"
                    >Jewelery</span>
                    <span 
                        href='' 
                        onClick={() => filterProduct('electronics')}
                        className="text-gold  after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold cursor-pointer"
                        >Electronic</span>
                </div>
                <div className='mx-auto pb-5 flex justify-evenly w-[382px]'>
                    <span 
                        href=''
                        onClick={() => filterProduct("men's clothing")}
                        className="text-gold  after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold cursor-pointer"
                    >Men's Clothing</span>
                    <span 
                        href=''
                        onClick={() => filterProduct("women's clothing")}
                        className="text-gold  after:content-[''] after:block after:rounded-2xl after:h-[2px] after:w-0 after:mx-auto after:duration-300 after:hover:w-full after:bg-gold cursor-pointer"
                    >Women's Clothing</span>
                </div>
                <div className="w-full mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" >
                    {filter.map((product) => {
                        return(
                        <div key={product.id} className="my-1.5 mx-2 lg:my-3 sm:mx-1 lg:mx-3 bg-white rounded-lg h-[500px] flex flex-col justify-center items-center" >
                            <img src={product.image} alt={product.title} height={350} className="rounded-lg h-[350px] px-2" />
                            <p className="px-1 text-center font-bold">{product.title}</p>
                            <span className="font-bold">${product.price}</span>
                            <a href='' className="flex justify-center items-center mt-2 text-white w-[80px] h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all">Details</a>
                        </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return(
        <div className='w-full bg-blue min-h-screen'>
            <div className="w-full">
                {/* {loading ? <Loading /> : <ShowProducts />} */}
                <ShowProducts />
            </div>
        </div>
    )
}

export default Products