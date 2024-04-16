const observeSection = (sectionRef) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger animation when 50% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animation when component comes into viewport
                    // You can call your animation function here
                    console.log('Component is in viewport');
                }
            });
        }
    }, options);

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
};

export default observeSection;
