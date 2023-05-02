import '@axe-devtools/cypress'
describe('template spec', () => {
  it('Should be accessible', () => {
    const resultsDir = './a11y-results/'

    cy.visit('http://abcdcomputech.dequecloud.com/')
    cy.axeAnalyze({ name: "home-new" });
    cy.getAxeResults().then(async results => {
      await cy.writeFile(`${resultsDir}home-new.json`, results)
      try {
        await cy.task('reportAsHTML', { resultsDir }, {timeout:240000})
      } catch (e) {
        console.log(e);
      }

    })
    cy.readFile(`${resultsDir}home-new.json`).then((data) =>{
      expect(data.findings.violations.length).to.equal(0);
    });

  });
})