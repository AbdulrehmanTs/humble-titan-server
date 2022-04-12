const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

const states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];
var officials = [];
var filtered = [];
var sorted = [];

let president = [];
let visePresident = [];
let senators = [];
let USRepresentative = [];
let governors = [];
let lieutenantGovernors = [];
let SupremeCourtJustice = [];
let CourtOfAppealsJudge = [];
let PublicServiceCommissioner = [];
let AttorneyGeneral = [];
let StateTreasurer = [];
let CommissionerOfAgricultureAndIndustries = [];
let CommissionerOfAgriculture = [];
let StateAuditor = [];
let SecretaryOfState = [];
let PublicServiceCommissionPresident = [];
let SupremeCourtAssociateJustice = [];
let SupremeCourtChiefJustice = [];
let CommissionerOfStateLands = [];
let StateSupremeCourtJustice = [];
let StateMineInspector = [];
let SuperintendentOfPublicInstruction = [];
let CorporationCommissioner = [];
let StateController = [];
let InsuranceCommissioner = [];
let StateComptroller = [];
let Mayor = [];
let CityCouncilChairman = [];
let CityCouncilMember = [];
let AuditorOfAccounts = [];
let ChiefFinancialOfficer = [];
let OfficeOfHawaiianAffairsTrustee = [];
let StateAuditorOfPublicAccounts = [];
let BoardofElementaryandSecondaryEducationMember = [];
let CommissionerofAgricultureandForestry = [];
let CommissionerofInsurance = [];
let SecretaryoftheCommonwealth = [];
let StateBoardofEducationMember = [];
let UniversityTrustee = [];
let Regents = [];
let UniversityGovernor = [];
let CommissionerofLabor = [];
let TaxCommissioner = [];
let PublicAdvocate = [];
let CityComptroller = [];
let CourtofCriminalAppealsJudge = [];
let AuditorGeneral = [];
let GeneralTreasurer = [];
let SuperintendentofEducation = [];
let PublicUtilitiesCommissioner = [];
let SchoolandStateLandCommissioner = [];
let RailroadCommissioner = [];
let CommissionerofGeneralLandOffice = [];
let ComptrollerofPublicAccounts = [];

