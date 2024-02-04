const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    console.log("test")
  }
  return <div className="flex text-gray-950 my-1 p-3 justify-center items-center text-xs">
  <li>instagram</li>
    <li>telegram</li>
    <li>what's app</li>
    <li>Twitter</li>
    <li>zoom</li>
  </div>;
};

export default Footer;
