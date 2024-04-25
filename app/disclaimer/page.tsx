import { Separator } from "@/components/ui/separator";
import React from "react";

export default function DisclaimerPage() {
  return (
    <div className="w-11/12 mx-auto space-y-6 my-4">
      {/* first disclaimer */}
      <div>
        <h4 className="text-center text-2xl uppercase">Disclaimer</h4>
        <p className="text-center">
          The information provided by Affection Arcade (“we,” “us” or “our”) on
          this site is for general information purposes only
        </p>
        <p className="text-center leading-loose">
          {" "}
          (the “Site”) is for general informational purposes only. All
          information on the Site is provided in good faith, however we make no
          representation or warranty of any kind, express or implied, regarding
          the accuracy, adequacy, validity, reliability, availability or
          completeness of any information on the Site. UNDER NO CIRCUMSTANCE
          SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND
          INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
          INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR
          RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>
      </div>
      <Separator decorative className="bg-neutral-500" />
      {/* second disclaimer */}
      <div>
        <h4 className="text-center text-2xl uppercase">
          External link Disclaimer
        </h4>

        <p className="text-center leading-loose">
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability or
          completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
          RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION
          OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE
          OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A
          PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
          BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </p>
      </div>
      {/* Third disclaimer */}
      <Separator decorative className="bg-neutral-500" />

      <div>
        <h4 className="text-center text-2xl uppercase">
          Affiliates Disclaimer
        </h4>

        <p className="text-center leading-loose">
          The Site may contain links to affiliate websites, and we receive an
          affiliate commission for any purchases made by you on the affiliate
          website using such links
        </p>
      </div>
    </div>
  );
}
