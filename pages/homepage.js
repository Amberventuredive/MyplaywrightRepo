class HomePage
{
constructor(page)
{
    this.page=page
    this.selectlowtohighoption="select[@class='product_sort_container']"
    

}
async selectPriceLowToHighest()
{

     this.page.locator(this.selectlowtohighoption).selectOption({value:"lohi"} );
}

}
module.exports=HomePage