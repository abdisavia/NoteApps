import CardContent from "./CardContent";

export default function NoteCard({title,content,stared=false}){
    return(
        <a className="relative inline-block w-full h-56 ">
            <div className="relative w-[150px] h-[200px] bg-yellow-light rounded-xl">
                <div className="absolute w-[38px] h-[44px] bg-white right-0 rounded-bl-xl"></div>
                <div className="absolute w-[30px] h-[30px] bg-yellow-light right-[30px] top-[0px] rounded-br-[70px] rounded-tr-xl"></div>
                {/* <div className="absolute w-[65px] h-[35px] bg-yellow-light right-[41px] "></div> */}
                <div className="absolute z-20 w-[25px] h-[25px] bg-white right-[14px] top-[18px] rounded-full"></div>
                <div className="absolute w-[30px] h-[30px] bg-yellow-light rotate-180 right-[0px] top-[40px] rounded-br-[70px] rounded-bl-xl"></div>
                <div className="absolute z-30 w-[32px] h-[32px] rounded-full bg-yellow-light right-0 top-[5px] flex justify-center items-center">
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                        <path d="M7.69525 4.66373C8.72092 2.8245 9.23335 1.90488 9.99997 1.90488C10.7666 1.90488 11.279 2.8245 12.3047 4.66373L12.5702 5.13973C12.8616 5.66269 13.0073 5.92416 13.234 6.09659C13.4607 6.26902 13.744 6.33297 14.3107 6.46088L14.8255 6.57745C16.817 7.02835 17.8119 7.2534 18.0491 8.01516C18.2854 8.77612 17.6071 9.57026 16.2495 11.1577L15.8982 11.5682C15.5128 12.0191 15.3193 12.2449 15.2327 12.5234C15.1461 12.8027 15.1753 13.1038 15.2335 13.7053L15.287 14.2534C15.4918 16.3719 15.5946 17.4307 14.9745 17.9011C14.3544 18.3722 13.4218 17.9424 11.5583 17.0843L11.075 16.8624C10.5456 16.618 10.2809 16.4965 9.99997 16.4965C9.71906 16.4965 9.45435 16.618 8.92492 16.8624L8.44244 17.0843C6.57811 17.9424 5.64554 18.3714 5.02625 17.9019C4.40535 17.4307 4.50816 16.3719 4.71297 14.2534L4.7664 13.7061C4.82468 13.1038 4.85383 12.8027 4.7664 12.5242C4.68059 12.2449 4.48711 12.0191 4.10178 11.569L3.75045 11.1577C2.39287 9.57107 1.71449 8.77693 1.95087 8.01516C2.18806 7.2534 3.18378 7.02754 5.17521 6.57745L5.69006 6.46088C6.25592 6.33297 6.53845 6.26902 6.76592 6.09659C6.99259 5.92416 7.1383 5.66269 7.42973 5.13973L7.69525 4.66373Z" fill={stared?"#3F4E4F":"#ffffff"}/>
                    </svg>
                </div>
            </div>
            <CardContent title={title} content={content}/>
        </a>
    );
}