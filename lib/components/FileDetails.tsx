import type { FileInformation } from "@/lib/domain/types";

export const FileDetails = ({ data }: { data: FileInformation }) => {
  return (
    <span>{data.missing ? "File not found." : `It's a ${data.type}`}</span>
  );
};
