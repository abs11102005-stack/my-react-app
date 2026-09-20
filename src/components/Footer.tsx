import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
                    <div className="container mx-auto flex justify-between py-16 px-8">
                        
                        
                        <div>
                            <img src={Logo} alt="" />
                            <p className="text-[#64748B] py-4">Curated tools, technologies, and resources for developers building <br />
                                modern software.</p>
                            <div>
                                <ul className="flex gap-4 items-center text-[#475569] py-5">
                                    <li>GitHub</li>
                                    <li>Twitter</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>

                    
                        <div>
                            <ul >
                                <li className="text-[#0F172A] font-semibold py-1">PRODUCT</li>
                                <span className="text-[#64748B]">
                                    <li className="py-1">Home</li>
                                    <li className="py-1">Technologies</li>
                                    <li className="py-1">Projects</li>
                                </span>
                            </ul>
                        </div>
                        
                        <div>
                            <ul >
                                <li className="text-[#0F172A] font-semibold py-1">COMPANY</li>
                                <span className="text-[#64748B]">
                                    <li className="py-1">About</li>
                                    <li className="py-1">Contact</li>
                                    <li className="py-1">Careers</li>
                                </span>
                            </ul>
                        </div>

                        <div>
                            <ul >
                                <li className="text-[#0F172A] font-semibold">LEGAL</li>
                                <span className="text-[#64748B]">
                                    <li className="py-1">Privacy Policy</li>
                                    <li className="py-1">Terms of Service</li>
                                </span>
                            </ul>
                        </div>
                
                
                
                </div>

                <div className="text-[#94A3B8] flex justify-between items-center container mx-auto py-8 px-8 border-t border-gray-200">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <ul className="flex gap-4">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>

        </div>
        
    );
};

export default Footer;