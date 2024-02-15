const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    console.log("zahra")
  }
  return <div className="flex text-gray-950 my-4 p-4 justify-center items-center text-sm">
  <li className="px-1 text-xs md:text-sm">instam</li>
    <li className="px-1 text-xs md:text-sm">telegram</li>
    <li className="px-1 text-xs md:text-sm">what's app</li>
    <li className="px-1 text-xs md:text-sm">Twitter</li>
    <li className="px-1 text-xs md:text-sm">zoom</li>
  </div>;
};

export default Footer;
