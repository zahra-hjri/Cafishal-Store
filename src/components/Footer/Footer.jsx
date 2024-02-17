const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    console.log("zarin")
  }
  return <div className="flex text-gray-950 my-4 p-6 justify-center items-center text-md">
  <li className="px-1 text-sm md:text-sm">instam</li>
    <li className="px-1 text-sm md:text-sm">telegram</li>
    <li className="px-1 text-sm md:text-sm">what's app</li>
    <li className="px-1 text-sm md:text-sm">Twitter</li>
    <li className="px-1 text-sm md:text-sm">zoom</li>
  </div>;
};

export default Footer;
