function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <p class="footer">
                <span>Copyright: {year}</span>
            </p>
        </>
    );
}
export default Footer;
