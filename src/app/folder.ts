import { Component, input, signal, ViewEncapsulation } from "@angular/core";
import type { Folder } from "./folder-model";
import { FolderIcon } from "./folder-icon";
import { DocumentIcon } from "./document-icon";
import { ChevronIcon } from "./right-arrow";

@Component({
  selector: "folder",
  imports: [FolderIcon, ChevronIcon, DocumentIcon],
  templateUrl: "./folder.html",
  encapsulation: ViewEncapsulation.None,
})
export class FolderComponet {
  folder = input<Folder>();
  isOpen = signal<boolean>(true);

  onClick() {
    this.isOpen.set(!this.isOpen());
  }
}
