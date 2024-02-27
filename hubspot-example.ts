// Need to set the 'DENO_TLS_CA_STORE' env var to 'system' to ensure we don't get a
// TLS error going through any corporate proxies.
Deno.env.set("DENO_TLS_CA_STORE","system");

import { Client } from "npm:@hubspot/api-client";
import * as dotenv from "https://deno.land/std@0.217.0/dotenv/mod.ts";

const env = await dotenv.load();
const access_token = env['HUBSPOT_ACCESS_TOKEN'];

const hubspotClient = new Client({ accessToken: access_token });

hubspotClient.crm.contacts.basicApi.getPage(10).then((results) => {
	console.log(results);
}).catch((err) => {
	console.error(err);
});


