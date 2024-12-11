import React from "react";

const CardModal = ({ isModalOpen, checkoutDetails, handleCloseModal, totalItem, totalPrize }) => {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[670px] ">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[22px] font-bold text-[#364A63]">Your Cart</h2>

                </div>
                <div>
                    <div className="overflow-x-auto max-h-[70vh] overflow-y-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr className="">
                                    <th className="text-left px-4 py-2 font-normal border-b border-gray-300 text-[#8091A7]">Item</th>
                                    <th className="text-center px-4 py-2 font-normal border-b border-gray-300 text-[#8091A7]">Color</th>
                                    <th className="text-center px-4 py-2 font-normal border-b border-gray-300 text-[#8091A7]">Size</th>
                                    <th className="text-center px-4 py-2 font-normal border-b border-gray-300 text-[#8091A7]">Qnt</th>
                                    <th className="text-right px-4 py-2 font-normal border-b border-gray-300 text-[#8091A7]">Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {checkoutDetails?.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-4 border-b border-gray-300 flex items-center gap-2 text-[#364A63]">
                                            <p><img className="h-[36px] w-[36px] rounded-md" src={item?.itemImage} alt="logoItem" /></p>

                                            {item.itemName}</td>
                                        <td className="px-4 py-2 border-b border-gray-300 text-center text-[#364A63]">{item?.color}</td>
                                        <td className="px-4 py-2 border-b border-gray-300 text-center text-[#364A63] font-bold">{item?.size}</td>
                                        <td className="px-4 py-2 border-b border-gray-300 text-center text-[#364A63] font-bold">{item?.count}</td>
                                        <td className="px-4 py-2 border-b border-gray-300 text-right text-[#364A63] font-bold">${item?.totalPrize}.00</td>


                                    </tr>

                                ))}
                                <tr>
                                    <td className="px-4 py-4 text-[#364A63] font-bold">Total</td>
                                    <td></td>
                                    <td></td>
                                    <td className="px-4 py-3 text-[#364A63] font-bold text-center">{totalItem}</td>
                                    <td className="px-4 py-3 text-[#364A63] font-bold text-right">${totalPrize}.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="flex gap-5 justify-end mt-4">
                    <button
                        onClick={handleCloseModal}
                        className="px-4 py-2 border rounded-md hover:bg-gray-400 font-bold text-[#364A63]"
                    >
                        Continue Shopping
                    </button>
                    <button
                        onClick={handleCloseModal}
                        className="px-4 py-2 bg-[#6576FF] font-bold text-[#fff] rounded-md hover:bg-blue-400"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
