
// 1. ul#categories içindeki kategorilerin sayısını hesapla ve konsola yazdır
const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');
console.log(`Number of categories: ${categories.length}`);

// 2. Her bir kategori için başlık ve öğe sayısını konsola yazdır
for (let category of categories) {
    const categoryTitle = category.querySelector('h2').textContent;  // <h2> başlığını al
    const categoryItems = category.getElementsByTagName('li');        // Kategorinin tüm <li> öğelerini al
    const numberOfItems = categoryItems.length;                       // Kategori içindeki öğe sayısını hesapla
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfItems}`)
}