var sorted = [];
const getData = async () => {
  for (let i = 0; i < states.length; i++) {
    await axios
      .get(
        `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${states[i]}`
      )
      .then((result) => {
        var officialsResult = [...result.data.officials];
        var officesResult = [...result.data.offices];
        officesResult &&
          officesResult.map((office) => {
            office.officialIndices.map((item) => {
              officialsResult[item].office = office;
              officials = [...officials, ...officialsResult];
            });
          });
      })
      .catch((error) => {
        console.log(states[i], error.message);
      });
  }
  const names = officials.map((o) => o.name);
  filtered = officials.filter(
    ({ name }, index) => !names.includes(name, index + 1)
  );

  filtered.map((item) => {
    if (item.office.name == "President of the United States") {
      president.push(item);
    }
    if (item.office.name == "Vice President of the United States") {
      visePresident.push(item);
    }
    if (item.office.name == "U.S. Senator") {
      senators.push(item);
    }
    if (item.office.name == "U.S. Representative") {
      USRepresentative.push(item);
    }
    if (item.office.name.startsWith("Governor")) {
      governors.push(item);
    }
    if (item.office.name.startsWith("Lieutenant Governor")) {
      lieutenantGovernors.push(item);
    }
    if (item.office.name.endsWith("Supreme Court Justice")) {
      SupremeCourtJustice.push(item);
    }
    if (item.office.name.endsWith("Court of Appeals Judge")) {
      CourtOfAppealsJudge.push(item);
    }
    if (item.office.name.endsWith("Public Service Commissioner")) {
      PublicServiceCommissioner.push(item);
    }
    if (item.office.name.endsWith("Attorney General")) {
      AttorneyGeneral.push(item);
    }
    if (item.office.name.includes("State Treasurer")) {
      StateTreasurer.push(item);
    }
    if (
      item.office.name.endsWith("Commissioner of Agriculture and Industries")
    ) {
      CommissionerOfAgricultureAndIndustries.push(item);
    }
    if (item.office.name.includes("Commissioner of Agriculture")) {
      CommissionerOfAgriculture.push(item);
    }
    if (item.office.name.includes("State Auditor")) {
      StateAuditor.push(item);
    }
    if (item.office.name.endsWith("Secretary of State")) {
      SecretaryOfState.push(item);
    }
    if (item.office.name.endsWith("Public Service Commission President")) {
      PublicServiceCommissionPresident.push(item);
    }
    if (item.office.name.endsWith("Supreme Court Associate Justice")) {
      SupremeCourtAssociateJustice.push(item);
    }
    if (item.office.name.endsWith("Supreme Court Chief Justice")) {
      SupremeCourtChiefJustice.push(item);
    }
    if (item.office.name.endsWith("Commissioner of State Lands")) {
      CommissionerOfStateLands.push(item);
    }
    if (item.office.name.endsWith("State Supreme Court Justice")) {
      StateSupremeCourtJustice.push(item);
    }
    if (item.office.name.endsWith("State Mine Inspector")) {
      StateMineInspector.push(item);
    }
    if (item.office.name.endsWith("Superintendent of Public Instruction")) {
      SuperintendentOfPublicInstruction.push(item);
    }
    if (item.office.name.endsWith("Corporation Commissioner")) {
      CorporationCommissioner.push(item);
    }
    if (item.office.name.endsWith("State Controller")) {
      StateController.push(item);
    }
    if (item.office.name.endsWith("Insurance Commissioner")) {
      InsuranceCommissioner.push(item);
    }
    if (item.office.name.endsWith("State Comptroller")) {
      StateComptroller.push(item);
    }
    if (item.office.name.startsWith("Mayor")) {
      Mayor.push(item);
    }
    if (item.office.name.endsWith("City Council Chairman")) {
      CityCouncilChairman.push(item);
    }
    if (item.office.name.endsWith("City Council Member")) {
      CityCouncilMember.push(item);
    }
    if (item.office.name.endsWith("Auditor of Accounts")) {
      AuditorOfAccounts.push(item);
    }
    if (item.office.name.endsWith("Chief Financial Officer")) {
      ChiefFinancialOfficer.push(item);
    }
    if (item.office.name.endsWith("Office of Hawaiian Affairs Trustee")) {
      OfficeOfHawaiianAffairsTrustee.push(item);
    }
    if (item.office.name.endsWith("State Auditor of Public Accounts")) {
      StateAuditorOfPublicAccounts.push(item);
    }
    if (
      item.office.name.endsWith(
        "Board of Elementary and Secondary Education Member"
      )
    ) {
      BoardofElementaryandSecondaryEducationMember.push(item);
    }
    if (item.office.name.endsWith("Commissioner of Agriculture and Forestry")) {
      CommissionerofAgricultureandForestry.push(item);
    }
    if (item.office.name.endsWith("Commissioner of Insurance")) {
      CommissionerofInsurance.push(item);
    }
    if (item.office.name.endsWith("Secretary of the Commonwealth")) {
      SecretaryoftheCommonwealth.push(item);
    }
    if (item.office.name.endsWith("State Board of Education Member")) {
      StateBoardofEducationMember.push(item);
    }
    if (item.office.name.endsWith("University Trustee")) {
      UniversityTrustee.push(item);
    }
    if (item.office.name.endsWith("Regent")) {
      Regents.push(item);
    }
    if (item.office.name.endsWith("University Governor")) {
      UniversityGovernor.push(item);
    }
    if (item.office.name.includes("Commissioner of Labor")) {
      CommissionerofLabor.push(item);
    }
    if (item.office.name.endsWith("Tax Commissioner")) {
      TaxCommissioner.push(item);
    }
    if (item.office.name.endsWith("Public Advocate")) {
      PublicAdvocate.push(item);
    }
    if (item.office.name.endsWith("City Comptroller")) {
      CityComptroller.push(item);
    }
    if (item.office.name.endsWith("Court of Criminal Appeals Judge")) {
      CourtofCriminalAppealsJudge.push(item);
    }
    if (item.office.name.endsWith("Auditor General")) {
      AuditorGeneral.push(item);
    }
    if (item.office.name.endsWith("General Treasurer")) {
      GeneralTreasurer.push(item);
    }
    if (item.office.name.endsWith("Superintendent of Education")) {
      SuperintendentofEducation.push(item);
    }
    if (item.office.name.endsWith("Public Utilities Commissioner")) {
      PublicUtilitiesCommissioner.push(item);
    }
    if (item.office.name.endsWith("School and State Land Commissioner")) {
      SchoolandStateLandCommissioner.push(item);
    }
    if (item.office.name.endsWith("Railroad Commissioner")) {
      RailroadCommissioner.push(item);
    }
    if (item.office.name.endsWith("Commissioner of General Land Office")) {
      CommissionerofGeneralLandOffice.push(item);
    }
    if (item.office.name.endsWith("Comptroller of Public Accounts")) {
      ComptrollerofPublicAccounts.push(item);
    }
  });

  sorted = [
    ...sorted,
    ...president,
    ...visePresident,
    ...senators,
    ...USRepresentative,
    ...governors,
    ...lieutenantGovernors,
    ...SupremeCourtJustice,
    ...CourtOfAppealsJudge,
    ...PublicServiceCommissioner,
    ...AttorneyGeneral,
    ...StateTreasurer,
    ...CommissionerOfAgriculture,
    ...StateAuditor,
    ...SecretaryOfState,
    ...PublicServiceCommissionPresident,
    ...SupremeCourtAssociateJustice,
    ...SupremeCourtChiefJustice,
    ...CommissionerOfStateLands,
    ...StateSupremeCourtJustice,
    ...StateMineInspector,
    ...SuperintendentOfPublicInstruction,
    ...CorporationCommissioner,
    ...StateController,
    ...InsuranceCommissioner,
    ...StateComptroller,
    ...Mayor,
    ...CityCouncilChairman,
    ...CityCouncilMember,
    ...AuditorOfAccounts,
    ...ChiefFinancialOfficer,
    ...OfficeOfHawaiianAffairsTrustee,
    ...StateAuditorOfPublicAccounts,
    ...BoardofElementaryandSecondaryEducationMember,
    ...CommissionerofAgricultureandForestry,
    ...CommissionerofInsurance,
    ...SecretaryoftheCommonwealth,
    ...StateBoardofEducationMember,
    ...UniversityTrustee,
    ...Regents,
    ...UniversityGovernor,
    ...CommissionerofLabor,
    ...TaxCommissioner,
    ...PublicAdvocate,
    ...CityComptroller,
    ...CourtofCriminalAppealsJudge,
    ...AuditorGeneral,
    ...GeneralTreasurer,
    ...SuperintendentofEducation,
    ...PublicUtilitiesCommissioner,
    ...SchoolandStateLandCommissioner,
    ...RailroadCommissioner,
    ...CommissionerofGeneralLandOffice,
    ...ComptrollerofPublicAccounts,
  ];
};
getData();
// var dayInMilliseconds = 1000 * 60 * 60 * 24;
// setInterval(getData(), dayInMilliseconds);

