const{expect}=require("@playwright/test")
class loginPage
{
constructor(page)
{
    this.page=page
    this.username="#user-name"
    this.password="input[name='password']"
    this.loginbutton="input[name='login-button']"
    this.verifyloginsuccessful="//div[@class='app_logo']"
}
async LoginToPage(){
    await this.page.fill(this.username,"standard_user")
    await this.page.fill(this.password,"secret_sauce")
    await this.page.click(this.loginbutton)
}
async verifylogin()
{
    await expect(this.page.locator("//div[@class='app_logo']")).toContainText("Swag Labs")
}

}
module.exports=loginPage;