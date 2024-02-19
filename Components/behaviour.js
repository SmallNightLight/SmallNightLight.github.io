function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    var headerOffset = 100;
    var elementPosition = section.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}