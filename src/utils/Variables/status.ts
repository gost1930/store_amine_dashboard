// icons
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { BsTruck } from "react-icons/bs";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

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

export const categoriesStatistics = [
    { title: "إجمالي التصنيفات", value: 0, className: "text-green2 bg-green1 border-green2", icon: CiBoxes },
    { title: "التصنيفات الظاهرة في الموقع", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlineVisibility },
    { title: "التصنيفات المخفية في الموقع", value: 0, className: "text-red1 bg-red2 border-red1", icon: MdOutlineVisibilityOff },
]

export const deliveryStatistics = [
    { title: "إجمالي الولايات", value: 0, className: "text-green2 bg-green1 border-green2", icon: GrMapLocation },
    { title: "الولايات الظاهرة في الموقع", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlineVisibility },
    { title: "الولايات المخفية في الموقع", value: 0, className: "text-red1 bg-red2 border-red1", icon: MdOutlineVisibilityOff },
]

export const productsStatistics = [
    { title: "إجمالي المنتجات", value: 0, className: "text-blue1 bg-blue2 border-blue1", icon: CiBoxes },
    { title: "مخزون المنتجات الخاضعة للمراقبة", value: 0, className: "text-yellow1 bg-yellow2 border-yellow1", icon: MdOutlineVisibility },
    { title: "المنتجات المتوفرة في المخزون", value: 0, className: "text-green2 bg-green1 border-green2", icon: MdOutlineVisibilityOff },
    { title: "المنتجات غير المتوفرة في المخزون", value: 0, className: "text-red1 bg-red2 border-red1", icon: MdOutlineVisibilityOff },
]

export const reviewsStatistic =[
    { title: "اجمالي التقييمات", value: 0, className: "text-green2 bg-green1 border-green2", icon: MdOutlineVisibility },
]