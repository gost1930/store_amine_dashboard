// icons
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { BsTruck } from "react-icons/bs";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";

export const ordersStatus = [
    { title: "لم يرد على الإتصال... 1", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlinePhoneCallback },
    { title: "لم يرد على الإتصال... 2", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlinePhoneCallback },
    { title: "لم يرد على الإتصال... 3", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlinePhoneCallback },
    { title: "مؤكدة", value: 0, className: "text-green2 bg-green1 border-green2", icon: MdDownloadDone },
    { title: "جاهزة", value: 0, className: "text-blue1 bg-blue2 border-blue1", icon: BsBoxSeam },
    { title: "مُؤجلة", value: 0, className: "text-blue1 bg-blue2 border-blue1", icon: IoIosTimer },
    { title: "في الطريق للزبون", value: 0, className: "text-purple1 bg-purple2 border-purple1", icon: BsTruck },
    { title: "تم تسليمها للزبون", value: 0, className: "text-blue1 bg-blue2 border-blue1", icon: LiaUserCheckSolid },
    { title: "ملغاة من المتجر", value: 0, className: "text-red1 bg-red2 border-red1", icon: IoClose },
    { title: "ملغاة من الزبون", value: 0, className: "text-red1 bg-red2 border-red1", icon: IoClose },
    { title: "مرتجع", value: 0, className: "text-red1 bg-red2 border-red1", icon: RiArrowGoBackLine },
]