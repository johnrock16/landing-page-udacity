/**
 * This functions has been to make more pratice create elements
 * @param {{...HTMLElement,attribute,child}} buildELement 
 */
const createElement = (buildELement) => {
    const element = document.createElement(buildELement.element);
    Object.keys(buildELement).forEach((key) => {
        element[key] = buildELement[key];
        if (key === 'attribute') {
            Object.keys(buildELement[key]).forEach((attributeKey) => {
                element.setAttribute(attributeKey, buildELement[key][attributeKey]);
            });
        }
    });
    if (buildELement.child) {
        buildELement.child.forEach((child) => {
            element.append(createElement(child))
        })
    }
    return element;
}

const section_item_element_prefab = (index,active) => {
    return {
        "element": 'section',
        "id": `section${index}`,
        "className": (active)?"active-section":null,
        "attribute":{
            "data-nav": `Section ${index}`,
        },
        "child": [
            {
                "element": "div",
                "className": "landing__container",
                "child": [
                    {
                        'element':'h2',
                        'innerText':`Section ${index}`
                    },
                    {
                        'element':'p',
                        'innerText':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`
                    },
                    {
                        'element':'p',
                        'innerText':`Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
                    }
                ]
            }
        ]
    }
}

const navbar_item_element_prefab = (name, index) => {
    return {
        element: 'li',
        className: (index === 0) ? 'menu__link active-link' : 'menu__link',
        id: `link${index + 1}`,
        innerText: name,
        attribute: {
            'section-id': name.replace(/\s/g, '').toLowerCase(),
        }
    }
}