import buildValidatorSummaryURL from "../../apis/beaconchaApi/buildValidatorSummaryURL";
import { expect } from "chai";

describe("Test the building of a unique URL for all the validators", () => {
  it("should return a valid URL", () => {
    const allValidatorsInfo = [
      {
        status: "ok",
        data: {
          validatorindex: 1,
        },
      },
      {
        status: "ok",
        data: {
          validatorindex: 2,
        },
      },
    ];
    const network = "mainnet";
    const summaryValidatorURL = buildValidatorSummaryURL({
      allValidatorsInfo,
      network,
    });
    expect(summaryValidatorURL).to.equal(
      "https://beaconcha.in/dashboard?validators=1,2"
    );
  });
});
