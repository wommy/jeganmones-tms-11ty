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

console.log(materials);

console.log`adding Quantity`
materials[0].quantity.push(1000);

console.log( materials[0].quantity.reduce(( total, amount ) => total + amount ) )

console.log`to Material.Name`
console.log( materials[0].name )
