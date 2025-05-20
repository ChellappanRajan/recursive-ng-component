import { Component, ViewEncapsulation } from "@angular/core";
import { FolderIcon } from "./folder-icon";
import { FolderComponet } from "./folder";
import type { Folders } from "./folder-model";

@Component({
  selector: "app-root",
  imports: [FolderComponet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  encapsulation: ViewEncapsulation.None,
})
export class App {
  folders: Folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "Action",
              folders: [
                {
                  name: "2000s",
                  folders: [
                    {
                      name: "Popular",
                      folders: [
                        {
                          name: "Gladiator.mp4",
                        },
                        {
                          name: "American-Beauty.mp4",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "2010s",
                  folders: [],
                },
              ],
            },
            {
              name: "Comedy",
              folders: [
                {
                  name: "2000s",
                  folders: [],
                },
              ],
            },
          ],
        },
        {
          name: "Music",
          folders: [
            {
              name: "Rock",
              folders: [],
            },
            {
              name: "Classical",
              folders: [],
            },
          ],
        },
        {
          name: "Pictures",
          folders: [],
        },
        {
          name: "Documents",
          folders: [],
        },
        { name: "passwords.txt" },
      ],
    },
  ];
}
