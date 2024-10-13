import { faBed, faChild, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateAction, useState } from 'react';


const TravelOptions = () => {
    const [rooms, setRooms] = useState(1);
    const [children, setChildren] = useState(0);
    const [adults, setAdults] = useState(1);
    const [showMenu, setShowMenu] = useState(false);


    const handleIncrease = (setter: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: (prev: any) => any): void; }) => {
        setter((prev: number) => prev + 1);
    };

    const handleDecrease = (setter: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: (prev: any) => number): void; }) => {
        setter((prev: number) => (prev > 0 ? prev - 1 : 0));
    };

    const handleApply = () => {
       
        setShowMenu(false);
    };

    // Formatação da exibição no botão
    const buttonText = `${rooms} ${rooms === 1 ? 'quarto' : 'quartos'}, ${adults + children} ${adults + children === 1 ? 'viajante' : 'viajantes'}`;

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {buttonText}
                </button>
            </div>

            {showMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {/* Quartos */}
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
                        <FontAwesomeIcon icon={faBed} className="icon" />
                            Quartos
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleDecrease(setRooms)}
                                    className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <span className="px-3">{rooms}</span>
                                <button
                                    onClick={() => handleIncrease(setRooms)}
                                    className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Crianças */}
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
                        <FontAwesomeIcon icon={faChild} className="icon" />
                            Crianças
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleDecrease(setChildren)}
                                    className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <span className="px-3">{children}</span>
                                <button
                                    onClick={() => handleIncrease(setChildren)}
                                    className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Adultos */}
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
                        <FontAwesomeIcon icon={faPerson} className="icon" />
                            Adultos
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleDecrease(setAdults)}
                                    className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <span className="px-3">{adults}</span>
                                <button
                                    onClick={() => handleIncrease(setAdults)}
                                    className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Botão Aplicar */}
                        <div className="px-4 py-2">
                            <button
                                onClick={handleApply}
                                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TravelOptions;
