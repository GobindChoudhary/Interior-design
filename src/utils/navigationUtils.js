export const scrollToForm = (navigate) => {
    // If we are already on the homepage, scroll. 
    // If not, navigate with a query param.
    if (window.location.pathname === '/') {
        const formEl = document.getElementById("lead-form");
        if (formEl) {
            formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    } else {
        navigate('/?scrollToForm=true');
    }
};

export const scrollToPrice = () => {
    // Scroll to the price estimate section
    const priceEl = document.querySelector('section.bg-\\[\\#f8f8f8\\]'); // Based on current HomePage structure
    // Better: use an ID if it exists or find by text
    const headings = document.getElementsByTagName('h2');
    for (let h of headings) {
        if (h.innerText.includes('Get an estimate for your')) {
            h.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
        }
    }
};
