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
    return element;
}

const navbar_item_element_prefab = (name,index)=>{
    return {
        element:'li',
        className:(index === 0) ? 'menu__link active-link' : 'menu__link',
        id:`link${index+1}`,
        innerText:name,
        attribute:{
            'section-id':name.replace(/\s/g, '').toLowerCase(),
        }
    }
}