export function removeFromCart(e){
    console.log(e.target.value);
    const sku = e.target.value;
    const { selectedItems } = this.state;
    let filteredProducts = selectedItems.filter(product => {
      return product.sku !== sku
    })
    console.log('filteredProducts:', filteredProducts);
  }