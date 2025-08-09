
import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig ={
  testMatch:["pomtests/addToCart.test.ts"],
  use:{
     baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless:false,
    screenshot:'on',
    video:"on"
  },
  reporter:[["dot"],["json",{outputFile:"jsonReports/jsonReport.json"}],["html",{open:"always"}]]
};

export default config;