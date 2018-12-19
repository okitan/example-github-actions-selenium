describe("Google Test", function() {
  it("Shows Google", function() {
    browser.url("/");

    browser.addValue('input[name="q"]', "DeNA SW");

    browser.waitForVisible('ul[role="listbox"]', 3000);

    browser.elements('ul[role="listbox"]').click("div=dena swet");

    expect(browser.elements("body").getText()).to.include("DeNA Testing Blog");
  });
});
