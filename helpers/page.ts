import { TPageOgImage } from "@/types";
import { getBaseUrl, getParams } from "./url";

export const getPageOgImageUrl = ({
  caption,
  title,
  description,
}: TPageOgImage) => ({
  default: encodeURI(
    `${getBaseUrl()}/api/og-page?${getParams({ caption, title, description })}`
  ),
});
