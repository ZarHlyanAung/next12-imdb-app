const HeaderIcon = ({ Icon, title }) => {
  return (
    <div className="mx-4 flex flex-col items-center hover:text-white active:text-yellow-400 cursor-pointer text-sm  lg:mx-6 lg:text-base ">
      <Icon className="h-8" />

      <p className="my-2">{title}</p>
    </div>
  );
};

export default HeaderIcon;
