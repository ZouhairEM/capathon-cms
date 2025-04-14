import { Accordion, AccordionTab } from "primereact/accordion";
//import React from "react";
//import "primereact/resources/themes/lara-light-indigo/theme.css";
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
   
export default function Faq() {
  return (
  
      <Accordion activeIndex={0}>
        <AccordionTab header="I have registered but haven't received a confirmation e-mail yet?">
          <p className="m-0">
            Our registration form service won't mail a confirmation, it will
            only confirm registration in the browser tab. Also, we will send out
            an e-mail to everyone once the registration period closes. We adhere
            to a "first come first serve" policy, so register as soon as
            possible.
          </p>
        </AccordionTab>
        <AccordionTab header="I have registered but I want to cancel, what now?">
          <p className="m-0">
            (this counts for both solo entries and teams, please explain your
            situation when you want to unregister one or multiple team-members)
            Owners of team registrations should be able to alter their entries,
            if they used a Google account to register or still have a active
            browser session.
          </p>
          <p className="m-0">
            Canceling before registrations close: Send a message to one of the
            capathon members or mail capathonfs.bnl@capgemini.com.
          </p>
          <p className="m-0">
            Canceling after registrations close: Send a message A.S.A.P. to one
            of the capathon members or mail capathonfs.bnl@capgemini.com, please
            add a valid reason for cancelation.
          </p>
          <p className="m-0">
            Changing registration as a team: If the creator of the team entry
            decides to leave and cannot alter the registration. Send a message
            to one of the capathon members or mail capathonfs.bnl@capgemini.com,
            please explain who will stay and who will leave.
          </p>
        </AccordionTab>
        <AccordionTab header="Do I need to be a developer to join?">
          <p className="m-0">
            No! All roles are welcome here, it's safe place to learn new skills
            or grow your existing ones. All we ask of you is to create a
            product. There are plenty of code free or blueprint based solutions
            as alternatives. Pairing solo entries, we will try to foster a good
            balance.
          </p>
          <p className="m-0">THE GOAL IS NOT TO JUST PRESENT A PRESENTATION!</p>
        </AccordionTab>
        <AccordionTab header="I registered solo, what now? to be a developer to join?">
          <p className="m-0">
            Solo entries will be paired with a team after the registration
            period ends. A team can made up out of multiple solo entries or
            smaller teams that didn't yet hit the five person limit. I found a
            team! That is great news! Try to see if you can alter your own entry
            and change it from solo to team. Or, if your newly found team
            already had a entry, see if they can add you. If any issue occurs
            send a message to one of the capathon members or mail
            capathonfs.bnl@capgemini.com, we will see if we can update the
            information from our side.
          </p>
        </AccordionTab>
        <AccordionTab header="I registered as a team, what now?">
          <p className="m-0">
            A team is limited up to 5 members. You are not required to have 5
            members, but keep in mind that we (the organisation) could pair you
            up with some solo entries.
          </p>
        </AccordionTab>
      </Accordion>
  );
}
