export type FileInformation =
  { missing: false; type: "file" | "folder" } | { missing: true };

export type CheckURLResponse =
  | {
      success: true;
      data: FileInformation;
    }
  | { success: false; message: string };
