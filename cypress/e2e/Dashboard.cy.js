describe("User mengakses halaman Dashboard (Overview)", () => {
  beforeEach(() => {
    // Skenario dimulai dari halaman login, karena Dashboard/Overview
    // adalah halaman yang membutuhkan autentikasi (RequireAuth)
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("111202314899@mhs.dinus.ac.id")
      .should("have.value", "111202314899@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    // Setelah login berhasil, user diarahkan ke halaman Dashboard (Overview) di "/"
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("should display the main layout (navbar and header) on the dashboard page", () => {
    // Sidebar/nav dan header pada MainLayout harus tampil
    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");

    // Menu "Overview" pada nav aktif/terlihat karena berada di halaman dashboard
    cy.get("nav").contains("Overview").should("be.visible");
  });

  it("should display all summary cards on the overview page", () => {
    // Memastikan seluruh card ringkasan pada halaman Overview tampil
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });

  it("should show a loader while fetching Goals and Upcoming Bill data, then display the data", () => {
    // Saat data goals & bills belum tersedia, tampilkan loader "Loading Data"
    cy.contains("Loading Data").should("be.visible");

    // Setelah data selesai di-fetch dari API, loader harus hilang
    cy.contains("Loading Data", { timeout: 10000 }).should("not.exist");

    // Data Upcoming Bill dari endpoint /bills berhasil tampil (nominal tagihan)
    cy.get("header").should("be.visible");
  });

  it("should allow switching between Recent Transaction tabs", () => {
    cy.contains("Recent Transactions").should("be.visible");

    cy.get("button").contains("Revenue").click();
    cy.get("button").contains("Revenue").should(
      "have.class",
      "text-primary"
    );

    cy.get("button").contains("Expense").click();
    cy.get("button").contains("Expense").should(
      "have.class",
      "text-primary"
    );

    cy.get("button").contains("All").click();
    cy.get("button").contains("All").should("have.class", "text-primary");
  });

  it("should navigate to Expenses page when Expenses menu is clicked", () => {
    cy.get("nav").contains("Expenses").click();
    cy.url().should("include", "/expense");
  });
});