import Logo from "../../../assets/png/logo-no-background.png";

export default function ApplicationLogo(props) {
    return (
      <img
      className="block h-20  mb-5 w-auto fill-current text-gray-800 dark:text-gray-200"
      src={Logo}
      alt="logo" />
    );
}
