import { Verifier } from "@pact-foundation/pact";

describe("Cliente Provider", ()=>{
    it("should verify the contract", async()=>{
        return new Verifier({
            providerBaseUrl: 'http://localhost:3333', // <- location of your running provider
            pactUrls: [ path.resolve(process.cwd(), "../../pacts/frontend-clients-service.json") ],
          })
            .verifyProvider()
            .then(() => {
              console.log('Pact Verification Complete!');
            });
    })
})