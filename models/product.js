const getProductsByCategoryId = db => async (id) => {
    const products = await db('products').select('*').where('id', function (){
    this
        .select('categories_products.product_id')
        .from('categories_products')
        .whereRaw('categories_products.product_id = products.id')//sends directly to query
        .where('category_id', id)//prevents sql injection
})
    return products
}

module.exports = {
    getProductsByCategoryId
}