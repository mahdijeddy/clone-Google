function Footer() {
    return (
        <footer className="absolute bottom-0 left-[50%] -translate-x-[50%] p-6 text-sm text-gray-600 whitespace-nowrap">
            <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved </p>
        </footer>
    );
}

export default Footer;
