import React, { useState } from "react";
import { ClientSources } from "../add-client.component";

export default React.forwardRef<ClientSourceRef, ClientSourceInputsProps>(
  function ClientSourceInputs(props: ClientSourceInputsProps, ref) {
    const [clientSource, setClientSource] = useState(
      ClientSources[props.client.clientSource || "friend"]
    );
    const [couldVolunteer, setCouldVolunteer] = useState(
      props.client.couldVolunteer || false
    );

    React.useEffect(() => {
      if (ref) {
        // @ts-ignore
        ref.current = {
          clientSource,
          couldVolunteer
        };
      }
    });

    return (
      <>
        <div>
          <label>
            <span>How did they hear about Comunidades Unidas</span>
            <select
              value={clientSource}
              onChange={evt => setClientSource(evt.target.value)}
              autoFocus
              required
            >
              {Object.keys(clientSources).map(clientSource => (
                <option key={clientSource} value={clientSource}>
                  {clientSources[clientSource]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Would they like to volunteer for Comunidades Unidas?</span>
            <input
              type="checkbox"
              name="couldVolunteer"
              checked={couldVolunteer}
              onChange={evt => setCouldVolunteer(Boolean(evt.target.checked))}
            />
          </label>
        </div>
      </>
    );
  }
);

export const clientSources = {
  facebook: "Facebook",
  instagram: "Instagram",
  website: "Website",
  promotionalMaterial: "Promotional Material",
  consulate: "Consulate",
  friend: "Friend",
  previousClient: "C.U. Client",
  employee: "C.U. Employee",
  sms: "Text Message",
  radio: "Radio",
  tv: "TV",
  promotora: "Promotora",
  other: "Other"
};

type ClientSourceInputsProps = {
  client: ClientSourceInputClient;
};

type ClientSourceInputClient = {
  clientSource?: string;
  couldVolunteer?: boolean;
};

type ClientSourceRef = {
  clientSource: string;
  couldVolunteer: boolean;
};
