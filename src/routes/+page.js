const baseUrl = "https://nz.openfoodfacts.org/api/v2"
const searchQuery = "/search?categories_tags=Beverage&"
const fields = "fields=product_name,image_url,product_quantity,product_quantity_unit,nutrition_grades,allergens,ingredients,ingredients_text,nutriments&page_size=00#1000"
const fetchFromUrl = `${baseUrl}${searchQuery}${fields}`;

export async function load({ fetch }) {
    const res = await fetch(fetchFromUrl);
    const drink = await res.json();
    return { drink };
}