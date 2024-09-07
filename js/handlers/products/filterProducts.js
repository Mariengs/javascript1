export function filterProducts(products, filter) {
  const searchInput = document.querySelector("#search");
  return products.filter((product) => {
    let matchesFilter = true;
    if (filter.category) {
      matchesFilter = matchesFilter && product.tags.includes(filter.category);
    }
    if (filter.gender) {
      matchesFilter = matchesFilter && product.gender === filter.gender;
    }
    return matchesFilter;
  });
}
