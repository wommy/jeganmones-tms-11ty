const materials = new Array;

materials.push({"name": "lighter_blank","quantity": [0]});

// console.log(materials);

materials.push(
    {
        "name": "lighter_art",
        "quantity": [0]
    }
);

materials.push(
    {
        "name": "lighter_laminate",
        "quantity": [0]
    }
);

materials.push(
    {
        "name": "lighter_bag",
        "quantity": [0]
    }
);

// create_material = (name) => {
//     "name": name,
//     "quantity": 0
// }

// keyVal = (key, val) => `"${key}": ${val}`
// createMaterial = ( name ) => { keyVal("name", name), keyVal("quantity", 0)}
// createMaterial("lighter_bag");
// console.log(createMaterial("lighter_bag"));

// display material array
console.log(materials);

// for each in materialArray
// display name: quantity



console.log( 'to the First Name: ' + materials[0].name )
console.log( 'adding Quantity: ' + 1000 )
materials[0].quantity.push(1000);


materials[0].quantity.reduce(( total, amount ) => total + amount )

// show more totals
console.log(materials);
