import packageJson from "../../package.json";

import { getVersionLabel } from "@/lib/versioning";

export const SITE_VERSION = packageJson.version;
export const SITE_VERSION_LABEL = getVersionLabel(SITE_VERSION);
