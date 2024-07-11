import money from "../assets/Money.svg";
import security from "../assets/Security.svg";
import EMI from "../assets/EMI.svg";
import payBills from "../assets/pay-bills.png";
import airtime from "../assets/airtime.png";
import moneyTransfer from "../assets/money-transfer.png";
import tollFee from "../assets/toll-fee.png";
import phone from "../assets/phone.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import download from "../assets/download.svg";
import get from "../assets/get.svg";
import appstore from "../assets/appstore.svg";
import googleplay from "../assets/googleplay.svg";
import paymentImage from "../assets/card.png";
import payment from "../assets/payment.png";
import embellishment from "../assets/embellishment.svg";

export const navItems = [
  { label: "For Individuals", href: "/individual" },
  { label: "For Businesses", href: "/business" },
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
];

export const features = [
  {
    title: "User Friendly",
    description: "Highly responsive and easy to navigate",
    icon: money,
  },
  {
    title: "Secure",
    description:
      "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.",
    icon: security,
  },
  {
    title: "Fast",
    description:
      "Transacting takes only a few seconds - it's convenient and safe.",
    icon: EMI,
  },
];

export const services = [
  {
    title: "Pay bills",
    description: "Paying your bills has never been so easy.",
    image: payBills,
  },
  {
    title: "Buy Airtime & Data",
    description: "Never get caught with low airtime and data again!",
    image: airtime,
  },
  {
    title: "Money Transfer",
    description: "Transferring money is now hassle-free.",
    image: moneyTransfer,
  },
  {
    title: "Pay Toll Fee",
    description: "Never worry about getting a toll ticket again.",
    image: tollFee,
  },
];

export {
  apple,
  google,
  download,
  get,
  appstore,
  googleplay,
  paymentImage,
  payment,
  embellishment,
};
export default phone;
