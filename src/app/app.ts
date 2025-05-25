import { Component, signal, ViewEncapsulation } from "@angular/core";
import { FolderIcon } from "./ui/recursive/folder-icon";
import { FolderComponet } from "./ui/recursive/folder";
import type { Folders } from "./ui/recursive/folder-model";
import { single } from "rxjs";
import { CarouselComponent } from "./ui/carousel";
import { CardComponent } from "./card";
import { ArrowAnimationComponent } from "./arrow-animation";
import { ToasterComponent } from "./ui/Toaster/toaster";
import { ToastComponent } from "./ui/Toaster/toast";

@Component({
  selector: "app-root",
  imports: [
    FolderComponet,
    CardComponent,
    ToasterComponent,
    ToastComponent,
    CarouselComponent,
    ArrowAnimationComponent,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  encapsulation: ViewEncapsulation.None,
})
export class App {
  activeIndex = signal(0);

  toasts: number[] = [];

  cards = new Array(7);

  images = [
    {
      src: "https://placehold.co/600x400/EEE/31343C",
      caption: "1 A simple, fast and free image placeholder service.",
    },
    {
      src: "https://placehold.co/600x400/EEE/31343C",
      caption: "2 A simple, fast and free image placeholder service.",
    },
    {
      src: "https://placehold.co/600x400/EEE/31343C",
      caption: "3 A simple, fast and free image placeholder service.",
    },
  ];
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

  onBold() {
    const selObj = window.getSelection();
    const range = selObj!.getRangeAt(0);
    const marker = document.createElement("mark");
    console.log(range);
    range.surroundContents(marker);
  }
  addToast() {
    this.toasts.push(1);
  }

  invert(idx: number) {
    return this.toasts.length - (idx + 1);
  }
}
