const UrlMap = (curr) =>{
	if (curr === "/about")
		return ("About Us");
	else if (curr === "/description")
		return ("바른의사 연구소");
	else if (curr === "/products")
		return ("Doctors Made");
	else if (curr === "/contact")
		return ("Contact Us");
	else
		return null;
}

export default UrlMap;