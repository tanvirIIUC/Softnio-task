import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import CardModal from "./CardModal";


const Card = () => {
    //// Data
    const cardDetails = {
        title: "Classy Modern Smart watch",
        rating: "3",
        review: 4,
        mainPrize: 99.00,
        discountPrize: 79.00,
        description: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
        type: "Watch",
        modelNumber: "Forerunner 290XT",
        bandColor: [
            {
                image: img1,
                color: "#816BFF",
                colorName: "Purple",
                itemName: "Classy Modern Smart watch"
            },
            {
                image: img2,
                color: "#1FCEC9",
                colorName: "Black",
                itemName: "Classy Modern Smart watch"
            },
            {
                image: img3,
                color: "#4B97D3",
                colorName: "Blue",
                itemName: "Classy Modern Smart watch"
            },
            {
                image: img4,
                color: "#3B4747",
                colorName: "Cyan",
                itemName: "Classy Modern Smart watch"
            }
        ],
        wristSize: [
            {
                size: "S",
                prize: 69.00
            },
            {
                size: "M",
                prize: 79.00
            },
            {
                size: "L",
                prize: 89.00
            },
            {
                size: "XL",
                prize: 99.00
            },
        ],

    }
    //

    const [selectedImage, setSelectedImage] = useState(img1);
    const [selectedColor, setSelectedColor] = useState(cardDetails?.bandColor[0].color);
    const [colorName, setColorName] = useState(cardDetails?.bandColor[0].colorName);
    const [selectedPrize, setSelectedPrize] = useState(cardDetails?.wristSize[0].prize);
    const [selectedSize, setSelectedSize] = useState(cardDetails?.wristSize[0].size);
    const [selectedItemName, setSelectedItemName] = useState(cardDetails?.title);
    const [itemCount, setItemCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [checkoutDetails, setCheckoutDetails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleLikeToggle = () => {
        setIsLiked(prevState => !prevState);
    };
    const handleDecrease = () => {
        if (itemCount > 0) {
            setItemCount(prev => prev - 1);
        }
    };

    /// handle add items
    const handleAddToCard = () => {
        const item = {
            itemName: selectedItemName,
            itemImage: selectedImage,
            color: colorName,
            size: selectedSize,
            count: itemCount,
            totalPrize: itemCount * selectedPrize

        }
        setCheckoutDetails(prev => {

            const existingItemIndex = prev.findIndex(
                existingItem => existingItem.color === colorName && existingItem.size === selectedSize
            );

            if (existingItemIndex >= 0) {
                const updatedCheckout = [...prev];
                const existingItem = updatedCheckout[existingItemIndex];

                const updatedCount = existingItem.count + itemCount;

                updatedCheckout[existingItemIndex] = {
                    ...existingItem,
                    count: updatedCount,
                    totalPrize: updatedCount * selectedPrize
                };


                return updatedCheckout;
            } else {

                return [...prev, item];
            }
        });

        alert("Item added successfully!")


    }

    ///Count Total Item & Total prize
    const totalItem = checkoutDetails.reduce((acc, item) => acc + item.count, 0);
    const totalPrize = checkoutDetails.reduce((acc, item) => acc + item.totalPrize, 0);


    return <div className="w-full flex flex-col items-center my-20">

        <div className="flex gap-10">
            <div className="w-[90%]">
                <img className="w-" src={selectedImage} alt="ItemLogo" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="w-full">
                    <h1 className="text-[#364A63] font-bold text-[40px]">{cardDetails?.title}</h1>
                    <p className="flex items-center gap-2" >
                        <ReactStars
                            count={5}
                            value={cardDetails?.rating}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <span className="text-[#8091A7] text-sm font-normal">({cardDetails?.review} Review)</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#6576FF] text-2xl font-bold my-2" >

                        <span className="text-[#8091A7] text-xl font-normal line-through">
                            ${cardDetails?.mainPrize}.00
                        </span>

                        ${cardDetails?.discountPrize}.00
                    </p>
                    <p className="text-[#8091A7] font-normal text-lg">
                        {cardDetails?.description}
                    </p>
                    <div className="flex items-center gap-10 my-5">
                        <p className="flex flex-col text-[#8091A7] font-normal ">
                            Type
                            <span className="text-[#364A63] font-bold text-base">{cardDetails?.type}</span>
                        </p>
                        <p className="flex flex-col text-[#8091A7] font-normal ">
                            Model Number
                            <span className="text-[#364A63] font-bold text-base">{cardDetails?.modelNumber}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#364A63] font-bold text-lg">Band Color</p>
                        <p className="flex items-center my-3 gap-5">
                            {cardDetails?.bandColor.map((col) => (
                                <span
                                    key={col.color}

                                    onClick={() => {
                                        setSelectedColor(col?.color);
                                        setSelectedImage(col?.image);
                                        setColorName(col?.colorName);
                                        setSelectedItemName(col?.itemName);
                                    }}
                                    className={`cursor-pointer flex items-center justify-center rounded-full ${col.color === selectedColor ? "h-[28px] w-[28px]" : "h-[16px] w-[16px]"
                                        }`}
                                    style={{
                                        backgroundColor: col.color === selectedColor ? "white" : col.color,
                                        border: col.color === selectedColor ? `3px solid ${selectedColor}` : "none",
                                    }}
                                >
                                    {col.color === selectedColor && (
                                        <span
                                            className="rounded-full"
                                            style={{
                                                backgroundColor: selectedColor,
                                                height: "18px",
                                                width: "18px",
                                            }}
                                        ></span>
                                    )}
                                </span>
                            ))}
                        </p>

                    </div>
                    <div>
                        <p className="text-[#364A63] font-bold text-lg">Wrist Size</p>
                        <p className="flex items-center my-3 gap-5">
                            {cardDetails?.wristSize.map((size) => (
                                <span
                                    key={size?.size}

                                    onClick={() => {
                                        setSelectedPrize(size?.prize);
                                        setSelectedSize(size?.size);
                                    }}
                                    className={`cursor-pointer flex items-center gap-2 justify-center w-[73px] h-9 rounded-md "
                                    }`}
                                    style={{

                                        border: size?.size === selectedSize ? `1px solid #6576FF` : "1px solid #DBDFEA",
                                    }}
                                >
                                    <span className={`${size?.size === selectedSize ? "text-[#6576FF]" : ""} font-bold`}>{size?.size}</span>
                                    <span className="text-[#8091A7] font-medium">${size?.prize}</span>

                                </span>
                            ))}
                        </p>

                    </div>
                    <div className=" flex items-center gap-5 mt-10">
                        <div className="flex ">
                            <p onClick={handleDecrease} className="w-[35px] cursor-pointer h-[36px] border flex justify-center items-center text-[18px] rounded-s-md"><FiMinus /></p>
                            <p className="w-[60px] h-[36px] border flex justify-center items-center text-[18px]">{itemCount}</p>
                            <p onClick={() => setItemCount((pre) => pre + 1)} className="w-[35px] h-[36px] border flex justify-center items-center text-[18px] cursor-pointer rounded-e-md"><GoPlus /></p>
                        </div>
                        <button
                            onClick={handleAddToCard}
                            className={`${itemCount === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#6576FF] cursor-pointer"
                                } text-white text-[13px] font-bold w-[105px] h-[36px] flex justify-center items-center rounded-md`}
                            disabled={itemCount === 0}
                        >
                            Add to Card
                        </button>

                        <p className="cursor-pointer" onClick={handleLikeToggle}>
                            {isLiked ?
                                <FaHeart className="w-[25px] h-[25px] text-[#6576FF] " />
                                :
                                <IoIosHeartEmpty className="w-[25px] h-[25px] text-[#6576FF]" />
                            }

                        </p>


                    </div>


                </div>
            </div>




        </div>
        {
            totalItem > 0 && <button onClick={handleOpenModal} className="bg-[#FFBB5A] w-[139px] h-[42px] text-[#364A63] rounded-2xl font-bold my-20">Checkout <span className="bg-[#fff] py-[2px] px-1 rounded-md">{totalItem}</span></button>
        }

         {/* Modal */}
        <CardModal
            totalPrize={totalPrize}
            totalItem={totalItem}
            isModalOpen={isModalOpen}
            checkoutDetails={checkoutDetails}
            handleCloseModal={handleCloseModal} />

    </div >;
};
export default Card;