import { useGetProductsQuery } from "@/app/redux/features/products/productApi";
import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import QuickView from "../popup/QuickView";
import { PriceFormatter } from "@/app/utils/formatPrice";
import AddToWhislist from "../ShopComponents/AddToWhislist";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
const ProductsContent = ({ currentCategory }) => {
  const [categoryProducts, setCategoryProducts] = useState(false);
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [productView, setProductView] = useState(null);
  const { data, isLoading } = useGetProductsQuery(
    { page: page, limit: null, category: currentCategory },
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.totalPages) {
      setProducts((prev) => {
        if (prev && !categoryProducts) {
          if (prev !== data.products) {
            return [...prev, ...data.products];
          } else {
            return prev;
          }
        } else {
          setCategoryProducts(false);
          return data.products;
        }
      });
      if (data.totalPages === page) {
        setLoadMore(false);
      } else {
        setLoadMore(true);
      }
    }
    if (data && !data.totalPages) {
      setCategoryProducts(true);
      setProducts(data.products);
      setPage(1);
    }
  }, [data]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, productQty: 1 }));
  };

  return (
    <div className="">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-5  gap-4 ">
        {products ? (
          products.map((product, index) => (
            <div key={index}>
              <Link href={`/product/${product._id}`}>
                <img
                  src={product.image.url}
                  alt="png"
                  className=" object-fill  sm:h-[180px] w-[100%] h-[150px]"
                />
              </Link>
              {cartItems?.findIndex((item) => item._id === product._id) >= 0 ? (
                <Link href={"/cart"} className="cursor-pointer">
                  <div className="mt-3 text-[14px] sm:text-lg font-semibold ">
                    VIEW IN CART
                  </div>
                  <div className="sm:w-[102px] w-[75px] h-[1.4px] bg-black"></div>
                </Link>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="mt-3 text-[14px] sm:text-lg font-semibold ">
                    ADD TO CART
                  </div>
                  <div className="sm:w-[102px] w-[75px] h-[1.4px] bg-black"></div>
                </div>
              )}

              <div className="text-cBase text-sm sm:text-[11px] mt-1">
                {product.category}
              </div>
              <Link
                href={`/product/${product._id}`}
                className="text-[16px]  font-medium max-w-[160px]"
              >
                {product.name}
              </Link>
              <div>
                <Rating readOnly value={3} size="small" />
              </div>
              <div className="sm:flex-between flex items-center justify-start gap-4">
                <div className="font-semibold text-[16px] ">
                  {PriceFormatter(product.price)}
                </div>
                <div className="flex-center gap-1 sm:gap-2  sm:pr-4">
                  <Link href={`/product/${product._id}`}>
                    <FaEye
                      title="Quick View"
                      className="sm:w-5 sm:block hidden sm:h-5 w-3 h-3 cursor-pointer"
                      // onClick={() => setProductView(product)}
                    />
                  </Link>
                  <AddToWhislist product={product} QuickView={false} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full font-semibold flex-center">
            <span>No Products Found</span>
          </div>
        )}
      </div>

      <div className={`w-full flex-center `}>
        {isLoading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#6B7280"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <div
            className={`${!loadMore && "hidden"} ${
              categoryProducts && "hidden"
            } bg-white mt-12 px-6 py-3 border font-medium  cursor-pointer border-black`}
            onClick={() => setPage(page + 1)}
          >
            Load More...
          </div>
        )}
      </div>
      {/* product quick view */}
      {productView && (
        <QuickView product={productView} setProductView={setProductView} />
      )}
    </div>
  );
};

export default ProductsContent;