app.get("/", (req, res) => {
  res.json(sorted);
});
app.get("/president", (req, res) => {
  res.json(president);
});
app.get("/visePresident", (req, res) => {
  res.json(visePresident);
});
app.get("/senators", (req, res) => {
  res.json(senators);
});
app.get("/USRepresentative", (req, res) => {
  res.json(USRepresentative);
});
app.get("/governors", (req, res) => {
  res.json(governors);
});
app.get("/lieutenantGovernors", (req, res) => {
  res.json(lieutenantGovernors);
});
app.get("/SupremeCourtJustice", (req, res) => {
  res.json(SupremeCourtJustice);
});
app.get("/CourtOfAppealsJudge", (req, res) => {
  res.json(CourtOfAppealsJudge);
});
app.get("/PublicServiceCommissioner", (req, res) => {
  res.json(PublicServiceCommissioner);
});
app.get("/AttorneyGeneral", (req, res) => {
  res.json(AttorneyGeneral);
});
app.get("/StateTreasurer", (req, res) => {
  res.json(StateTreasurer);
});
app.get("/CommissionerOfAgriculture", (req, res) => {
  res.json(CommissionerOfAgriculture);
});
app.get("/StateAuditor", (req, res) => {
  res.json(StateAuditor);
});
app.get("/SecretaryOfState", (req, res) => {
  res.json(SecretaryOfState);
});
app.get("/PublicServiceCommissionPresident", (req, res) => {
  res.json(PublicServiceCommissionPresident);
});
app.get("/SupremeCourtAssociateJustice", (req, res) => {
  res.json(SupremeCourtAssociateJustice);
});
app.get("/SupremeCourtChiefJustice", (req, res) => {
  res.json(SupremeCourtChiefJustice);
});
app.get("/CommissionerOfStateLands", (req, res) => {
  res.json(CommissionerOfStateLands);
});
app.get("/StateSupremeCourtJustice", (req, res) => {
  res.json(StateSupremeCourtJustice);
});
app.get("/StateMineInspector", (req, res) => {
  res.json(StateMineInspector);
});
app.get("/SuperintendentOfPublicInstruction", (req, res) => {
  res.json(SuperintendentOfPublicInstruction);
});
app.get("/CorporationCommissioner", (req, res) => {
  res.json(CorporationCommissioner);
});
app.get("/StateController", (req, res) => {
  res.json(StateController);
});
app.get("/InsuranceCommissioner", (req, res) => {
  res.json(InsuranceCommissioner);
});
app.get("/StateComptroller", (req, res) => {
  res.json(StateComptroller);
});
app.get("/Mayor", (req, res) => {
  res.json(Mayor);
});
app.get("/CityCouncilChairman", (req, res) => {
  res.json(CityCouncilChairman);
});
app.get("/CityCouncilMember", (req, res) => {
  res.json(CityCouncilMember);
});
app.get("/AuditorOfAccounts", (req, res) => {
  res.json(AuditorOfAccounts);
});
app.get("/ChiefFinancialOfficer", (req, res) => {
  res.json(ChiefFinancialOfficer);
});
app.get("/OfficeOfHawaiianAffairsTrustee", (req, res) => {
  res.json(OfficeOfHawaiianAffairsTrustee);
});
app.get("/StateAuditorOfPublicAccounts", (req, res) => {
  res.json(StateAuditorOfPublicAccounts);
});
app.get("/BoardofElementaryandSecondaryEducationMember", (req, res) => {
  res.json(BoardofElementaryandSecondaryEducationMember);
});
app.get("/CommissionerofAgricultureandForestry", (req, res) => {
  res.json(CommissionerofAgricultureandForestry);
});
app.get("/CommissionerofInsurance", (req, res) => {
  res.json(CommissionerofInsurance);
});
app.get("/SecretaryoftheCommonwealth", (req, res) => {
  res.json(SecretaryoftheCommonwealth);
});
app.get("/StateBoardofEducationMember", (req, res) => {
  res.json(StateBoardofEducationMember);
});
app.get("/UniversityTrustee", (req, res) => {
  res.json(UniversityTrustee);
});
app.get("/Regents", (req, res) => {
  res.json(Regents);
});
app.get("/UniversityGovernor", (req, res) => {
  res.json(UniversityGovernor);
});
app.get("/CommissionerofLabor", (req, res) => {
  res.json(CommissionerofLabor);
});
app.get("/TaxCommissioner", (req, res) => {
  res.json(TaxCommissioner);
});
app.get("/PublicAdvocate", (req, res) => {
  res.json(PublicAdvocate);
});
app.get("/CityComptroller", (req, res) => {
  res.json(CityComptroller);
});
app.get("/CourtofCriminalAppealsJudge", (req, res) => {
  res.json(CourtofCriminalAppealsJudge);
});
app.get("/AuditorGeneral", (req, res) => {
  res.json(AuditorGeneral);
});
app.get("/GeneralTreasurer", (req, res) => {
  res.json(GeneralTreasurer);
});
app.get("/SuperintendentofEducation", (req, res) => {
  res.json(SuperintendentofEducation);
});
app.get("/PublicUtilitiesCommissioner", (req, res) => {
  res.json(PublicUtilitiesCommissioner);
});
app.get("/SchoolandStateLandCommissioner", (req, res) => {
  res.json(SchoolandStateLandCommissioner);
});
app.get("/RailroadCommissioner", (req, res) => {
  res.json(RailroadCommissioner);
});
app.get("/CommissionerofGeneralLandOffice", (req, res) => {
  res.json(CommissionerofGeneralLandOffice);
});
app.get("/ComptrollerofPublicAccounts", (req, res) => {
  res.json(ComptrollerofPublicAccounts);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
