"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const portfolioOperation = auth_1.amazonAdvertising.portfolio;
const PORTFOLIO_ID = 123;
// Create one or more portfolios.
const createPortfoliosParams = [
    {
        name: `My Portfolio`,
        budget: {
            amount: 100.0,
            policy: 'dateRange',
            startDate: '20191119',
            endDate: '20191119',
        },
        state: 'enabled',
    },
];
portfolioOperation.createPortfolios(createPortfoliosParams);
// Retrieve a portfolio by ID.
portfolioOperation.getPortfolio(PORTFOLIO_ID);
// Retrieve a portfolio along with additional properties by ID.
portfolioOperation.getPortfolioExtended(PORTFOLIO_ID);
// Retrieve a list of up to 100 portfolios using the specified filters.
portfolioOperation.listPortfolios();
// Retrieve a list of up to 100 portfolios with additional properties using the specified filters.
portfolioOperation.listPortfoliosExtended();
// Update one or more portfolios.
const updatePortfoliosParams = [
    {
        portfolioId: 1,
        name: 'portfolio',
    },
];
portfolioOperation.updatePortfolios(updatePortfoliosParams);
//# sourceMappingURL=crud-portfolio.js.map