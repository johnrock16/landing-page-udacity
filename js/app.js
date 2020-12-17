const app=()=>{
    const navbar = document.getElementById('navbar__list');
    const sections = [...document.getElementsByTagName('section')];
    const navBars = sections.map((section) => (section.getAttribute('data-nav')));
    const fragment = document.createDocumentFragment();

    /**
     * Create a NavBar on screen
     */
    const createNavBar=()=>{
        navBars.forEach( (name, index) => {
            const item = createElement(navbar_item_element_prefab(name,index));
            item.addEventListener('click', scrollToSection);
            fragment.appendChild(item);
        });
        navbar.appendChild(fragment);
    }

    /**
     * This function give class active to some element and remove the previous element with this class
     * @param {string} elementClass - name of the element has been changed by new
     * @param {HTMLDivElement} nextActive - the next section will be active
     */
    const toogleActive=(elementClass, nextActive)=>{
        const previousActive = document.querySelector(`.${elementClass}`);
        previousActive.classList.remove(elementClass);
        nextActive.classList.add(elementClass);
    }
    
    /**
     * Scroll to selected section
     */
    const scrollToSection=(event)=>{
        const targetSectionId = event.target.getAttribute('section-id');
        const targetSection = document.getElementById(targetSectionId);
        const linkActive = document.getElementById(`link${targetSectionId.match(/\d+/g).join('')}`);
        targetSection.scrollIntoView({behavior: "smooth"});
        toogleActive('active-link',linkActive);
        toogleActive('active-section',targetSection);
    }

    return(createNavBar());
}
app();