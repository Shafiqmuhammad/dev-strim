import Wrapper from "../../wrapper";

const Newsletter = () => {
    return (
        <Wrapper>
            <div className="flex w-full justify-center items-center bg-black">
                <div className="flex flex-col justify-between items-center  w-full gap-y-5 my-20 relative">
                    <h3 className="text-[2rem] font-bold text-[#f38a0b]">Subscribe Our Newsletter</h3>
                    <p className="text-[rem] font-semibold text-[#f38a0b]">Get the latest information and promo offers directly</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Input email address"
                            className="px-2 border border-black text-sm py-2 lg:w-[30%] sm:w-[40%] w-full"
                        />
                        <button className="text-white  bg-[#f38a0b] px-8 py-2">
                            Get Started
                        </button>
                    </div>
                    <div className="absolute text-center bs:text-center w-full font-bold text-[4rem] bs:text-[4.8rem] sm:[6.2rem] lg:text-[7.5rem]  tracking-widest -z-[10] text-[#212121]/5 overflow-hidden">
                        Newsletter
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Newsletter;