describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe("Google", function() {
  it("page title should be Google", function() {
    expect(browser.get("/").getTitle()).toBe("Google");
  });
});
