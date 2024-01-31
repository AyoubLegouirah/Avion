import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black relative text-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[15px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                                        Maverick
                                    </h5>
                                    <ul className="list-none mt-6">
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                A propos de nous
                                            </a>
                                        </li>
                                        <li className="mt-[10px]">
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Conditions d'utilisation
                                            </a>
                                        </li>
                                        <li className="mt-[10px]">
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Politique de confidentialité
                                            </a>
                                        </li>
                                        <li className="mt-[10px]">
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Politique de cookies
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-6 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                                        Lien
                                    </h5>
                                    <ul className="list-none mt-6">
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Réseaux sociaux
                                            </a>
                                        </li>
                                        <li className="mt-[10px]">
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Plan du site
                                            </a>
                                        </li>
                                        <li className="mt-[10px]">
                                            <a href="#" className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out">
                                                Documentation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                                        Newsletter
                                    </h5>
                                    <p className="mt-6">
                                        Inscrivez-vous et recevez les derniers conseils par e-mail.
                                    </p>
                                    <form>
                                        <div className="grid grid-cols-1 ">
                                            <div className="my-3">
                                                <label className="form-label">Ecrivez votre email<span className="text-red-600">*</span></label>
                                                <div className="relative mt-2">
                                                    <input
                                                        type="email"
                                                        className="w-full py-2 px-3 rounded h-10 outline-none bg-transparent rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 border border-gray-800/90 text-gray-100  focus:shadow-none focus:border-gray-800/90"
                                                        placeholder="Email"
                                                        name="email"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                id="submitsubscribe"
                                                name="send"
                                                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-white border-[#FFCDA3] text-[#FFCDA3] rounded-md"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-7 px-0 border-t border-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-left text-center">
                                <p className="mb-0">
                                    © 2023 Maverick - Tous droits réservés
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

