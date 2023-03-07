import React, { createContext, ReactNode } from "react";
import { Organisation } from "../types/api";
import { Client } from "@petfinder/petfinder-js";
import { useEffect, useState } from "react";
import { OrganisationResponse } from "../types";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
if (!(REACT_APP_CLIENT_ID && REACT_APP_CLIENT_SECRET)) {
    throw new Error("Missing REACT_APP_CLIENT_ID and/or REACT_APP_CLIENT_SECRET env variable");
}

const client = new Client({
    apiKey: REACT_APP_CLIENT_ID,
    secret: REACT_APP_CLIENT_SECRET,
});

export const OrgContext = createContext<null | Organisation[]>(null);

interface ProviderProps {
    children: ReactNode;
}

export function OrgProvider({ children }: ProviderProps) {
    const options = { limit: 20 };

    const [organisations, setOrganisations] = useState<OrganisationResponse["organizations"]>([]);

    useEffect(() => {
        console.log("OrgProvider useEffect triggered");
        client.organization
            .search(options)
            .then(resp => {
                console.log(resp.data);
                const data: OrganisationResponse = resp.data;
                setOrganisations(data.organizations);
            })
            .catch(console.error);
    }, []);

    return <OrgContext.Provider value={organisations}>{children}</OrgContext.Provider>;
}
