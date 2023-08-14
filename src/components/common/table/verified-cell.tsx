import VerifiedIcon from "../icons/verified-icon";
import UnverifiedIcon from "../icons/unverified-icon";
import { verification } from "@utils/constant";

export const VerifiedCell = ({ row }: any) => {
  const verified = row.original.status === verification[0];

  return verified ? (
    <VerifiedIcon width={25} height={25} />
  ) : (
    <UnverifiedIcon width={25} height={25} />
  );
};
