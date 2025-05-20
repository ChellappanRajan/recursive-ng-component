export interface Folder {
  name: string;
  folders?: Folder[];
}

export type Folders = Folder[];
