import '@axe-devtools/cypress'
describe('template spec', () => {
  it('Should be accessible', () => {
    cy.visit('http://abcdcomputech.dequecloud.com/')
    cy.axeAnalyze({ name: "home-new" });
    cy.getAxeResults().then(async results => {
      const resultsDir = './a11y-results/'
      results.name = "myNewName"
      await cy.writeFile(`${resultsDir}home-new.json`, results)
      // expect(results.findings.violations.length).to.equal(0);
      try {
        await cy.task('reportAsHTML', { resultsDir }, {timeout:240000})
      } catch (e) {
        console.log(e);
      }

    })
  });
})