# axeDevToolsCypress12
This project is intened to provide an example configuration for calling the axe DevTools Cypress API with the configuration changes in Cypress version 12. Please note the slight differences in the Cyrpess config file and the lack of a plugins file compared to Deque's axe DevTools Cypress documentation. 
Please note that node will currently raise a warning when attempting to install the axe DevTools Cypress API with Cypress 12, so you may need use the --force argument to bypass the warning, as in the following command:
npm install --force
By providing axe DevTools credentials from an npmrc file, as descirbed by Deque's documentation, you should be able to run the example spec and generate reports by running npx Cypress run.

This project also includes an example yaml for executing these axe DevTools Cypress tests through GitLab. 
